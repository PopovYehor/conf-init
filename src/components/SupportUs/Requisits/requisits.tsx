import { useAppSelector } from '@/hooks/hooks'
import styles from './requisits.module.scss'
import { languages } from '@/language/languages'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrls, languageParameter } from '@/constants/apiUrls/apiUrls'
import { RequisitsCurrencyItemsDefault, SupportItemsDefault } from '@/constants/SupportItemsDefault/SupportItemsDefault'
import RequisitsItemUa from './requisitsItem/requisitsItemUA'
import RequisitsItemCurrency from './requisitsItem/requisitsItemCurrency'

export default function Requisits(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)
    const [requisits, setRequisits] = useState([SupportItemsDefault])
    const [requisitsCurrency, setRequisitsCurrency] = useState([RequisitsCurrencyItemsDefault])
    
    const requsitsHeaders = [languages[languageSelected].requsits_uah, 'USD', 'EUR']
    const mobile = useAppSelector((state)=>state.mobile.mobile)

    useEffect(()=>{
        const fetchRequisits = async ()=>{
            try{
                const responce = await axios.get(apiUrls.requisits+languageParameter+languageSelected)
                const responceCurrency = await axios.get(apiUrls.requisitsCurrency+languageParameter+languageSelected)
                setRequisits(responce.data)
                setRequisitsCurrency(responceCurrency.data)
            }catch{
                setRequisits([SupportItemsDefault])
                setRequisitsCurrency([RequisitsCurrencyItemsDefault])
            }
        }
        fetchRequisits()
    },[languageSelected])
    
    return(
        <>
            <div className={styles.requsits_wrap}>
                <div className={styles.requsits_container}>
                    <div className={styles.requsits_text_wrap}>
                        <div className={styles.requsits_text_header}>
                            <h3>{languages[languageSelected].requsits_header}</h3>
                        </div>
                        {!mobile &&
                        <div className={styles.requsits_text_description}>
                            <p>{languages[languageSelected].requsits_description}</p>
                        </div>}
                    </div>
                    <div className={styles.requsits_items_wrap}>
                        <div className={styles.requsits_item}>
                            <RequisitsItemUa item={requisits[0]} header={languages[languageSelected].requsits_head+languages[languageSelected].requsits_uah+'?'}/>
                        </div>
                        <div className={styles.requsits_item}>
                            <RequisitsItemCurrency item={requisitsCurrency[0]} header={languages[languageSelected].requsits_head+'USD'+'?'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}