import { useAppSelector } from '@/hooks/hooks'
import styles from './report.module.scss'
import { languages } from '@/language/languages'
import { IconReport } from '@/components/icons/icons-donate/icons-donate'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { apiUrls, languageParameter } from '@/constants/apiUrls/apiUrls'
import { IReportItem } from '@/interfaces/supportUs/supportUs.interface'
import { IPagination } from '@/components/main/evants/evants'
import { Pagination } from '@/components/main/evants/pagination/pagination'
import { pagination } from '@/constants/pagination/pagination'

export default function Report(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)

    const [reports, setReports] = useState<IReportItem[] | []>([])
    const [viewEvents, setViewEvents] = useState<IReportItem[] | []>(reports)
    const [disconect, setDisconect] = useState<boolean>(false)
    const [pag, setPag] = useState<IPagination>(pagination)

    const header_report = useRef<HTMLDivElement | null>(null)

    //set list for next page
    const nextPage = ()=>{
        const header = header_report.current
        if(viewEvents.length === 3 && header){
            setPag({...pag,
                page: pag.page+1,
                offset: pag.limit*(pag.page+1)
            })
            setViewEvents(reports.slice(((pag.limit*(pag.page+1))-pag.limit), pag.limit*(pag.page+1)))
            header.scrollIntoView()
        }
    }
    //set list for previous page
    const previousPage = ()=>{
        const header = header_report.current
        if (pag.page > 1 && header){
            setPag({...pag,
                page: pag.page-1,
                offset: pag.limit*(pag.page-1)
            })
            setViewEvents(reports.slice(((pag.limit*(pag.page-1))-pag.limit), pag.limit*(pag.page-1)))
            header.scrollIntoView()
        }
    }
    // set list for specific page
    const setPage = (page: number) =>{
        const header = header_report.current
        setPag({...pag,
            page: page,
            offset: pag.limit*page
        })
        setViewEvents(reports.slice(((pag.limit*(page))-pag.limit), pag.limit*(page)))
        if (header) header.scrollIntoView()
    }
    // set default list
    useEffect(()=>{
        setViewEvents(reports.slice((pag.offset-pag.limit), pag.offset))
    },[reports, pag.offset, pag.limit])

    useEffect(()=>{
        const fetchReports = async ()=>{
            try{
                const response = await axios.get(apiUrls.report+languageParameter+languageSelected)
                setReports(response.data)
                if (disconect) setDisconect(false)
            }
            catch{
                setReports([])
                setDisconect(true)
            }
        }
        fetchReports()
    },[languageSelected, disconect])

    return(
        <div className={styles.report_wrap}>
            <div className={styles.report_container}>
                <div className={styles.report_header_wrap}>
                    <h2>{languages[languageSelected].report_header}</h2>
                    <p>{languages[languageSelected].report_description}</p>
                </div>
                <div className={styles.document_wrap} ref={header_report}>
                    {viewEvents.map((item)=>{
                        return(
                            <div className={styles.document_item_wrap} key={item.titleReport}>
                                <Link className={styles.document_item_icon} href={item.linkReport} target='_blank'><IconReport/></Link>
                                <div className={styles.document_item_text}>
                                    <Link href={item.linkReport}>{item.titleReport}</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {reports.length > 3 &&
                <Pagination event = {reports} page = {pag.page} 
                nextPage = {nextPage}
                previousPage = {previousPage}
                setPage = {setPage}/>
                }
            </div>
        </div>
    )
}