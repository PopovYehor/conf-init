import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import styles from "./evants.module.scss"
import { languages } from "@/language/languages"
import { useEffect } from "react"
import { fetchImage } from "@/reducers/image/image.reducer"
import { IEventItem } from "@/interfaces/main/main.interface"
import { EvantItem } from "./evantItem/evantItem"

export default function Evants(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const main = useAppSelector((state)=>state.main.main)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchImage())
        console.log(main)
    },[])

    return(
        <>
        <article className={styles.evants_wrap}>
            <div className={styles.evants_container}>
                <div className={styles.evants_header}>
                    <h2>{languageSelected === "UA"? languages.UA.evants : languages.EN.evants}</h2>
                </div>
                {main.event.map((item: IEventItem)=>{
                    return(
                        <EvantItem 
                        image ={item.image}
                        dataEventUA={item.dataEventUA}
                        dataEventEN={item.dataEventEN}
                        adressEventUA={item.adressEventUA}
                        adressEventEN={item.adressEventEN}
                        descriptionEN={item.dataEventEN}
                        descriptionUA={item.dataEventUA}
                        titleEventUA={item.titleEventUA}
                        titleEventEN={item.titleEventEN}
                        />
                    )
                })}
            </div>
        </article>
        </>
    )
}