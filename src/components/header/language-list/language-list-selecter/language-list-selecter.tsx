import { IconsListClose, IconsListOpen, IconsListSelected } from "@/components/icons/icons-language/icons-language"
import styles from "./language-list-selecter.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { CHANGE_LANGUAGE, SET_LANGUAGE_SWITCH } from "@/reducers/language/language.reducer"
import { ILanguageItem } from "@/interfaces/header/language/language"

export function LanguageListSelecter(){

    const languageLists = useAppSelector((state)=>state.language.languageList)
    const languageSwitch = useAppSelector((state)=>state.language.languageSwitch)
    const language = useAppSelector((state)=>state.language.language)
    const dispatch = useAppDispatch()
    
    const mouseLeaveEvent = ()=>{
        if(languageSwitch === true){
            setTimeout(()=>{dispatch(SET_LANGUAGE_SWITCH(false))}, 1000) 
        }
    }

    return(
        <>
        <div className={styles.language_list_container} onMouseLeave={mouseLeaveEvent}>
            <div className={styles.default_list}>
                <div className={styles.language_item}>
                    <div className={styles.language_icon}><language.img/></div>
                    <div className={styles.language_name}>{language.name}</div>
                </div>
                {!languageSwitch ? 
                    <div className={styles.language_btn} onClick={()=>dispatch(SET_LANGUAGE_SWITCH(!languageSwitch))}><IconsListClose/></div>
                    : <div className={styles.language_btn} onClick={()=>dispatch(SET_LANGUAGE_SWITCH(!languageSwitch))}><IconsListOpen/></div>}
            </div>
            <div className={styles.language_items}>
                {languageLists.map((item: ILanguageItem)=>{
                    return(
                            <div key={item.name} className={styles.language_item} onClick={()=>dispatch(CHANGE_LANGUAGE(item.name))}>
                                <div className={styles.language_switch_item}>
                                    <div className={styles.language_icon}><item.img/></div>
                                    <div className={styles.language_name}>{item.name}</div>
                                </div>
                                {item.selected === true && <div className={styles.language_icon}><IconsListSelected/></div>}
                            </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}