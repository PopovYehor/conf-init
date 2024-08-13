import Image from "next/image";
import style from "./HelpRaiseCash.module.scss";

import { languages } from "@/language/languages";
import photo from "./photo.png";
import ButtonsDefault from "../Buttons/ButtonsDefault/ButtonsDefault";
import { useAppSelector } from "@/hooks/hooks";


export default function HelpRaiseCash() {
  const langageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  return (
    <section className={style.wrapper}>
      <Image src={photo} alt="" className={style.image} />

      <div className={style.info}>
        {langageSelected === "UA" ? (
          <>
            <h2>{languages.UA.main_page_title_raise_cash}</h2>
            <p>{languages.UA.main_page_text_raise_cash}</p>
            <ButtonsDefault
              text={languages.UA.main_page_button_raise_cash}
              url="/"
            />
          </>
        ) : (
          <>
            <h2>{languages.EN.main_page_title_raise_cash}</h2>
            <p>{languages.EN.main_page_text_raise_cash}</p>
            <ButtonsDefault
              text={languages.EN.main_page_button_raise_cash}
              url="/"
            />
          </>
        )}
      </div>
    </section>
  );
}
