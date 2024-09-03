import Link from "next/link";
import { IconsMain, IconsMenuClose, IconsMenuOpen } from "../icons/icons-main/icons-main";
import styles from "./header.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { checkMobile, checkMobileListener } from "@/hooks/mobile";
import { FacebookIconsDefaultHeader, InstagramIconsDefaultHeader } from "../icons/icons-socials/icons-socials";
import { languages } from "@/language/languages";
import { navigation } from "@/constants/navigations/navigations";
import LanguageListComponent from "./language-list/language-list";

export default function Header(){

    const langageSelected = useAppSelector((state)=>state.language.languageSelected)
    const isMobile = useAppSelector((state)=>state.mobile.mobile)
    const [open, setOpen] = useState(false)

    const nav = [
        {text: languages[langageSelected].about, link: navigation.about},
        {text: languages[langageSelected].project, link: navigation.projects},
        {text: languages[langageSelected].support, link: navigation.support},
        {text: languages[langageSelected].volunteers, link: navigation.volunteers}
    ]

    return (
    <>
    {!isMobile? 
    <header className={styles.header}>
        <div className={styles.header_wrap}>
            <div className={styles.header_logo_wrap}>
                <Link href={navigation.main}>
                    <IconsMain/>
                </Link>
            </div>
            <div className={styles.nav_wrap}>
                <div className={styles.header_nav}>
                    {nav.map((item)=>{
                        return(
                            <Link key={item.link} href={item.link}>{item.text}</Link>
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
                            <Link key={item.link} href={item.link}>{item.text}</Link>
                        )
                    })}
                </nav>
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