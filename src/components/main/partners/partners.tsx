import axios from "axios"
import styles from "./partners.module.scss"
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls"
import { useAppSelector } from "@/hooks/hooks"
import { useEffect, useState } from "react"
import { defaultPartner } from "@/constants/mainItemsDefault/mainItemsDefault"
import { IPartnerItem } from "@/interfaces/main/main.interface"
import { languages } from "@/language/languages"
import Link from "next/link"

export function Partners(){
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [partners, setPartners] = useState<IPartnerItem[]>([defaultPartner])

    const fetchPartners = async ()=>{
        try{
            const response = await axios.get<IPartnerItem[]>(apiUrls.partnerUrl+languageParameter+languageSelected)
            setPartners(response.data)

        }catch{
            setPartners([defaultPartner])
        }
    }

    useEffect(()=>{
        fetchPartners()
    },[languageSelected])

    return(
        <article className={styles.partners_wrap}>
            <div className={styles.partners_container}>
                <div className={styles.partners_header}>
                    <h3>{languages[languageSelected].partners}</h3>
                </div>
                <div className={styles.partners_items_wrap}>
                    {partners.map((item: IPartnerItem)=>{
                        if(item.image != null){
                            return(
                                    <section key={item._id} className={styles.partner_item_wrap}>
                                        <Link href={item.webPatner} target="_blank">
                                            <img src={item.image?.url}/>
                                        </Link>
                                    </section>
                            )
                        }
                    })}
                    
                </div>
            </div>
        </article>
    )
}