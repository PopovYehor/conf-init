import Image from "next/image";
import style from "./HelpRaiseCash.module.scss";

import { languages } from "@/language/languages";
import pig from "../../assets/donate-buttons-img/donate-img-mobile.png";
import iPhoneUA from "../../assets/qr_code/iPhone.png";
import iPhoneEN from "../../assets/qr_code/eng-iPhone.png";
import { useAppSelector } from "@/hooks/hooks";
import ButtonsDefault from "@/components/Buttons/ButtonsDefault/ButtonsDefault";
import { supportUrl } from "@/constants/apiUrls/apiUrls";


export default function HelpRaiseCash() {
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  const isMobile = useAppSelector((state) => state.mobile.mobile);
  //creating a condition that returns the desired picture depending 
  //on the selected language and on the mobile version
  const handleDonateImg = () => {
    if (!isMobile && languageSelected === "ua") {
      return iPhoneUA;
    } else if (!isMobile && languageSelected === "en") {
      return iPhoneEN;
    } else {
      return pig;
    }
  };
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <Image src={handleDonateImg()} alt="" className={style.image} />

        <div className={style.info}>
          <h2>{languages[languageSelected].main_page_title_raise_cash}</h2>
          <p>{languages[languageSelected].main_page_text_raise_cash}</p>
          <ButtonsDefault
            text={languages[languageSelected].main_page_button_raise_cash}
            url={supportUrl}
            target={true}
          />
        </div>
      </div>
    </section>
  );
}
