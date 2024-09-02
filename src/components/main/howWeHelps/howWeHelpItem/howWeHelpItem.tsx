import { useAppSelector } from "@/hooks/hooks"
import styles from "./howWeHelpItem.module.scss"
import { useEffect, useState } from "react"
import { defaultImage } from "@/reducers/image/image.reducer"
import { getCurrentImage } from "@/hooks/image"
import { IHelpItem } from "@/interfaces/main/main.interface"

export function HowWeHelpItem({titleHelp, image}: IHelpItem){

    const mobile = useAppSelector((state)=>state.mobile.mobile)
    const images = useAppSelector((state)=>state.image.image)
    const addText = "Ea cupiditate aperiam possimus sed voluptates reiciendis harum. Quia rerum est quo veniam mollitia. Ad qui illum ut."
    const [helpImage, setHelpImage] = useState(defaultImage.url)
    
    useEffect(()=>{
        if (image){
            getCurrentImage(image, images, setHelpImage)
        }
    }, [])
    return(
        <>
            <div className={styles.support_description_item_image_wrap}>
                <img src={helpImage}/>
            </div>
            <div className={styles.support_description_item_text_wrap}>
                <p>{titleHelp}</p>
                {mobile && <p className={styles.add_text}>{addText}</p>}
            </div>
        </>
    )
}