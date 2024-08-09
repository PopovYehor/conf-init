import Link from "next/link";
import { IconsMain, IconsMenuClose, IconsMenuOpen } from "../icons/icons-main/icons-main";
import LanguageListComponent from "../language-list/language-list";
import styles from "./header.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { checkMobile, checkMobileListener } from "@/hooks/mobile";
import { FacebookIconsDefault, FacebookIconsDefaultHeader, InstagramIconsDefault, InstagramIconsDefaultHeader } from "../icons/icons-socials/icons-socials";
import { language } from "@/language/language";
export default function Header(){

    const nav = [
        {text: {UA: language.UA.about, EN: language.EN.about}, link: '/'},
        {text: {UA: language.UA.project, EN: language.EN.project}, link: '/'},
        {text: {UA: language.UA.support, EN: language.EN.support}, link: '/'},
        {text: {UA: language.UA.volunteers, EN: language.EN.volunteers}, link: '/'}
    ]

    const langageSelected = useAppSelector((state)=>state.language.languageSelected)
    const isMobile = useAppSelector((state)=>state.mobile.mobile)
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        checkMobile(dispatch)
        checkMobileListener(dispatch)
    }, [])
    
    return (
    <>
    {!isMobile? 
    <header className={styles.header}>
        <div className={styles.header_wrap}>
            <div className={styles.header_logo_wrap}>
                <IconsMain/>
            </div>
            <div className={styles.nav_wrap}>
                <div className={styles.header_nav}>
                    {nav.map((item)=>{
                        return(
                            <>
                            <Link href={item.link}>{langageSelected === "UA" ? item.text.UA : item.text.EN}</Link>
                            </>
                        )
                    })}
                </div>
                <div className={styles.header_language_wrap}>
                    <LanguageListComponent/>
                </div>
            </div>
        </div>
    </header>
    :
    <header className={styles.header}>
        <div className={styles.header_menu_wrap}>
            <div className={styles.header_logo_wrap}>
                <IconsMain/>
            </div>
            <input type="checkbox" id="menu" className="checkbox"/>
            <div className={styles.header_menu} >
                <label htmlFor="menu" onClick={()=>setOpen(!open)}>
                    {!open? <IconsMenuOpen/> : <IconsMenuClose/>}
                </label>
            </div>
            <div className={styles.header_swap_menu}>
                <div className={styles.empty_wrap}/>
                <div className={styles.header_nav}>
                    {nav.map((item)=>{
                        return(
                            <>
                            <Link href={item.link}>{langageSelected === "UA" ? item.text.UA : item.text.EN}</Link>
                            </>
                        )
                    })}
                </div>
                <div className={styles.header_swap_bottom}>
                    <div className={styles.header_swap_socials}>
                        <Link href={'/'}><InstagramIconsDefaultHeader/></Link>
                        <Link href={'/'}><FacebookIconsDefaultHeader/></Link>
                    </div>
                    <div className={styles.header_language_wrap}>
                        <LanguageListComponent/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    }
    </>
    )
}