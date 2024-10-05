import { ourProjectItemDefault } from "@/constants/ourProjectsItemsDefault/ourProjectsItemsDefault"
import styles from "./project-list-item.module.scss"
import { useEffect, useState } from "react"
import { defaultImage } from "@/constants/mainItemsDefault/mainItemsDefault"
import { IconsDone } from "@/components/icons/icons-main/icons-main"
import { languages } from "@/language/languages"
import { useAppSelector } from "@/hooks/hooks"
import ButtonsDefault from "@/components/Buttons/ButtonsDefault/ButtonsDefault"
import { googleForm, supportUrl } from "@/constants/apiUrls/apiUrls"
import ButtonsSecondary from "@/components/Buttons/ButtonsSecondary/ButtonsSecondary"
import { IOurProjectItem } from '@/interfaces/our-project/ourProject.interface';
import { getCurrentImage } from "@/hooks/image"

interface IProjectListItemProps{
    projectItem: IOurProjectItem
}

export function ProjectListItem({projectItem}:IProjectListItemProps){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const images = useAppSelector((state)=>state.image.image)
    const [imgUrl ,setImgUrl] = useState(defaultImage.url)

    useEffect(()=>{
        getCurrentImage(projectItem.image, images, setImgUrl)
    }, [projectItem.image, images])

    return(
        <>
            <div className={styles.project_item_wrap}>
                <div className={styles.project_item_img_wrap}>
                    <img src={imgUrl} alt={projectItem.titleProject}/>
                </div>
                <div className={styles.project_item_desc_wrap}>
                    <div className={styles.project_item_title}>
                        <h3>{projectItem.titleProject}</h3>
                    </div>
                    <div className={styles.project_item_bold}>
                        <p>{projectItem.descriptionBold}</p>
                    </div>
                    <div className={styles.project_item_list}>
                        {projectItem.description.map((item, i)=>{
                            return(
                                <div className={styles.project_item_list_wrap} key={item+i}>
                                    <div className={styles.icons}>
                                        <IconsDone/>
                                    </div>
                                    <div className={styles.project_item_list_description}>
                                        <p>{item}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {projectItem.descriptionEnd &&
                        <div className={styles.project_item_desc_end}>
                            <p>{projectItem.descriptionEnd}</p>    
                        </div>
                    }
                    {projectItem.descriptionWhen &&
                        <div className={styles.project_item_desc_add}>
                            <p className={styles.semiBold}>{languages[languageSelected].when}</p>
                            <p>{projectItem.descriptionWhen}</p>
                        </div>
                    }
                    {projectItem.descriptionWhere &&
                        <div className={styles.project_item_desc_add}>
                            <p className={styles.semiBold}>{languages[languageSelected].where}</p>
                            <p>{projectItem.descriptionWhere}</p>
                        </div>
                    }
                    <div className={styles.project_item_buttons_wrap}>
                        <ButtonsDefault text={languages[languageSelected].donate} url={supportUrl}/>
                        <ButtonsSecondary text={languages[languageSelected].join_volunteers} url={googleForm}/>
                    </div>
                </div>
            </div>
        </>
    )
}