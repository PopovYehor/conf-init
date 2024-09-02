import { useEffect, useState } from "react"
import styles from "./pagination.module.scss"
import { useAppSelector } from "@/hooks/hooks"
import { languages } from '@/language/languages';

export function Pagination({event, page, nextPage, previousPage, setPage}: any){

    const [active, setActive] = useState<number>(page)
    const [next, setNext] = useState<boolean>(true)
    const [prev, setPrev] = useState<boolean>(false)
    const [list, setList] = useState<Array<number>>([])
    const [viewList, setViewList] = useState<Array<number>>([])
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)

    //changer list
    const paginationHandler = (active: number)=>{
        const sliceFrom = list.findIndex((item)=>item==active)
        if(active===list.length){
            setViewList(list.slice((sliceFrom-2), list.length))
        }
        if(active === 1){
            setViewList(list.slice(0, 3))
        }else{
            setViewList(list.slice((sliceFrom-1), (sliceFrom+2)))
        }
    }
    //next button
    const nextPag = ()=>{
        const start = active
        if (start !== list.length){
            setActive(start+1)
            paginationHandler(start+1)
        }
        nextPage()
    }
    // previous button
    const prevPag= ()=>{
        const start = active
        if (active>1){
            setActive(start-1)
            paginationHandler(start-1)
        }
        previousPage()
    }

    const setPagePag = (active: number)=>{
        setActive(active)
        setPage(active)
        paginationHandler(active)
    }

    // default setup pagination list
    useEffect(()=>{
        //make list data
        const index = Math.ceil((event.length/3))
        const arr = []
        for (let i = 0; i < index; i++){
            arr.push(i+1)
        }
        setList(arr)
        //default list setting
        const viewListArr = arr
        setViewList(viewListArr.slice(0,3))
    },[event])

    //check view buttons
    useEffect(()=>{
        if(active>1 && prev === false){
            setPrev(true)
        }
        if(active === 1 && prev === true){
            setPrev(false)
        }
        if(active === list.length && next === true){
            setNext(false)
        }
        if(active !== list.length && next === false){
            setNext(true)
        }
    }, [active])

    return(
        <>
        <div className={styles.pagination_wrap}>
            <div className={styles.pagination_container}>
                {prev &&
                    <div className={styles.pagination_item_btn} onClick={()=>prevPag()}>
                        <span>{languages[languageSelected].previous}</span>
                    </div>
                }
                {viewList.length !== 1 && viewList.map((item, i)=>{
                    return(
                        <div key={i} 
                            className={active !==item ? styles.pagination_item_list : `${styles.pagination_item_list} ${styles.active}`}
                            onClick={()=>setPagePag(item)}>
                                <span>{String(item)}</span>
                        </div>
                    )
                })}
                {next &&
                    <div className={styles.pagination_item_btn} onClick={()=>nextPag()}>
                        <span>{languages[languageSelected].next}</span>
                    </div>
                }
            </div>
        </div>
        </>
    )
}