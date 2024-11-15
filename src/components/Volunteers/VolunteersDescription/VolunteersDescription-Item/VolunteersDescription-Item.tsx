import { defaultImage } from '@/constants/mainItemsDefault/mainItemsDefault';
import styles from './VolunteersDescription-Item.module.scss'
import { IvolunteerSectionItemDefault } from '@/interfaces/volunteers/volunters.interface';
import { useAppSelector } from '@/hooks/hooks';
import { useEffect, useState } from 'react';
import { getCurrentImage } from '@/hooks/image';

interface IVolunteerSectionProps{
    item: IvolunteerSectionItemDefault
}

export default function VolunteersDescriptionItem({item}: IVolunteerSectionProps){

    const images = useAppSelector((state)=>state.image.image)
    const [imageUrl, setImageUrl] = useState<string>(defaultImage.url)

    useEffect(()=>{
        getCurrentImage(item.image, images, setImageUrl)
    },[item.image, images])

    return(
        <>
        <div className={styles.image_wrap}>
            <img src={imageUrl} alt={item.title}/>
        </div>
        <div className={styles.item_desc_wrap}>
            <div className={styles.title_wrap}>
                <h3>{item.title}</h3>
            </div>
            <div className={styles.item_desc_continer}>
                {item.description.map((desc, i)=>{
                    return(
                        <div className={styles.item_text_wrap} key={desc}>
                            <div className={styles.number_wrap}>{i+1}</div>
                            <div className={styles.text}>
                                <p>{desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}