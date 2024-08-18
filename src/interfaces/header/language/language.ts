export interface ILanguageItem{
    name: string;
    img: () => JSX.Element;
    selected: boolean
}

export interface ILanguageState{
    languageList: Array<ILanguageItem>
    languageSelected: string
    language: ILanguageItem
    languageSwitch: boolean
}