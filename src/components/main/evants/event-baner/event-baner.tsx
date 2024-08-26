import { IconEventBaner } from "@/components/icons/icons-event/icons-event"
import styles from "./event-baner.module.scss"
import { FacebookIconsDefault, InstagramIconsDefault } from "@/components/icons/icons-socials/icons-socials"
import Link from "next/link"
export function EventBaner(){
    return(
        <>
        <div className={styles.event_baner_container}>
            <div className={styles.event_baner_icon}>
                <IconEventBaner/>
            </div>
            <div className={styles.event_baner_title}>
                <h2>Наразі немає подій</h2>
            </div>
            <div className={styles.event_baner_description}>
                <span>Хоча на даний час в нас немає запланованих заходів, 
однак ми вже працюємо над організацією нових! 
Приєднуйся до наших соціальних мереж та першими 
отримуйте інформацію про наступні події!</span>
            </div>
            <div className={styles.event_social_icons_wrap}>
                <Link href={'/'}><InstagramIconsDefault/></Link>
                <Link href={'/'}><FacebookIconsDefault/></Link>
            </div>
        </div>
        </>
    )
}