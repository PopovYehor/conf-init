import { SET_MOBILE } from "@/reducers/mobile/mobile.reducer"

export const checkMobile = (hook: any)=>{
    document.body.clientWidth < 769 ? 
    hook(SET_MOBILE(true)): hook(SET_MOBILE(false))
}

export const checkMobileListener = (hook: any)=>{
   return window.addEventListener('resize', ()=>{checkMobile(hook)})
}