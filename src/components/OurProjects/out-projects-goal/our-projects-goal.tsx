import { useEffect, useState } from "react"
import styles from "./our-projects-goal.module.scss"
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { IOurProject } from "@/interfaces/our-project/ourProject.interface";
import { ourProjectDefault } from "@/constants/ourProjectsItemsDefault/ourProjectsItemsDefault";
import { getCurrentImage } from "@/hooks/image";
import { defaultImage } from "@/constants/mainItemsDefault/mainItemsDefault";
export default function OurProjectsGoal(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected);
    const images = useAppSelector((state)=>state.image.image)
    const [ourProject, setOurProjects] = useState<IOurProject[]>([ourProjectDefault])
    const [imageUrl, setImageUrl] = useState<string>(defaultImage.url)

    useEffect(()=>{
        const fetchOurProject = async ()=>{
            try{
                const responce = await axios.get(apiUrls.ourProjects+languageParameter+languageSelected)
                setOurProjects(responce.data)
            }catch{
                setOurProjects([ourProjectDefault])
            }
        }
        fetchOurProject()
    }, [languageSelected])

    useEffect(()=>{
        getCurrentImage(ourProject[0].image, images, setImageUrl)
    },[getCurrentImage, ourProject, ourProject[0].image, images])

    return(
        <article className={styles.goal_container}>
            <div className={styles.goal_wrap}>
                <div className={styles.goal_image_wrap}>
                    <img src={imageUrl} alt={ourProject[0].titleOurProject}/>
                </div>
                <div className={styles.goal_desciption_wrap}>
                    <div className={styles.goal_description_header}>
                        <h3>{ourProject[0].titleOurProject}</h3>
                    </div>
                    <div className={styles.goal_description_text_container}>
                        {ourProject[0].description.map((item)=>{
                            return(
                                <div key={item} className={styles.goal_description_text_wrap}>
                                    <span>&#x2022;</span>
                                    <p >{item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}