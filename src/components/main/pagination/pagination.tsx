import { useState } from "react"
import { IPagination } from "../evants/evants"

export function Pagination({page}:IPagination){

    const [active, setActive] = useState<number>(page)
    const [next, setNext] = useState<boolean>(true)
    return(
        <>
        
        </>
    )
}