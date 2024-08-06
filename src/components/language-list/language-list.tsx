import { useEffect, useState } from "react"
import { IconsEN, IconsListClose, IconsListOpen, IconsListSelected, IconsUA } from "../icons/icons-language/icons-language"
import { LanguageListDefaut } from "./language-list-default/language-list-default";
import { LanguageListSelecter } from "./language-list-selecter/language-list-selecter";

export const LanguageList =  ()=>{

    interface ILangItem{
        name: string;
        img: () => JSX.Element;
        selected: boolean
    }

    let list = [
        {name: "UA", img: IconsUA, selected: true},
        {name: "EN", img: IconsEN, selected: false}
    ]
    const [langList, setLangList] = useState(list)
    const [langSelected, setLangSelected] = useState('UA')
    const [language, setLanguage] = useState<ILangItem>(langList.filter(({name})=>name === langSelected)[0])
    const [langSwitch, setLangSwitch] = useState<boolean>(true)

    const langListHandler = (item: any)=>{
        if (item.selected === false){
            const newList = [...langList]
        
            newList.map((listItem)=>{
                if(listItem.selected === true){
                    listItem.selected = false
                }else{
                    listItem.selected = true
                }
            })
            setLangList(newList)
            setLangSelected(item.name)
            setLanguage(item)
        }
    }

    return(
    <>
        {langSwitch?
                <LanguageListDefaut langSwitch = {langSwitch} language = {language} setLangSwitch = {setLangSwitch}/>
                :
                <LanguageListSelecter langList = {langList} langListHandler = {langListHandler} langSwitch={langSwitch} language={language} setLangSwitch={setLangSwitch}/>
        }
    </>
    )
}