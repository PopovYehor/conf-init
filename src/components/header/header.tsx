import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";
import { navigation } from "@/constants/navigations/navigations";
import { HeaderDesctop } from "./header-desctop/header-desctop";
import { HeaderMobile } from "./header-mobile/header-mobile";

export interface IHeaderNavigation{
    text: string
    link: string
}

export interface IHeaderProps{
    nav: IHeaderNavigation[]
}

export default function Header(){

    const langageSelected = useAppSelector((state)=>state.language.languageSelected)
    const isMobile = useAppSelector((state)=>state.mobile.mobile)
    
    const nav: IHeaderNavigation[] = [
        {text: languages[langageSelected].main, link: navigation.main},
        {text: languages[langageSelected].about, link: navigation.about},
        {text: languages[langageSelected].project, link: navigation.projects},
        {text: languages[langageSelected].support, link: navigation.support},
        {text: languages[langageSelected].volunteers, link: navigation.volunteers}
    ]

    return (<>{!isMobile? <HeaderDesctop nav ={nav}/> : <HeaderMobile nav = {nav}/>}</>)

}