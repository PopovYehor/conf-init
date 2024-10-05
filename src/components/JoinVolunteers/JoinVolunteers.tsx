import Image from "next/image";
import style from "./JoinVolunteers.module.scss";

import { languages } from "@/language/languages";
import photo from "./photo.png";
import { useAppSelector } from "@/hooks/hooks";
import ButtonsDefault from "@/components/Buttons/ButtonsDefault/ButtonsDefault";
import { googleForm } from "@/constants/apiUrls/apiUrls";


export default function JoinVolunteers() {
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <Image src={photo} alt="" className={style.image} />

        <div className={style.info}>
          <h2>{languages[languageSelected].main_page_title_volunteers}</h2>
          <p>{languages[languageSelected].main_page_text_volunteers}</p>
          <ButtonsDefault
            text={languages[languageSelected].main_page_button_volunteers}
            url={googleForm}
          />
        </div>
      </div>
    </section>
  );
}
