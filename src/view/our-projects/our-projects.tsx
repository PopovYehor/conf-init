import OurProjectsList from "@/components/OurProjects/our-projects-list/our-projects-list";
import OurProjectsGoal from "@/components/OurProjects/out-projects-goal/our-projects-goal";
import TitleForOtherPages from "@/components/TitlePages/TitleForOtherPages";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";

export default function OurProjectsView(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected);

    return(
        <>
        <TitleForOtherPages text={languages[languageSelected].project}/>
        <OurProjectsGoal/>
        <OurProjectsList/>
        </>
    )
}