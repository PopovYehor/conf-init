import { IconsListClose, IconsListOpen } from "@/components/icons/icons-language/icons-language"
import styles from "./language-list-default.module.scss"

export function LanguageListDefaut({language, langSwitch, setLangSwitch}:any){
    
    return(
        <>
        <div className={styles.language_list_container}>
            <div className={styles.language_item}>
                <div className={styles.language_icon}><language.img/></div>
                <div className={styles.language_name}>{language.name}</div>
            </div>
            {langSwitch === false ? 
                <div className={styles.language_btn} onClick={()=>setLangSwitch(!langSwitch)}><IconsListClose/></div>
                : <div className={styles.language_btn} onClick={()=>setLangSwitch(!langSwitch)}><IconsListOpen/></div>}
        </div>
        </>
    )
}