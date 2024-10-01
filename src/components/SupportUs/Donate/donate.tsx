import Image from "next/image"
import styles from "./donate.module.scss"
import qr from "@/assets/qr_code/photo.png"
import mono from "@/assets/donate-buttons-img/mono.png"
import monoMobile from "@/assets/donate-buttons-img/mono-mobile.jpg"
import donateImg from "@/assets/donate-buttons-img/donate-img-mobile.png"
import { useAppSelector } from "@/hooks/hooks"
import { languages } from "@/language/languages"
import { IconsDonateLiqpay, IconsDonatePaypal } from "@/components/icons/icons-donate/icons-donate"
import { monobankUrl, paypalUrl, supportUrl } from "@/constants/apiUrls/apiUrls"
import Link from "next/link"
export default function Donate(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)
    const isMobile = useAppSelector((state)=>state.mobile.mobile)

    const donateItems = [
        {name: "paypal", img: <IconsDonatePaypal/>, url: paypalUrl},
        {name: "mono", img: <Image src= {!isMobile? mono : monoMobile} alt= "mono"/>, url: monobankUrl},
        {name: "liqpay", img: <IconsDonateLiqpay/>, url: supportUrl},
    ]

    return(
        <>
        <article className={styles.donate_wrap}>
            <div className={styles.donate_container}>
                <div className={styles.donate_qr_wrap}>
                    <Image src={!isMobile? qr : donateImg} alt="qr code"/>
                </div>
                <div className={styles.donate_description_wrap}>
                    <div className={styles.donate_description_text}>
                        <p>{languages[languageSelected].donate_description_1}</p>
                        <p>{languages[languageSelected].donate_description_2}</p>
                    </div>
                    <div className={styles.donate_description_buttons_wrap}>
                        {donateItems.map((item)=>{
                            return(
                                <Link href={item.url} className={styles.donate_button} key={item.name} target="_blank">{item.img}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
        </>
    )
}