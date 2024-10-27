import TitleForOtherPages from "@/components/TitlePages/TitleForOtherPages";
import JoinAsVolunteers from "@/components/Volunteers/JoinAsVolunteers/JoinAsVolunteers";
import PageDescription from "@/components/Volunteers/PageDedcription/PageDescription";
import VolunteersDescription from "@/components/Volunteers/VolunteersDescription/VolunteersDescription";
import VolunteersSlider from "@/components/Volunteers/VolunteersSlider/VolunteersSlider";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";

export default function VolunteersView() {
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );

  return (
    <>
      <TitleForOtherPages text={languages[languageSelected].volunteers} />
      <PageDescription />
      <VolunteersDescription />
      <VolunteersSlider />
      <JoinAsVolunteers />
    </>
  );
}
