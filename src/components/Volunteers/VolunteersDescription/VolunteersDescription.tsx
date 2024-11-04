import { useEffect, useState } from 'react'
import styles from './VolunteersDescription.module.scss'
import { apiUrls, languageParameter } from '@/constants/apiUrls/apiUrls'
import { useAppSelector } from '@/hooks/hooks'
import axios from 'axios'
import { volunteerSectionItemDefault } from '@/constants/volunteersItemsDeafault/volunteersItemsDeafault'
import { IvolunteerSectionItemDefault } from '@/interfaces/volunteers/volunters.interface'
import VolunteersDescriptionItem from './VolunteersDescription-Item/VolunteersDescription-Item'

export default function VolunteersDescription(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [data, setData] = useState<IvolunteerSectionItemDefault[]>([volunteerSectionItemDefault])

    useEffect(()=>{
        const fetchWorth = async ()=>{
            try{
                const response = await axios.get(apiUrls.volunteersSection+languageParameter+languageSelected)
                setData(response.data)
            }catch{
                setData([volunteerSectionItemDefault])
                console.log("error")
            }
        }
        fetchWorth()
    },[])

    return(
        <>
            <article className={styles.vulunteer_desc_wrap}>
                <div className={styles.vulunteer_container}>
                    {data.map((item)=>{
                        return(
                            <section className={styles.vulunteer_item_wrap} key={item._id}>
                                <VolunteersDescriptionItem item={item}/>
                            </section>
                        )
                    })}
                </div>
            </article>
        </>
    )
}