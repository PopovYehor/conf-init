import Image from "next/image";
import style from "./needSupport.module.scss";
import photo from "./photo.png";
import { languages } from "@/language/languages";
import ButtonsSecondary from "../Buttons/ButtonsSecondary/ButtonsSecondary";
import { useAppSelector } from "@/hooks/hooks";

export default function NeedSupport() {
    const languageSelected = useAppSelector(
      (state) => state.language.languageSelected
    );

  return (
    <section className={style.wrapper}>
      <Image src={photo} alt="" className={style.image} />
          <h3>{languages[languageSelected].need_support_headline}</h3>
          <p>{languages[languageSelected].need_support_text}</p>
          <ButtonsSecondary
            text={languages[languageSelected].need_support_button_text}
            url="https://forms.gle/iS8nQyzXFMYZxMwYA"
          />
    </section>
  )
}
