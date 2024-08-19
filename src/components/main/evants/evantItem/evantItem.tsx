import { useAppSelector } from "@/hooks/hooks"
import styles from "./evantItem.module.scss"
import { googleForm } from "@/constants/apiUrls/apiUrls"
import Link from "next/link"
import { IEventItem } from "@/interfaces/main/main.interface"
import { languages } from "@/language/languages"
import { useEffect, useState } from "react"
import { IImageItem } from "@/interfaces/image/image.interfaces"
import { defaultImage } from "@/reducers/image/image.reducer"

export function EvantItem({
    image,
    dataEventUA,
    dataEventEN,
    adressEventUA,
    adressEventEN,
    descriptionEN,
    descriptionUA,
    titleEventUA,
    titleEventEN
    }: IEventItem){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const images = useAppSelector((state)=>state.image.image)
    const [url, setUrl] = useState(defaultImage.url)
    
    useEffect(()=>{
        images.forEach((item: IImageItem)=>{
            if (image === item._id){
                setUrl(item.url)
            }
        })
    },[])

    return(
        <section className={styles.evant_item_wrap}>
            <div className={styles.evant_item_img}>
                <img src={url}/>
            </div>
            <div className={styles.evant_item_container}>
                <div className={styles.evant_item_date}>
                    <p>{languageSelected === "UA"? dataEventUA : dataEventEN}</p>
                    <p>{languageSelected === "UA"? adressEventUA : adressEventEN}</p>
                </div>
                <div className={styles.evant_item_title}>
                    <h3>{languageSelected === "UA"? titleEventUA : titleEventEN}</h3>
                </div>
                <div className={styles.evant_item_description}>
                    <p>{languageSelected === "UA"? descriptionUA : descriptionEN}</p>
                </div>
                <div className={styles.evant_item_buttons}>
                    <span className={styles.read_more}>{languageSelected === "UA"? languages.UA.read_more : languages.EN.read_more}</span>
                    <Link className={styles.join} href={googleForm}>{languageSelected === "UA"? languages.UA.evant_join : languages.EN.evant_join}</Link>
                </div>
            </div>
        </section>
    )
}