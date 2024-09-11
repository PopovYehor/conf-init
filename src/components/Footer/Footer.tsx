import Link from "next/link";
import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { getApiData } from "@/utils/api-request/getApiData";
import { apiUrls } from "@/constants/apiUrls/apiUrls";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchContacts } from "@/reducers/contact/contact.reducer";
import { languages } from "@/language/languages";
import { FacebookIcons, InstargamIcons } from "../Icons/icons-socials/icons-socials";
import { IconsMain } from "../Icons/icons-main/icons-main";

export default function Footer() {
  const [apiData, setApiData] = useState<any[]>([]);

  const contacts = useAppSelector((state) => state.contacts);

  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    if (apiData.length === 0) {
      getApiData(setApiData, apiUrls.contactUrl);
    }
  }, [apiData, dispatch]);

  const contactData = apiData.length > 0 ? apiData[0] : null;

  return (
    <footer className={style.footer}>
      <div className={style.wrapper_logos}>
        <div className={style.logo}>
          <a href="">{<IconsMain/>}</a>
        </div>

        <div className={style.wrapper_icons}>
          <InstargamIcons/>
          <FacebookIcons/>
        </div>
      </div>
      <div className={style.wrapper_menu_contacts}>
        <div className={style.wrapper_menu}>
          <p>{languages[languageSelected].menu}</p>

          <Link href={"/about"}>{languages[languageSelected].about}</Link>

          <Link href={"/support"}>{languages[languageSelected].support}</Link>

          <Link href={"/projects"}>{languages[languageSelected].project}</Link>

          <Link href={"/volunteers"}>
            {languages[languageSelected].volunteers}
          </Link>
        </div>

        <div className={style.wrapper_contacts}>
          <p>{languages[languageSelected].contacts}</p>
          {contactData ? (
            <>
              <span>{contactData.titleContUA}</span>
              <span>{contactData.adressContUA}</span>
              <Link href={`tel:${contactData.phoneContUA}`}>
                {contactData.phoneContUA}
              </Link>
            </>
          ) : (
            <span>Скоро тут з`являться контакти</span>
          )}
        </div>
      </div>

      <div className={style.wrapper_politics}>
        <Link href="/politic-files/privacy_policy.docx" download>
          {languages[languageSelected].privacy_policy}
        </Link>
        <Link href="/politic-files/public_offer.docx" download>
          {languages[languageSelected].offer}
        </Link>
      </div>
    </footer>
  );
}
