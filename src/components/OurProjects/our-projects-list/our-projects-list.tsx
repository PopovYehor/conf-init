import { useEffect, useState } from "react"
import styles from "./our-projects-list.module.scss"
import { ourProjectItemDefault } from "@/constants/ourProjectsItemsDefault/ourProjectsItemsDefault"
import { IOurProjectItem } from "@/interfaces/our-project/ourProject.interface"
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls"
import { useAppSelector } from "@/hooks/hooks"
import axios from "axios"
import { ProjectListItem } from "./project-list-item/project-list-item"

export default function OurProjectsList(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [projectList, setProjectList] = useState<IOurProjectItem[]>([ourProjectItemDefault])

    useEffect(()=>{
        const fetchProjectList = async ()=>{
            try{
                const responce = await axios.get(apiUrls.projects+languageParameter+languageSelected)
                setProjectList(responce.data)
            }
            catch{
                setProjectList([ourProjectItemDefault])
            }
        }
        fetchProjectList()
    }, [])

    return(
        <>
        <article className={styles.project_container}>
            <div className={styles.project_wrap}>
                {projectList.map((item)=>{
                    return(
                        <section className={styles.project_item_container} key={item._id}>
                            <ProjectListItem projectItem={item}/>
                        </section>
                    )
                })}
            </div>
        </article>
        </>
    )
}