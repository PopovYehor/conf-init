import TitleForOtherPages from "../../TitleForOtherPages/TitleForOtherPages";
import style from "./mobile.module.scss";
import Image from "next/image";
import photo from "../photo.png";

import { languages } from "@/language/languages";
import { useAppSelector } from "@/hooks/hooks";

export default function Mobile() {
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );

  return (
    <>
                <TitleForOtherPages text={languages[languageSelected].about} />
                <section className={style.wrapper}>
                    <div className={style.title_description}>
                        <h2>
                            Благодійна організація «Конференція Блаженної Марти Вєцкої»
                        </h2>
                        <h6>
                            Є українською гілкою Товариства св. Вікентія де Поля (St Vincent
                            de Paul Society) - міжнародної християнської волонтерської
                            спільноти.
                        </h6>
                    </div>
                    <div className={style.image_wrapper}>
                        <Image src={photo} alt="" className={style.image}></Image>
                    </div>
                    <div className={style.text_wrapper}>
                        <p>
                            Товариство св. Вікентія де Поля (історична назва – Конференція),
                            було створено групою студентів на чолі з Бл. Фредеріком Озанамом
                            в 1833 році в Франції і головною метою якого було допомагати
                            бідним та обездоленим людям на вулицях. На даний час товариство
                            об`єднує майже 800 000 волонтерів по всьому світу для надання
                            практичної допомоги людям, які її потребують. В світі функціонує
                            близько 40 000 конференцій в 120 країнах.
                        </p>
                        <p>
                            В Україні – волонтери Товариства працюють в Києві, Харкові,
                            Снятині та інших містах. Наша організація названа на честь
                            однієї з Дочок Милосердя - Марти Вєцкої, яка віддано та
                            безумовно служила людям в лікарні Снятина Івано-Франківської
                            області.
                        </p>
                        <p>
                            БО «Конференція Блаженної Марти Вєцкої» є частиною міжнародної
                            мережі Вікентійської родини, яка об’єднує організації по всьому
                            світу, основне завдання яких – благодійна діяльність для
                            найбільш потребуючих з безумовним дотримання вікентійських
                            цінностей.
                        </p>
                    </div>
                </section>
              </>
         
         
    
  );
}
