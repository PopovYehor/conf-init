import { IconsEN, IconsUA } from "@/components/Icons/icons-language/icons-language";
import { ILanguageItem } from "@/interfaces/header/language/language";

export const languageList : Array<ILanguageItem> = [
    {name: "ua", img: IconsUA, selected: true},
    {name: "en", img: IconsEN, selected: false},
]

export const locales = ['en', 'ua']

export const languageDefault = 'ua'