import Donate from "@/components/SupportUs/Donate/donate";
import Report from "@/components/SupportUs/Report/report";
import Requisits from "@/components/SupportUs/Requisits/requisits";
import TitleForOtherPages from "@/components/TitlePages/TitleForOtherPages";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";

export default function SupportUsView(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected);

    return(
        <>
        <TitleForOtherPages text={languages[languageSelected].support}/>
        <Donate/>
        <Requisits/>
        <Report/>
        </>
    )
}