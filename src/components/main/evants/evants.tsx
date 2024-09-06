import { useAppSelector } from "@/hooks/hooks"
import styles from "./evants.module.scss"
import { languages } from "@/language/languages"
import { useEffect, useRef, useState } from "react"
import { EvantItem } from "./evantItem/evantItem"
import axios from "axios"
import { defaultEvant } from "@/constants/mainItemsDefault/mainItemsDefault"
import { Pagination } from "./pagination/pagination"
import { EventBaner } from "./event-baner/event-baner"
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls"
import { IEventItem } from "@/interfaces/main/main.interface"

export interface IPagination{
    limit: number,
    offset: number,
    page: number
}

export default function Evants(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [events, setEvents] = useState<IEventItem[]>([defaultEvant])
    const [viewEvents, setViewEvents] = useState<IEventItem[]>(events)
    const [disconect, setDisconect] = useState<boolean>(false)
    const header_event = useRef<HTMLDivElement | null>(null)
    
    //set default pagination
    const pagination: IPagination = {
        limit: 3,
        offset: 3,
        page: 1
    }

    const [pag, setPag] = useState<IPagination>(pagination)

    // get events
    const fetchEvents = async ()=>{
        try{
            const responce = await axios.get(apiUrls.eventsUrl+languageParameter+languageSelected)
            setEvents(responce.data)
            if (disconect) setDisconect(false)
        }catch{
            setEvents([defaultEvant])
            setDisconect(true)
        }
    }
    //set image and events
    useEffect(()=>{
        
        fetchEvents()
    },[languageSelected])

    //set list for next page
    const nextPage = ()=>{
        const header = header_event.current
        if(viewEvents.length === 3 && header){
            setPag({...pag,
                page: pag.page+1,
                offset: pag.limit*(pag.page+1)
            })
            setViewEvents(events.slice(((pag.limit*(pag.page+1))-pag.limit), pag.limit*(pag.page+1)))
            header.scrollIntoView()
        }
    }
    //set list for previous page
    const previousPage = ()=>{
        const header = header_event.current
        if (pag.page > 1 && header){
            setPag({...pag,
                page: pag.page-1,
                offset: pag.limit*(pag.page-1)
            })
            setViewEvents(events.slice(((pag.limit*(pag.page-1))-pag.limit), pag.limit*(pag.page-1)))
            header.scrollIntoView()
        }
    }
    // set list for specific page
    const setPage = (page: number) =>{
        const header = header_event.current
        setPag({...pag,
            page: page,
            offset: pag.limit*page
        })
        setViewEvents(events.slice(((pag.limit*(page))-pag.limit), pag.limit*(page)))
        if (header) header.scrollIntoView()
    }
    // set default list
    useEffect(()=>{
        setViewEvents(events.slice((pag.offset-pag.limit), pag.offset))
    },[events])

    return(
        <>
        <article className={styles.evants_wrap}>
            <div className={styles.evants_container}>
                <div className={styles.evants_header} ref={header_event}>
                    <h2>{languages[languageSelected].evants}</h2>
                </div>
                {viewEvents.length != 0 &&
                <>
                    {viewEvents.length > 0 && viewEvents[0]._id !== "0" && viewEvents.map((item, i: any)=>{
                        return(
                            <div key={i}>
                                <EvantItem 
                                image={ item.image}
                                dataEvent={item.dataEvent}
                                adressEvent={item.adressEvent}
                                description={item.description}
                                titleEvent={item.titleEvent}
                                />
                            </div>
                        )
                    })}
                </>
                }
            </div>
            {events.length > 3 &&
                <Pagination event = {events} page = {pag.page} nextPage = {nextPage} previousPage = {previousPage} setPage = {setPage}/>
            }
            {viewEvents.length == 0 || disconect && <EventBaner/>}
        </article>
        </>
    )
}