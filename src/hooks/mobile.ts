import { SET_MOBILE } from "@/reducers/mobile/mobile.reducer"
import React from "react"
interface ICheckMobile{
    (hook: React.Dispatch<React.SetStateAction<{payload: boolean; type: "mobile/SET_MOBILE"}>>) : void
}

export const checkMobile: ICheckMobile = (hook)=>{
    document.body.clientWidth < 769 ? 
    hook(SET_MOBILE(true)): hook(SET_MOBILE(false))
}

export const checkMobileListener: ICheckMobile = (hook)=>{
   return window.addEventListener('resize', ()=>{checkMobile(hook)})
}