import Link from "next/link";
import style from "./style.module.scss";

import {
  InstagramIconsDefault,
  InstagramIconsHover,
  InstagramIconsPressed,
  InstagramIconsDisabled,
  FacebookIconsDefault,
  FacebookIconsHover,
  FacebookIconsPresed,
  FacebookIconsDisabled,
} from "@/components/icons/icons-socials/icons-socials";
import { IconsMain } from "@/components/icons/icons-main/icons-main";
import { useState, useEffect } from "react";
import { getApiData } from "@/utils/api-request/getApiData";
import { apiUrls } from "@/constants/apiUrls/apiUrls";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchContacts } from "@/reducers/contact/contact.reducer";
import { languages } from "@/language/languages";

export default function Footer() {
  const [apiData, setApiData] = useState<any[]>([]);

  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [isInstagramPressed, setInstagramPressed] = useState(false);
  const [isInstagramDisabled, setInstagramDisabled] = useState(false);

  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isFacebookPressed, setFacebookPressed] = useState(false);
  const [isFacebookDisabled, setFacebookDisabled] = useState(false);

  const contacts = useAppSelector((state) => state.contacts);
  const langageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    if (apiData.length === 0) {
      getApiData(setApiData, apiUrls.contactUrl);
    }
  }, [apiData]);

  const contactData = apiData.length > 0 ? apiData[0] : null;

  const getInstagramIcon = () => {
    if (isInstagramDisabled) return InstagramIconsDisabled();
    if (isInstagramPressed) return InstagramIconsPressed();
    if (isInstagramHovered) return InstagramIconsHover();
    return InstagramIconsDefault();
  };

  const getFacebookIcon = () => {
    if (isFacebookDisabled) return FacebookIconsDisabled();
    if (isFacebookPressed) return FacebookIconsPresed();
    if (isFacebookHovered) return FacebookIconsHover();
    return FacebookIconsDefault();
  };

  return (
    <footer className={style.footer}>
      <div className={style.wrapper_logos}>
        <div className={style.logo}>
          <a href="">{IconsMain()}</a>
        </div>

        <div className={style.wrapper_icons}>
          <div
            onMouseEnter={() => setInstagramHovered(true)}
            onMouseLeave={() => setInstagramHovered(false)}
            onMouseDown={() => setInstagramPressed(true)}
            onMouseUp={() => setInstagramPressed(false)}
            onDoubleClick={() => setInstagramDisabled(!isInstagramDisabled)}
          >
            <Link href="https://www.instagram.com/conf.bmv/" target="_blank">
              {getInstagramIcon()}
            </Link>
          </div>

          <div
            onMouseEnter={() => setFacebookHovered(true)}
            onMouseLeave={() => setFacebookHovered(false)}
            onMouseDown={() => setFacebookPressed(true)}
            onMouseUp={() => setFacebookPressed(false)}
            onDoubleClick={() => setFacebookDisabled(!isFacebookDisabled)}
          >
            <Link
              href="https://www.facebook.com/profile.php?id=61559370821121"
              target="_blank"
            >
              {getFacebookIcon()}
            </Link>
          </div>
        </div>
      </div>
      {langageSelected === "UA" ? (
        <>
          <div className={style.wrapper_menu_contacts}>
            <div className={style.wrapper_menu}>
              <p>{languages.UA.menu}</p>

              <Link href={"/about"}>{languages.UA.about}</Link>

              <Link href={"/support"}>{languages.UA.support}</Link>

              <Link href={"/projects"}>{languages.UA.project}</Link>

              <Link href={"/volunteers"}>{languages.UA.volunteers}</Link>
            </div>

            <div className={style.wrapper_contacts}>
              <p>{languages.UA.contacts}</p>
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
              {languages.UA.privacy_policy}
            </Link>
            <Link href="/politic-files/public_offer.docx" download>
              {languages.UA.offer}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={style.wrapper_menu_contacts}>
            <div className={style.wrapper_menu}>
              <p>{languages.EN.menu}</p>

              <Link href={"/about"}>{languages.EN.about}</Link>

              <Link href={"/support"}>{languages.EN.support}</Link>

              <Link href={"/projects"}>{languages.EN.project}</Link>

              <Link href={"/volunteers"}>{languages.EN.volunteers}</Link>
            </div>

            <div className={style.wrapper_contacts}>
              <p>{languages.EN.contacts}</p>
              {contactData ? (
                <>
                  <span>{contactData.titleContEN}</span>
                  <span>{contactData.adressContEN}</span>
                  <Link href={`tel:${contactData.phoneContEN}`}>
                    {contactData.phoneContEN}
                  </Link>
                </>
              ) : (
                <span>Contacts will appear here soon</span>
              )}
            </div>
          </div>

          <div className={style.wrapper_politics}>
            <Link href="/politic-files/privacy_policy.docx" download>
              {languages.EN.privacy_policy}
            </Link>
            <Link href="/politic-files/public_offer.docx" download>
              {languages.EN.offer}
            </Link>
          </div>
        </>
      )}
    </footer>
  );
}
