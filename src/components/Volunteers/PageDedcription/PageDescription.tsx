import Image from "next/image";
import style from "./PageDescription.module.scss";

import { languages } from "@/language/languages";
import { useAppSelector } from "@/hooks/hooks";
import photo from "./hands.png";

export default function PageDescription() {
    const languageSelected = useAppSelector(
      (state) => state.language.languageSelected
    );

    return (
      <section className={style.wrapper}>
        <div className={style.container}>
          <Image src={photo} alt="hands" className={style.image}></Image>
          <div className={style.content}>
            <p className={style.text1}>
              {languages[languageSelected].volunteersPageText1}
            </p>
            <p className={style.text2}>
              {languages[languageSelected].volunteersPageText2}
            </p>
          </div>
        </div>
      </section>
    );
 }