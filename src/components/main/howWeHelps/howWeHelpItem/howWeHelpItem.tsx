import { useAppSelector } from "@/hooks/hooks"
import styles from "./howWeHelpItem.module.scss"
import { useEffect, useState } from "react"
import { defaultImage } from "@/reducers/image/image.reducer"
import { getCurrentImage } from "@/hooks/image"
import { IHelpItem } from "@/interfaces/main/main.interface"
import { IImageItem } from "@/interfaces/image/image.interfaces"

interface IHowWeHelpProps{
    titleHelp: string
    description: string
    image: IImageItem
}

export function HowWeHelpItem({titleHelp, description, image}: IHowWeHelpProps){

    const mobile = useAppSelector((state)=>state.mobile.mobile)
    const images = useAppSelector((state)=>state.image.image)
    const [helpImage, setHelpImage] = useState(defaultImage.url)
    
    useEffect(()=>{
        if (image){
            getCurrentImage(image, images, setHelpImage)
        }
    }, [image, images])
    return(
        <>
            <div className={styles.support_description_item_image_wrap}>
                <img src={helpImage} alt={titleHelp}/>
            </div>
            <div className={styles.support_description_item_text_wrap}>
                <p>{titleHelp}</p>
                {mobile && <p className={styles.add_text}>{description}</p>}
            </div>
        </>
    )
}