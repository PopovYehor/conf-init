import Image from "next/image";
import style from "./JoinVolunteers.module.scss";

import { languages } from "@/language/languages";
import photo from "./photo.png";
import ButtonsDefault from "../Buttons/ButtonsDefault/ButtonsDefault";
import { useAppSelector } from "@/hooks/hooks";


export default function JoinVolunteers() {
  const langageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  return (
    <section className={style.wrapper}>
      <Image src={photo} alt="" className={style.image} />

      <div className={style.info}>
        {langageSelected === "UA" ? (
          <>
            <h2>{languages.UA.main_page_title_volunteers}</h2>
            <p>{languages.UA.main_page_text_volunteers}</p>
            <ButtonsDefault
              text={languages.UA.main_page_button_volunteers}
              url="/volunteers"
            />
          </>
        ) : (
          <>
            <h2>{languages.EN.main_page_title_volunteers}</h2>
            <p>{languages.EN.main_page_text_volunteers}</p>
            <ButtonsDefault
              text={languages.EN.main_page_button_volunteers}
              url="/volunteers"
            />
          </>
        )}
      </div>
    </section>
  );
}
