
import { useAppSelector } from '@/hooks/hooks'
import styles from './requisits.module.scss'
import { languages } from '@/language/languages'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrls, languageParameter } from '@/constants/apiUrls/apiUrls'
import { SupportItemsDefault } from '@/constants/SupportItemsDefault/SupportItemsDefault'

export default function Requisits(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)
    const [requisits, setRequisits] = useState([SupportItemsDefault])
    
    const requsitsHeaders = [languages[languageSelected].requsits_uah, 'USD', 'EUR']
    const mobile = useAppSelector((state)=>state.mobile.mobile)

    useEffect(()=>{
        const fetchRequisits = async ()=>{
            try{
                const responce = await axios.get(apiUrls.requisits+languageParameter+languageSelected)
                setRequisits(responce.data)
            }catch{
                setRequisits([SupportItemsDefault])
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
                        {requisits.map((item, i)=>{
                            return(
                                <div className={styles.requsits_item}>
                                    <div className={styles.item_header}>
                                        <p>{languages[languageSelected].requsits_head+requsitsHeaders[i]+'?'}</p>
                                    </div>
                                    <div className={styles.item_container}>
                                        <div className={styles.item}>
                                            {item.nameOrganization.map((item)=>{
                                                return(<p>{item}</p>)
                                            })}
                                        </div>
                                        <div className={styles.item}>
                                            {item.code.map((item)=>{
                                                return(<p>{item}</p>)
                                            })}
                                        </div>
                                        <div className={styles.item}>
                                            {item.bankName.map((item)=>{
                                                return(<p>{item}</p>)
                                            })}
                                        </div>
                                        <div className={styles.item}>
                                            {item.accountNumber.map((item)=>{
                                                return(<p>{item}</p>)
                                            })}
                                        </div>
                                        <div className={styles.item}>
                                            {item.payment.map((item)=>{
                                                return(<p>{item}</p>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}