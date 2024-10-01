import { IHistoryDescriptionItem } from "@/interfaces/about-us/about-us.interface";
import styles from "../historyDescription.module.scss";
import { useEffect, useRef, useState } from "react";
import { getCurrentImage } from "@/hooks/image";
import { defaultImage } from "@/constants/mainItemsDefault/mainItemsDefault";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";

interface IHistoryDescriptionItemProps{
    item: IHistoryDescriptionItem
}

export function HistoryDescriptionItem({item}: IHistoryDescriptionItemProps){

    const [imageUrl, setImageUrl] = useState<string>(defaultImage.url)
    const images = useAppSelector((state)=>state.image.image)
    const [openDescription, setOpenDescription] = useState<boolean>(false)
    const descriptionRef = useRef<HTMLParagraphElement | null>(null)
    const [isReadMore, setIsreadMore] = useState<boolean>(false)
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)

    const readMoreHandler = ()=>{
        const description = descriptionRef.current
        if (description){
            if (description.clientHeight > 265){
                setIsreadMore(true)
                setOpenDescription(false)
            }else{
                setIsreadMore(false)
                setOpenDescription(true)
            }
        }
    }

    useEffect(()=>{
        getCurrentImage(item.image, images, setImageUrl)
    },[images, item.image])

    useEffect(()=>{
        readMoreHandler()
    },[item.description])

    return(
        <>
            <div className={styles.history_item_text}>
                <h2>{item.titleElement}</h2>
                <p ref={descriptionRef} className={!openDescription ? 
                    `${styles.history_item_description} ${styles.hiden_description}`
                    : styles.history_item_description}>{item.description}</p>
                {isReadMore && 
                        <span className={styles.read_more} 
                            onClick={()=>setOpenDescription(!openDescription)}>
                                {!openDescription ? languages[languageSelected].read_more : languages[languageSelected].hide_text}
                </span>}
            </div>
            <div className={styles.history_item_img}>
                <img src={imageUrl} alt={item.description}/>
            </div>
        </>
    )
}