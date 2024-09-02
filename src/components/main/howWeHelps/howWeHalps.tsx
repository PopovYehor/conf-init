import { useAppSelector } from "@/hooks/hooks"
import styles from "./howWeHelps.module.scss"
import { useEffect, useState } from "react"
import { defaultHelp } from "@/constants/mainItemsDefault/mainItemsDefault"
import axios from "axios"
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls"
import { HowWeHelpItem } from './howWeHelpItem/howWeHelpItem';
import { languages } from "@/language/languages"
import { IHelpItem } from "@/interfaces/main/main.interface"

export default function HowWeHelps(){

    const mobile = useAppSelector((state)=>state.mobile.mobile)
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [help, setHelp] = useState([defaultHelp])
    
    const fetchHelp = async()=>{
        try{
            const responce = await axios.get(apiUrls.helpUrl+languageParameter+languageSelected)
            setHelp(responce.data)
        }catch{
            setHelp([defaultHelp, defaultHelp, defaultHelp, defaultHelp, defaultHelp])
        }
        
    }

    useEffect(()=>{
        fetchHelp()
    },[])
    
    return(
        <>
        <article className={styles.help_container}>
            <div className={styles.help_wrap}>
                {!mobile &&
                    <div className={styles.help_description_wrap}>
                        <div className={styles.help_header}>
                            <h2>{languages[languageSelected].how_help}</h2>
                        </div>
                        <div className={styles.help_description}>
                            <p>{languages[languageSelected].help_description_1}</p>
                            <p>{languages[languageSelected].help_description_2}</p>
                        </div>
                    </div>
                }
                <div className={styles.help_supports_wrap}>
                    <div className={styles.help_header}>
                        <h2>{
                            !mobile?
                                languages[languageSelected].we_support
                                : languages[languageSelected].how_help}</h2>
                    </div>
                    <div className={styles.support_description}>
                        {help.map((item:IHelpItem)=>{
                            return(
                                <div className={styles.support_description_item_wrap} key={item._id}>
                                    <HowWeHelpItem titleHelp = {item.titleHelp} image = {item.image}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
        </>
    )
}