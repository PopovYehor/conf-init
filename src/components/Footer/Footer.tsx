import Link from "next/link";
import style from "./footer.module.scss";
import { IconsMain } from "@/components/icons/icons-main/icons-main";
import { useState, useEffect } from "react";
import { defaultContacts } from "@/constants/mainItemsDefault/mainItemsDefault";
import { apiUrls, languageParameter, privacyPolicyUrl, publicOfferUrl } from "@/constants/apiUrls/apiUrls";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { languages } from "@/language/languages";
import axios from "axios";
import { navigation } from "@/constants/navigations/navigations";
import {
  InstargamIcons,
  FacebookIcons,
} from "../icons/icons-socials/icons-socials";
import { CHANGE_PAGE } from "@/reducers/language/language.reducer";
import { IHeaderNavigation } from "../header/header";
import { useRouter } from "next/router";


export default function Footer() {

  const langageSelected = useAppSelector((state)=>state.language.languageSelected)
  const router = useRouter()
  
  interface IContactData {
    _id: string;
    titleCont: string;
    adressCont: string;
    phoneCont: string;
    language: string;
    __v: number;
  }

  const nav: IHeaderNavigation[] = [
    {text: languages[langageSelected].main, link: navigation.main},
    {text: languages[langageSelected].about, link: navigation.about},
    {text: languages[langageSelected].project, link: navigation.projects},
    {text: languages[langageSelected].support, link: navigation.support},
    {text: languages[langageSelected].volunteers, link: navigation.volunteers}
]

  const [apiData, setApiData] = useState<IContactData[]>([defaultContacts]);
  
  const dispatch = useAppDispatch()
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );

  useEffect(() => {
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
    fetchContacts();
  }, [languageSelected]);


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
              {nav.map((item: IHeaderNavigation)=>{
                return(
                    <>{router.asPath != item.link &&<Link key={item.link} href={item.link} onClick={()=>dispatch(CHANGE_PAGE(item.link))}>{item.text}</Link>}</>
                )
              })}
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
              <div>        
                <InstargamIcons /> 
              </div>
              <div>
                <FacebookIcons />
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottom_part}>
          <hr></hr>
          <Link href={navigation.junfolio} onClick={()=>dispatch(CHANGE_PAGE(navigation.junfolio))}>
            {languages[languageSelected].junfolio}
          </Link>
        </div>
      </div>
    </footer>
  );
}
