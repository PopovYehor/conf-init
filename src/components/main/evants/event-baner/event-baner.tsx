import { IconEventBaner } from "@/components/Icons/icons-event/icons-event"
import styles from "./event-baner.module.scss"
import { FacebookIcons, FacebookIconsDefault, InstagramIconsDefault, InstargamIcons } from "@/components/Icons/icons-socials/icons-socials"
import Link from "next/link"
import { useAppSelector } from "@/hooks/hooks"
import { languages } from "@/language/languages"
import { facebookUrl, instagramUrl } from "@/constants/apiUrls/apiUrls"

export function EventBaner(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)

    return(
        <>
        <div className={styles.event_baner_container}>
            <div className={styles.event_baner_icon}>
                <IconEventBaner/>
            </div>
            <div className={styles.event_baner_title}>
                <h2>{languages[languageSelected].without_event_header}</h2>
            </div>
            <div className={styles.event_baner_description}>
                <span>{languages[languageSelected].without_event_description}</span>
            </div>
            <div className={styles.event_social_icons_wrap}>
                <InstargamIcons/>
                <FacebookIcons/>
            </div>
        </div>
        </>
    )
}