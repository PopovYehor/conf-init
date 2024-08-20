import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import styles from "./evants.module.scss"
import { languages } from "@/language/languages"
import { useEffect, useState } from "react"
import { defaultImage, fetchImage } from "@/reducers/image/image.reducer"
import { IEventItem } from "@/interfaces/main/main.interface"
import { EvantItem } from "./evantItem/evantItem"
import axios from "axios"
import { defaultEvant } from "@/constants/mainItemsDefault/mainItemsDefault"

export interface IPagination{
    limit: number,
    offset: number,
    page: number
}
export default function Evants(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    /* const main = useAppSelector((state)=>state.main.main) */
    const [events, setEvents] = useState([defaultEvant])
    const [viewEvents, setViewEvents] = useState(events)
    const dispatch = useAppDispatch()

    

    const pagination: IPagination = {
        limit: 3,
        offset: 3,
        page: 1
    }

    const [pag, setPag] = useState<IPagination>(pagination)

    const fetchEvents = async ()=>{
        const responce = await axios.get('http://localhost:5000/events')
        setEvents(responce.data)
    }

    useEffect(()=>{
        dispatch(fetchImage())
        fetchEvents()
    },[])

    const next = ()=>{
        if(viewEvents.length === 3){
            setPag({...pag,
                page: pag.page+1,
                offset: pag.limit*(pag.page+1)
            })
            setViewEvents(events.slice(((pag.limit*(pag.page+1))-pag.limit), pag.limit*(pag.page+1)))
        }
    }

    const prev = ()=>{
        if (pag.page > 1){
            setPag({...pag,
                page: pag.page-1,
                offset: pag.limit*(pag.page-1)
            })
            setViewEvents(events.slice(((pag.limit*(pag.page-1))-pag.limit), pag.limit*(pag.page-1)))
        }
    }

    useEffect(()=>{
        setViewEvents(events.slice((pag.offset-pag.limit), pag.offset))
    },[events])

    return(
        <>
        <article className={styles.evants_wrap}>
            <div className={styles.evants_container}>
                <div className={styles.evants_header}>
                    <h2>{languageSelected === "UA"? languages.UA.evants : languages.EN.evants}</h2>
                </div>
                {viewEvents.length > 0 && viewEvents[0]._id !== "0" && viewEvents.map((item: IEventItem|any)=>{
                    return(
                        <EvantItem 
                        image={ item.image}
                        dataEventUA={item.dataEventUA}
                        dataEventEN={item.dataEventEN}
                        adressEventUA={item.adressEventUA}
                        adressEventEN={item.adressEventEN}
                        descriptionEN={item.descriptionEN}
                        descriptionUA={item.descriptionUA}
                        titleEventUA={item.titleEventUA}
                        titleEventEN={item.titleEventEN}
                        />
                    )
                })}
            </div>
            <button onClick={()=>{next()}}>next</button>
            <button onClick={()=>{prev()}}>prev</button>
        </article>
        </>
    )
}