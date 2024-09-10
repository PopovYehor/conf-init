import { IconsMain, IconsMenuClose, IconsMenuOpen } from "@/components/Icons/icons-main/icons-main"
import styles from "../header.module.scss"
import Link from "next/link"
import { FacebookIcons, InstargamIcons } from "@/components/Icons/icons-socials/icons-socials"
import { useState } from "react"
import LanguageListComponent from "../language-list/language-list"
import { IHeaderProps } from "../header"
import { useAppDispatch } from "@/hooks/hooks"
import { CHANGE_PAGE } from "@/reducers/language/language.reducer"

export function HeaderMobile({nav}: IHeaderProps){

    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()

    return(
        <header className={styles.header}>
        <div className={styles.header_menu_wrap}>
            <div className={styles.header_logo_wrap}>
                <IconsMain/>
            </div>
            <input type="checkbox" id="menu"/>
            <div className={styles.header_menu} >
                <label htmlFor="menu" onClick={()=>setOpen(!open)}>
                    {!open? <IconsMenuOpen/> : <IconsMenuClose/>}
                </label>
            </div>
            <div className={styles.header_swap_menu}>
                <div className={styles.empty_wrap}/>
                <nav className={styles.header_nav}>
                    {nav.map((item)=>{
                        return(
                            <Link key={item.link} href={item.link} onClick={()=>dispatch(CHANGE_PAGE(item.link))} >{item.text}</Link>
                        )
                    })}
                </nav>
                <div className={styles.header_swap_bottom}>
                    <div className={styles.header_swap_socials}>
                        <div><InstargamIcons/></div>
                        <div><FacebookIcons/></div>
                    </div>
                    <div className={styles.header_language_wrap}>
                        <LanguageListComponent/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}