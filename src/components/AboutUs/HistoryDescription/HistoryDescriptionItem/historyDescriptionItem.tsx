import { IHistoryDescriptionItem } from "@/interfaces/about-us/about-us.interface";
import styles from "../historyDescription.module.scss";
import { useEffect, useState } from "react";
import { getCurrentImage } from "@/hooks/image";
import { defaultImage } from "@/constants/mainItemsDefault/mainItemsDefault";
import { useAppSelector } from "@/hooks/hooks";

interface IHistoryDescriptionItemProps{
    item: IHistoryDescriptionItem
}

export function HistoryDescriptionItem({item}: IHistoryDescriptionItemProps){

    const [imageUrl, setImageUrl] = useState<string>(defaultImage.url)
    const images = useAppSelector((state)=>state.image.image)
    useEffect(()=>{
        getCurrentImage(item.image, images, setImageUrl)
    },[])

    return(
        <>
            <div className={styles.history_item_text}>
                <h2>{item.titleElement}</h2>
                <p>{item.description}</p>
            </div>
            <div className={styles.history_item_img}>
                <img src={imageUrl}/>
            </div>
        </>
    )
}