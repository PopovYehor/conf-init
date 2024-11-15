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
    const [openDescription, setOpenDescription] = useState<boolean>(false)
    const descriptionRef = useRef<HTMLDivElement | null>(null)
    const [isReadMore, setIsreadMore] = useState<boolean>(false)
    const [readMoreMobile, setReadMoreMobile] = useState<boolean>(false)

    const mobile = useAppSelector((state)=>state.mobile.mobile)
    const images = useAppSelector((state)=>state.image.image)
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    

    
    
    

    const readMoreHendler = (boolean: boolean)=>{
        setIsreadMore(boolean)
        setOpenDescription(!boolean)
    }

    
    
    useEffect(()=>{
        const checkMobileReadMore = ()=>{
            document.body.clientWidth < 426 ? 
            setReadMoreMobile(true): setReadMoreMobile(false)
        }
        const checkMobileReadMoreListener = ()=>{
            return window.addEventListener('resize', ()=>{checkMobileReadMore()})
        }
        checkMobileReadMore()
        checkMobileReadMoreListener()
    }, [readMoreMobile])

    useEffect(()=>{
        getCurrentImage(item.image, images, setImageUrl)
    },[images, item.image])

    useEffect(()=>{
        const readMoreHandler = ()=>{
            const description = descriptionRef.current
            if (description){
                !readMoreMobile ? 
                    description.clientHeight > 340 ? readMoreHendler(true) : readMoreHendler(false)
                    : description.clientHeight > 200 ? readMoreHendler(true) : readMoreHendler(false)
            }
        }
        readMoreHandler()
    },[imageUrl, readMoreMobile, mobile])

    return(
        <>
            <div className={styles.history_item_text} ref={descriptionRef}>
                <h2>{item.titleElement}</h2>
                <p className={!openDescription ? 
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