import { HistoryDescription } from "@/components/AboutUs/HistoryDescription/historyDescription";
import SecondPageDescription from "@/components/AboutUs/SecondPageDescription/SecondPageDescription";
import TeemSlider from "@/components/AboutUs/TeemSlider/TeemSlider";
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";
import TitleForOtherPages from "@/components/TitlePages/TitleForOtherPages";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";

export default function AboutUsView(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected);

    return(
        <>
            <TitleForOtherPages text={languages[languageSelected].about} />
            <SecondPageDescription/>
            <HistoryDescription />
            <TeemSlider/>
            <HelpRaiseCash/>
            <JoinVolunteers/>
        </>
    )
}