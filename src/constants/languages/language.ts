import { IconsEN, IconsUA } from "@/components/icons/icons-language/icons-language";
import { ILanguageItem } from "@/interfaces/header/language/language";

export const languageList : Array<ILanguageItem> = [
    {name: "ua", img: IconsUA, selected: true},
    {name: "en", img: IconsEN, selected: false},
]

export const languageDefault = 'ua'