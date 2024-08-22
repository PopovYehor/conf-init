import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import styles from "./evants.module.scss"
import { languages } from "@/language/languages"
import { useEffect, useState } from "react"
import { defaultImage, fetchImage } from "@/reducers/image/image.reducer"
import { IEventItem } from "@/interfaces/main/main.interface"
import { EvantItem } from "./evantItem/evantItem"
import axios from "axios"
import { defaultEvant } from "@/constants/mainItemsDefault/mainItemsDefault"
import { Pagination } from "./pagination/pagination"

export interface IPagination{
    limit: number,
    offset: number,
    page: number
}
export default function Evants(){

    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const [events, setEvents] = useState([defaultEvant])
    const [viewEvents, setViewEvents] = useState(events)
    const dispatch = useAppDispatch()

    
    //set default pagination
    const pagination: IPagination = {
        limit: 3,
        offset: 3,
        page: 1
    }

    const [pag, setPag] = useState<IPagination>(pagination)
    // get events
    const fetchEvents = async ()=>{
        const responce = await axios.get('http://localhost:5000/events')
        setEvents(responce.data)
    }

    useEffect(()=>{
        dispatch(fetchImage())
        fetchEvents()
    },[])
    //set list for next page
    const nextPage = ()=>{
        if(viewEvents.length === 3){
            setPag({...pag,
                page: pag.page+1,
                offset: pag.limit*(pag.page+1)
            })
            setViewEvents(events.slice(((pag.limit*(pag.page+1))-pag.limit), pag.limit*(pag.page+1)))
        }
    }
    //set list for previous page
    const previousPage = ()=>{
        if (pag.page > 1){
            setPag({...pag,
                page: pag.page-1,
                offset: pag.limit*(pag.page-1)
            })
            setViewEvents(events.slice(((pag.limit*(pag.page-1))-pag.limit), pag.limit*(pag.page-1)))
        }
    }
    // set list for specific page
    const setPage = (page: number) =>{
        setPag({...pag,
            page: page,
            offset: pag.limit*page
        })
        setViewEvents(events.slice(((pag.limit*(page))-pag.limit), pag.limit*(page)))
    }
    // set default list
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
                {viewEvents.length > 0 && viewEvents[0]._id !== "0" && viewEvents.map((item, i: any)=>{
                    return(
                        <div key={i}>
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
                        </div>
                    )
                })}
            </div>
            <Pagination event = {events} page = {pag.page} nextPage = {nextPage} previousPage = {previousPage} setPage = {setPage}/>
        </article>
        </>
    )
}