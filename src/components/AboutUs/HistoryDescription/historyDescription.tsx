import axios from 'axios'
import styles from './historyDescription.module.scss'
import { apiUrls, languageParameter } from '@/constants/apiUrls/apiUrls'
import { useAppSelector } from '@/hooks/hooks';
import { useEffect, useState } from 'react';
import { IHistoryDescriptionItem } from '@/interfaces/about-us/about-us.interface';
import { historyDescriptionItemDefault } from '@/constants/aboutUsItemsDefault/aboutUsItemsDefault';
import { HistoryDescriptionItem } from './HistoryDescriptionItem/historyDescriptionItem';

export function HistoryDescription(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [history, setHistory] = useState<IHistoryDescriptionItem[]>([historyDescriptionItemDefault])

    useEffect( ()=>{
        const fetchHistryDescription = async ()=>{
            try{
                const responce = await axios.get(apiUrls.sectionAbout+languageParameter+languageSelected)
                setHistory(responce.data)
            }
            catch{
                setHistory([historyDescriptionItemDefault])
            }
        }
        fetchHistryDescription()
    }, [languageSelected, ])

    return(
        <>
        <article className={styles.history_description_wrap}>
            <div className={styles.history_description_container}>
                {history.map((item: IHistoryDescriptionItem)=>{
                    return(
                        <section key={item._id} className={styles.history_item_wrap}>
                            <HistoryDescriptionItem item = {item}/>
                        </section>
                    )
                })}
            </div>
        </article>
        </>
    )
}