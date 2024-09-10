import { useAppSelector } from "@/hooks/hooks";
import { LanguageListDefaut } from "./language-list-default/language-list-default";
import { LanguageListSelecter } from "./language-list-selecter/language-list-selecter";

export default function LanguageListComponent  (){

    const languageSwitch = useAppSelector((state)=>state.language.languageSwitch)

    return(
    <>
        {!languageSwitch?
                <LanguageListDefaut/>
                :
                <LanguageListSelecter/>
        }
    </>
    )
}