import { IconsMain } from "@/components/icons/icons-main/icons-main"
import styles from "../header.module.scss"
import Link from "next/link"
import { navigation } from "@/constants/navigations/navigations"
import { IHeaderNavigation, IHeaderProps } from "../header"
import LanguageListComponent from "../language-list/language-list"
import { useAppDispatch } from "@/hooks/hooks"
import { CHANGE_PAGE } from "@/reducers/language/language.reducer"

export function HeaderDesctop({nav}: IHeaderProps){

    const dispatch = useAppDispatch()

    return(
        <header className={styles.header}>
        <div className={styles.header_wrap}>
            <div className={styles.header_logo_wrap}>
                <Link href={navigation.main}>
                    <IconsMain/>
                </Link>
            </div>
            <div className={styles.nav_wrap}>
                <div className={styles.header_nav}>
                    {nav.map((item: IHeaderNavigation)=>{
                        return(
                            <Link key={item.link} href={item.link} onClick={()=>dispatch(CHANGE_PAGE(item.link))}>{item.text}</Link>
                        )
                    })}
                </div>
                <div className={styles.header_language_wrap}>
                    <LanguageListComponent/>
                </div>
            </div>
        </div>
    </header>
    )
}