import { IconsEN, IconsUA } from "@/components/icons/icons-language/icons-language";
import { ILanguageItem } from "@/interfaces/language/language";

export const languageList : Array<ILanguageItem> = [
    {name: "UA", img: IconsUA, selected: true},
    {name: "EN", img: IconsEN, selected: false},
]

export const languageDefault = 'UA'