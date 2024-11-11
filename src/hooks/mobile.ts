import { SET_MOBILE } from "@/reducers/mobile/mobile.reducer"
import React from "react"

//screen width check function, checks whether the screen is as wide as a mobile device or a desktop

interface ICheckMobile{
    (hook: React.Dispatch<React.SetStateAction<{payload: boolean; type: "mobile/SET_MOBILE"}>>) : void
}

//main check width function

export const checkMobile: ICheckMobile = (hook)=>{
    document.body.clientWidth < 769 ? // if width less 769px this is mobile version
    hook(SET_MOBILE(true)): hook(SET_MOBILE(false))
}

// lisetener for change width size during use of site

export const checkMobileListener: ICheckMobile = (hook)=>{
   return window.addEventListener('resize', ()=>{checkMobile(hook)})
}