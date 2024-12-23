import axios from "axios"
import styles from "./worth.module.scss"
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls"
import { useAppSelector } from "@/hooks/hooks"
import { useEffect, useState } from "react"
import { defaultWorth } from "@/constants/mainItemsDefault/mainItemsDefault"
import { IWorthItem } from "@/interfaces/main/main.interface"
import { WorthDefenseIcons, WorthDignityIcons, WorthDiversityIcons, WorthDoIcons, WorthFaithIcons, WorthHelpIcons } from "@/components/icons/icons-worth/icons-worth"
import { languages } from "@/language/languages"

export function Worth(){
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [worth, setWorth] = useState<IWorthItem[]>([defaultWorth])

    useEffect(()=>{
        const fetchWorth = async ()=>{
            try{
                const response = await axios.get(apiUrls.worthUrl+languageParameter+languageSelected)
    
                const {data} = response
                const copyData = data
                copyData.map((item: IWorthItem, i: number)=>{
                    const worthIcons = [
                        <WorthHelpIcons key={i}/>, 
                        <WorthDiversityIcons key={i}/>,
                        <WorthDignityIcons key={i}/>,
                        <WorthDefenseIcons key={i}/>,
                        <WorthDoIcons key={i}/>,
                        <WorthFaithIcons key={i}/>]
                    return item.icon = worthIcons[i]
                })
                setWorth(copyData)
            }catch{
                setWorth([defaultWorth])
            }
        }
        fetchWorth()
    },[languageSelected])

    return(
        <article className={styles.worth_container}>
            <div className={styles.worth_warp}>
                <div className={styles.worth_header}>
                    <h2>{languages[languageSelected].worth}</h2>
                </div>
                <div className={styles.worth_items_wrap}>
                    {worth.map((item:IWorthItem)=>{
                        return(
                            <section className={styles.worth_item} key={item._id}>
                                <div className={styles. worth_item_icon}>
                                    {item.icon}
                                </div>
                                <div className={styles.worth_item_description}>
                                    <p>{item.textWorth}</p>
                                </div>
                            </section>
                        )
                    })}
                    
                </div>
            </div>
        </article>
    )
}