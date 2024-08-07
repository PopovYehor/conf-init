import { IconsListClose, IconsListOpen } from "@/components/icons/icons-language/icons-language"
import styles from "./language-list-default.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { SET_LANGUAGE_SWITCH } from "@/reducers/language/language.reducer"

export function LanguageListDefaut(){

    const languageSwitch = useAppSelector((state)=>state.language.languageSwitch)
    const language = useAppSelector((state)=>state.language.language)
    const dispatch = useAppDispatch()
    
    return(
        <>
        <div className={styles.language_list_container}>
            <div className={styles.language_item}>
                <div className={styles.language_icon}><language.img/></div>
                <div className={styles.language_name}>{language.name}</div>
            </div>
            {languageSwitch ? 
                <div className={styles.language_btn} onClick={()=>dispatch(SET_LANGUAGE_SWITCH(!languageSwitch))}><IconsListClose/></div>
                : <div className={styles.language_btn} onClick={()=>dispatch(SET_LANGUAGE_SWITCH(!languageSwitch))}><IconsListOpen/></div>}
        </div>
        </>
    )
}