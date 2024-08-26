import { useAppSelector } from "@/hooks/hooks"
import styles from "./evantItem.module.scss"
import { googleForm } from "@/constants/apiUrls/apiUrls"
import Link from "next/link"
import { IEventItem } from "@/interfaces/main/main.interface"
import { languages } from "@/language/languages"
import { useEffect, useRef, useState } from "react"
import { IImageItem } from "@/interfaces/image/image.interfaces"
import { defaultImage } from "@/reducers/image/image.reducer"

export function EvantItem({
    image,
    dataEvent,
    adressEvent,
    description,
    titleEvent,
    }: IEventItem){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const images = useAppSelector((state)=>state.image.image)
    const [url, setUrl] = useState<string>(defaultImage.url)
    const [openDescription, setOpenDescription] = useState<boolean>(false)
    const descriptionRef = useRef<HTMLDivElement | null>(null)
    const [isReadMore, setIsreadMore] = useState<boolean>(false)

    const readMoreHandler = ()=>{
        const description = descriptionRef.current
        if (description){
            if (description.children[0].clientHeight > 265){
                setIsreadMore(true)
            }
        }
    }

    const imageChecker = ()=>{
        if (image){
        images.forEach((item: IImageItem)=>{
            if (image._id === item._id){
                setUrl(item.url)
            }
        })
        }
    }
    
    useEffect(()=>{
        imageChecker()
        readMoreHandler()
    },[])

    return(
        <section className={styles.evant_item_wrap}>
            <div className={styles.evant_item_img}>
                <img src={url}/>
            </div>
            <div className={styles.evant_item_container}>
                <div className={styles.evant_item_date}>
                    <p>{dataEvent}</p>
                    <p>{adressEvent}</p>
                </div>
                <div className={styles.evant_item_title}>
                    <h3>{titleEvent}</h3>
                </div>
                <div className={styles.event_item_link}>
                    <Link href={'/'}>Посилання на проект</Link>
                </div>
                <div ref={descriptionRef} className={!openDescription ? 
                    `${styles.evant_item_description} ${styles.hiden_description}`
                    : styles.evant_item_description}>
                        <p>{description}</p>
                </div>
                <div className={styles.evant_item_buttons}>
                    {isReadMore && <span className={styles.read_more} onClick={()=>setOpenDescription(!openDescription)}>{languages[languageSelected].read_more }</span>}
                    <Link className={styles.join} href={googleForm}>{languages[languageSelected].evant_join}</Link>
                </div>
            </div>
        </section>
    )
}