import Image from "next/image";
import style from "./JoinAsVolunteers.module.scss";
import Link from "next/link";
import axios from "axios";
import desctop from "./photo.png";
import mobile from "./mobile-photo.png";

import { languages } from "@/language/languages";
import { useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { defaultContacts } from "@/constants/mainItemsDefault/mainItemsDefault";
import { apiUrls, languageParameter, googleForm } from "@/constants/apiUrls/apiUrls";
import ButtonsDefault from "@/components/Buttons/ButtonsDefault/ButtonsDefault";



export default function JoinAsVolunteers() {
    interface IContactData {
    _id: string;
    titleCont: string;
    adressCont: string;
    phoneCont: string;
    language: string;
    __v: number;
    }
    const [apiData, setApiData] = useState<IContactData[]>([defaultContacts]);
    const languageSelected = useAppSelector((state) => state.language.languageSelected);
    const isMobile = useAppSelector((state) => state.mobile.mobile);
    const fetchContacts = async () => {
    try {
      const response = await axios.get(
        apiUrls.contactUrl + languageParameter + languageSelected
      );
      const { data } = response;

      setApiData(data);
    } catch {
      setApiData([defaultContacts]);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [languageSelected, fetchContacts]);

    return (
      <>
        <section className={style.wrapper}>
          <div className={style.container}>
            <div className={style.content}>
              <Image
                src={!isMobile ? desctop : mobile}
                alt="hands"
                className={style.image}
              ></Image>
              <h2>{languages[languageSelected].main_page_title_volunteers}</h2>
              <div className={style.text_wrapper}>
                <p className={style.bold}>
                  {languages[languageSelected].joinAsVolunteersText1}
                </p>
                <p>{languages[languageSelected].joinAsVolunteersText2}</p>
                <Link
                  className={style.phoneNumber}
                  href={"tel:" + apiData[0].phoneCont.replace(/\s+/g, "")}
                >
                  {apiData[0].phoneCont}
                </Link>
                <p>{languages[languageSelected].joinAsVolunteersText3}</p>
                <p>{languages[languageSelected].joinAsVolunteersText4}</p>
              </div>
              <ButtonsDefault
                text={languages[languageSelected].main_page_button_volunteers}
                url={googleForm}
                target={true}
              />
            </div>
          </div>
        </section>
      </>
    );
}