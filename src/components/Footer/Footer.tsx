import Link from "next/link";
import style from "./style.module.scss";
import { InstagramIconsDefault, FacebookIconsDefault } from "@/components/icons/icons-socials/icons-socials";
import { IconsMain } from "@/components/icons/icons-main/icons-main";
import { useState, useEffect } from "react";
import { getApiData } from "@/utils/api-request/getApiData";
import { apiUrls } from "@/constants/apiUrls/apiUrls";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchContacts } from "@/reducers/contact/contact.reducer";

export default function Footer() {

  const [apiData, setApiData] = useState<any[]>([]);
  const contacts = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
    if (apiData.length === 0) {
      getApiData(setApiData, apiUrls.contactUrl);
    }
    console.log(contacts);
  }, [apiData]);


  const contactData = apiData.length > 0 ? apiData[0] : null;

  return (
    <footer className={style.footer}>
      <div className={style.wrapper_logos}>
        <div className={style.logo}>
          <a href="">{IconsMain()}</a>
        </div>

        <div className={style.wrapper_icons}>
          <div className={style.icon_circle}>
            <a href="https://www.instagram.com/conf.bmv/">
              {InstagramIconsDefault()}
            </a>
          </div>

          <div className={style.icon_circle}>
            <a href="https://www.facebook.com/profile.php?id=61559370821121">
              {FacebookIconsDefault()}
            </a>
          </div>
        </div>
      </div>

      <div className={style.wrapper_menu_contacts}>
        <div className={style.wrapper_menu}>
          <p>Меню</p>

          <Link href={"/about"}>Про нас</Link>

          <Link href={"/support"}>Підтримати</Link>

          <Link href={"/projects"}>Наші проєкти</Link>

          <Link href={"/volunteers"}>Волонтери</Link>
        </div>

        <div className={style.wrapper_contacts}>
          <p>Контакти</p>
          {contactData ? (
            <>
              <span>{contactData.titleCont}</span>
              <span>{contactData.adressCont}</span>
              <a href={`tel:${contactData.phoneCont}`}>
                {contactData.phoneCont}
              </a>
            </>
          ) : (
              <span>Скоро тут з`являться контакти</span>
          )}
        </div>
      </div>

      <div className={style.wrapper_politics}>
        <a href="#">Політика конфіденційності</a>
        <a href="#">Публічна оферта</a>
        <a href="#">Політика COOKIE</a>
      </div>
    </footer>
  );
}
