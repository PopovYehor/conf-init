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
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] }) // main font in site

interface ILayout{
  children: ReactNode
}

export default function Layout ({ children }: ILayout) {

  const mobileCheckStatus = useAppSelector((state) => state.mobile.status) // status width change trigger

  const imageStatus = useAppSelector((state)=>state.image.status) // checking if photos have been uploaded
  const dispatch = useAppDispatch()

  const router = useRouter()

  
  useEffect(()=>{
    // check locales and page for constant
    dispatch(CHANGE_LANGUAGE(router.locale)) // set language reducer
    dispatch(CHANGE_PAGE(router.asPath)) // set page reducer

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
      <meta name="description" content='Благодійна Організація Конференція Блаженої Марти Вєцкої. Отримання допомоги, Надання допомоги, Благодійність, Волонтерство.
       Charitable Organization Conference of Blessed Marta Wiecka. Receiving help, Providing help, Charity, Volunteering.'/>
      <meta name="keywords" content="Благодійна організація, Волонтерство, Марта Вєцька, Charitable organization, Volunteer, Marta Wiecka "/>
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