import Image from "next/image";
import style from "./needSupport.module.scss";
import photo from "./photo.png";
import { languages } from "@/language/languages";
import { useAppSelector } from "@/hooks/hooks";
import ButtonsSecondary from "@/components/Buttons/ButtonsSecondary/ButtonsSecondary";
import { googleForm } from "@/constants/apiUrls/apiUrls";

export default function NeedSupport() {
    const languageSelected = useAppSelector(
      (state) => state.language.languageSelected
    );

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <Image src={photo} alt="" className={style.image} />
        <h3>{languages[languageSelected].need_support_headline}</h3>
        <p>{languages[languageSelected].need_support_text}</p>
        <span>{languages[languageSelected].need_support_text2}</span>
        <ButtonsSecondary
          text={languages[languageSelected].need_support_button_text}
          url={googleForm}
          target={true}
        />
      </div>
    </section>
  );
}
