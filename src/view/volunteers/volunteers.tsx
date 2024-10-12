import TitleForOtherPages from "@/components/TitlePages/TitleForOtherPages";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";

export default function VolunteersView() {
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );

  return (
    <>
      <TitleForOtherPages text={languages[languageSelected].volunteers} />
    </>
  );
}
