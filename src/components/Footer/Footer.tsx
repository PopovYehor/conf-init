import Link from "next/link";
import style from "./footer.module.scss";

import {
  InstagramIconsDefault,
  InstagramIconsHover,
  InstagramIconsPressed,
  InstagramIconsDisabled,
  FacebookIconsDefault,
  FacebookIconsHover,
  FacebookIconsPresed,
  FacebookIconsDisabled,
  InstagramIconsMobile,
  FacebookIconsMobile,
} from "@/components/icons/icons-socials/icons-socials";
import { IconsMain } from "@/components/icons/icons-main/icons-main";
import { useState, useEffect } from "react";
import { defaultContacts } from "@/constants/mainItemsDefault/mainItemsDefault";
import { apiUrls, facebookUrl, instagramUrl, languageParameter, privacyPolicyUrl, publicOfferUrl } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";
import axios from "axios";
import { navigation } from "@/constants/navigations/navigations";


export default function Footer() {
  interface IContactData {
    _id: string;
    titleCont: string;
    adressCont: string;
    phoneCont: string;
    language: string;
    __v: number;
  }

  const [apiData, setApiData] = useState<IContactData[]>([defaultContacts]);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [isInstagramPressed, setInstagramPressed] = useState(false);
  const [isInstagramDisabled, setInstagramDisabled] = useState(false);

  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isFacebookPressed, setFacebookPressed] = useState(false);
  const [isFacebookDisabled, setFacebookDisabled] = useState(false);

  const isMobile = useAppSelector((state) => state.mobile.mobile);
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );

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
  }, [languageSelected]);

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
      <div className={style.container}>
        <div className={style.top_part}>
          <div className={style.wrapper_logos}>
            <div className={style.logo}>
              <a href="">{IconsMain()}</a>
            </div>
          </div>
          <div className={style.wrapper_menu_contacts}>
            <div className={style.wrapper_menu}>
              <p>{languages[languageSelected].menu}</p>

              <Link href={navigation.about}>
                {languages[languageSelected].about}
              </Link>

              <Link href={navigation.support}>
                {languages[languageSelected].support}
              </Link>

              <Link href={navigation.projects}>
                {languages[languageSelected].project}
              </Link>

              <Link href={navigation.volunteers}>
                {languages[languageSelected].volunteers}
              </Link>
            </div>

            <div className={style.wrapper_contacts}>
              <p>{languages[languageSelected].contacts}</p>
              {apiData.length > 0 && (
                <>
                  <span>{apiData[0].titleCont}</span>
                  <span>{apiData[0].adressCont}</span>
                  <Link
                    href={"tel:" + apiData[0].phoneCont.replace(/\s+/g, "")}
                  >
                    {apiData[0].phoneCont}
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className={style.wrapper_politics}>
            <p>{languages[languageSelected].docs}</p>
            <Link href={privacyPolicyUrl} target="_blank">
              {languages[languageSelected].privacy_policy}
            </Link>
            <Link href={publicOfferUrl} target="_blank">
              {languages[languageSelected].offer}
            </Link>

            <div className={style.wrapper_icons}>
              <div
                onMouseEnter={() => setInstagramHovered(true)}
                onMouseLeave={() => setInstagramHovered(false)}
                onMouseDown={() => setInstagramPressed(true)}
                onMouseUp={() => setInstagramPressed(false)}
                onDoubleClick={() => setInstagramDisabled(!isInstagramDisabled)}
              >
                <Link href={instagramUrl} target="_blank">
                  {!isMobile ? getInstagramIcon() : InstagramIconsMobile()}
                </Link>
              </div>

              <div
                onMouseEnter={() => setFacebookHovered(true)}
                onMouseLeave={() => setFacebookHovered(false)}
                onMouseDown={() => setFacebookPressed(true)}
                onMouseUp={() => setFacebookPressed(false)}
                onDoubleClick={() => setFacebookDisabled(!isFacebookDisabled)}
              >
                <Link href={facebookUrl} target="_blank">
                  {!isMobile ? getFacebookIcon() : FacebookIconsMobile()}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom_part}>
          <hr></hr>
          <Link href={navigation.junfolio}>{languages[languageSelected].junfolio}</Link>
        </div>
      </div>
    </footer>
  );
}
