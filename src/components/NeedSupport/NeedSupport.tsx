import Image from "next/image";
import style from "./needSupport.module.scss";
import photo from "./photo.png";
import { languages } from "@/language/languages";
import ButtonsSecondary from "../Buttons/ButtonsSecondary/ButtonsSecondary";
import { useAppSelector } from "@/hooks/hooks";

export default function NeedSupport() {
    const langageSelected = useAppSelector((state) => state.language.languageSelected);

  return (
    <section className={style.wrapper}>
      <Image src={photo} alt="" className={style.image} />
      {langageSelected === "UA" ? (
        <>
          <h3>{languages.UA.need_support_headline}</h3>
          <p>{languages.UA.need_support_text}</p>
          <ButtonsSecondary
            text={languages.UA.need_support_button_text}
            url="https://forms.gle/iS8nQyzXFMYZxMwYA"
          />
        </>
      ) : (
        <>
          <h3>{languages.EN.need_support_headline}</h3>
          <p>{languages.EN.need_support_text}</p>
          <ButtonsSecondary
            text={languages.EN.need_support_button_text}
            url="https://forms.gle/iS8nQyzXFMYZxMwYA"
          />
        </>
      )}
    </section>
  );
}
