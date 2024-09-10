import Image from "next/image";
import style from "./HelpRaiseCash.module.scss";

import { languages } from "@/language/languages";
import photo from "./photo.png";
import { useAppSelector } from "@/hooks/hooks";
import ButtonsDefault from "@/components/Buttons/ButtonsDefault/ButtonsDefault";


export default function HelpRaiseCash() {
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  return (
    <section className={style.wrapper}>
      <Image src={photo} alt="" className={style.image} />

      <div className={style.info}>
        <h2>{languages[languageSelected].main_page_title_raise_cash}</h2>
        <p>{languages[languageSelected].main_page_text_raise_cash}</p>
        <ButtonsDefault
          text={languages[languageSelected].main_page_button_raise_cash}
          url="/support"
        />
      </div>
    </section>
  );
}
