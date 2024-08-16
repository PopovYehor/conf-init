import { useAppSelector } from "@/hooks/hooks"
import styles from "./evants.module.scss"
import { languages } from "@/language/languages"
import Link from "next/link"
import { googleForm } from "@/constants/apiUrls/apiUrls"

export default function Evants(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const img = 'https://s3-alpha-sig.figma.com/img/122e/40f9/265a0ccf2786cb574d1180a13efc7f1d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8HXWishVbW2S4jkk723Sq6ugLWL3tAUSArPpi2E4OOMakv-fmftiLTemEU7wVmfafQMUYupvwaLxZHXea2XsNXNG32TAFhCUPoHo7N3w6NhH8NJfUHNtrcPJyTHxVDvKuUZ~ygQIPd93vq39hs84zS6Y2AIBkBm5oDQrh5wuzJKSTIlB0MJX-kg0OESspoZ~LlAkcUbej3OfZ9WOxu5tv3vWzOQt-za0z6ZtZnteCcVPNSeZWXtZ5P2us17GPC6qVTzFQ9SXdQWndleDAC87YESaBjBKpwgA-FbypHSfQXHh~aQicattiLhs4jwIwKPfC5G3ahM19DD~pLUNthPJA__'
    
    return(
        <>
        <article className={styles.evants_wrap}>
            <div className={styles.evants_container}>
                <div className={styles.evants_header}>
                    <h2>{languageSelected === "UA"? languages.UA.evants : languages.EN.evants}</h2>
                </div>
                <section className={styles.evant_item_wrap}>
                    <div className={styles.evant_item_img}>
                        <img src={img}/>
                    </div>
                    <div className={styles.evant_item_container}>
                        <div className={styles.evant_item_date}>
                            <p>10 серпня 2024</p>
                            <p> м. Київ, вул. Кучмин Яр, 1Б</p>
                        </div>
                        <div className={styles.evant_item_title}>
                            <h3>Дружня зустріч сімей з дітьми з інвалідністю!</h3>
                        </div>
                        <div className={styles.evant_item_description}>
                            <p>Це буде чудова можливість для дітей знайти нових друзів, провести весело час, а батькам – познайомитись, обмінятися досвідом, підтримкою та трішки відпочити в колі однодумців.
                            Для участі, будь ласка, заповніть реєстраційну форму</p>
                        </div>
                        <div className={styles.evant_item_buttons}>
                            <span className={styles.read_more}>{languageSelected === "UA"? languages.UA.read_more : languages.EN.read_more}</span>
                            <Link className={styles.join} href={googleForm}>{languageSelected === "UA"? languages.UA.evant_join : languages.EN.evant_join}</Link>
                        </div>
                    </div>
                </section>
            </div>
        </article>
        </>
    )
}