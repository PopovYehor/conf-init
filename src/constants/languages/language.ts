import { IconsEN, IconsUA } from "@/components/icons/icons-language/icons-language";
import { ILanguageItem } from "@/interfaces/header/language/language";

export const languageList : Array<ILanguageItem> = [ // language list in header
    {name: "ua", img: IconsUA, selected: true}, // selected is a requirer for set default language in page
    {name: "en", img: IconsEN, selected: false},
]

export const locales = ['en', 'ua'] // constanst for locales in window href location

export const languageDefault = 'ua' // constants for default language in page