import { useAppSelector } from '@/hooks/hooks'
import styles from './report.module.scss'
import { languages } from '@/language/languages'
import { IconExtract, IconMounthReport, IconRegistrtion } from '@/components/icons/icons-donate/icons-donate'
import { extractUrl, mounth_reportUrl, registrationUrl } from '@/constants/report/report'
import Link from 'next/link'

export default function Report(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)

    const documentItems = [
        {name: languages[languageSelected].extract, img: <IconExtract/>, url: extractUrl},
        {name: languages[languageSelected].registration, img: <IconRegistrtion/>, url: registrationUrl},
        {name: languages[languageSelected].mounth_report, img: <IconMounthReport/>, url: mounth_reportUrl}
    ]

    return(
        <div className={styles.report_wrap}>
            <div className={styles.report_container}>
                <div className={styles.report_header_wrap}>
                    <h2>{languages[languageSelected].report_header}</h2>
                    <p>{languages[languageSelected].report_description}</p>
                </div>
                <div className={styles.document_wrap}>
                    {documentItems.map((item)=>{
                        return(
                            <div className={styles.document_item_wrap} key={item.name}>
                                <Link className={styles.document_item_icon} href={item.url} target='_blank'>{item.img}</Link>
                                <div className={styles.document_item_text}>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}