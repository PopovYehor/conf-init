import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { CHANGE_LANGUAGE, CHANGE_PAGE, SET_LANGUAGE_SELECTED } from "@/reducers/language/language.reducer";
import { checkMobile, checkMobileListener } from "@/hooks/mobile";
import { apiUrls } from "@/constants/apiUrls/apiUrls";
import { fetchImage } from "@/reducers/image/image.reducer";
import { locales } from "@/constants/languages/language";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ['latin'] }) // main font in site

interface ILayout{
  children: ReactNode
}

export default function Layout ({ children }: ILayout) {

  const mobileCheckStatus = useAppSelector((state) => state.mobile.status) // status width change trigger

  const imageStatus = useAppSelector((state)=>state.image.status) // checking if photos have been uploaded
  const dispatch = useAppDispatch()

  
  useEffect(()=>{

    // check locales
    const replaceUrl: string = window.location.href.replace(apiUrls.urlPage, '') //replacing the url of site with an empty string to check the locale
    const langLocation: string = replaceUrl.slice(0,2) //leave only two characters of the locale from the address bar of the browser

    for(let i = 0; i < locales.length; i++){ //check for locale matching
      if(locales[i] == langLocation){  //if the check revealed a match in the locales - the detected locale is installed and the site language is changed to the locale
        dispatch(SET_LANGUAGE_SELECTED(langLocation)) //setting the selected language on the site
        dispatch(CHANGE_LANGUAGE(langLocation)) // setting the language on the site
        break
      }else{ //if the locale is not found - the locale is ua
        dispatch(SET_LANGUAGE_SELECTED('ua')) //setting the ua selected language on the site
        dispatch(CHANGE_LANGUAGE('ua')) // setting the ua language on the site
      }
    }

    //check page
    //the function of checking which page the user is on
    locales.forEach((local)=>{
      if (local == langLocation){ //replacing the locale with an empty string to identify a specific site page
        const page =  window.location.href.replace(apiUrls.urlPage+langLocation, '')
        dispatch(CHANGE_PAGE(page)) //setting the specific page the user is on
      }else{
        const page =  window.location.href.replace(apiUrls.urlPage, '')
        dispatch(CHANGE_PAGE(page))
      }
    })

    // mobile check
    //if the status is not active - start the screen width check function and page width change listener
    if (mobileCheckStatus === null){
      checkMobile(dispatch)
      checkMobileListener(dispatch)
    }

    //get image
    //if the images were not extracted from the backend - the photo retrieval function is launched
    if (imageStatus === 'idle'){
      dispatch(fetchImage())
    }
  },[dispatch, imageStatus, mobileCheckStatus])

  return (
    <>
    <Head>
      <title>CONFERENCE OF BLESSED MARTHA OF VETCKA</title>
      <meta charSet="UTF-8"/>
      <meta name="title" content='Благодійна Організація "Конференція Блаженої Марти Вєцкої", Charitable Organization "Conference of Blessed Marta Wiecka"' />
      <meta name="description" content='Благодійна Організація Конференція Блаженої Марти Вєцкої. Отримання допомоги, надання допомоги, благодійність, волонтерство.
       Charitable Organization Conference of Blessed Marta Wiecka. Receiving help, providing help, charity, volunteering.'/>
      <meta name="keywords" content="благодійна організація, волонтерство, Марта Вєцька, charitable organization, volunteer, Marta Wiecka "/>
      <meta name="og:title" property="og:title" content="Благодійна Організація Конференція Блаженої Марти Вєцкої"/>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="./favicon.png" type="image/png" sizes="192x192" />
    </Head>
    <div className={inter.className}>
      <Header/>
          {children}
      <Footer/>
    </div>
    </>
  );
};