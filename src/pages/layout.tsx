import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { Inter } from 'next/font/google'
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { CHANGE_LANGUAGE, SET_LANGUAGE_SELECTED } from "@/reducers/language/language.reducer";
import { checkMobile, checkMobileListener } from "@/hooks/mobile";
import { apiUrls } from "@/constants/apiUrls/apiUrls";
import { fetchImage } from "@/reducers/image/image.reducer";

const inter = Inter({ subsets: ['latin'] })

interface ILayout{
  children: ReactNode
}

export default function Layout ({ children }: ILayout) {

  const mobileCheckStatus = useAppSelector((state) => state.mobile.status)
  const imageStatus = useAppSelector((state)=>state.image.status)
  const dispatch = useAppDispatch()

  
  useEffect(()=>{

    // check locales
    const replaceUrl: string = window.location.href.replace(apiUrls.urlPage, '')
    const langLocation: string = replaceUrl.slice(0,2)
    if (langLocation == ''){
      dispatch(SET_LANGUAGE_SELECTED('ua'))
      dispatch(CHANGE_LANGUAGE('ua'))
    }else{
      dispatch(SET_LANGUAGE_SELECTED(langLocation)) 
      dispatch(CHANGE_LANGUAGE(langLocation))
    }

    // mobile check
    if (mobileCheckStatus === null){
      checkMobile(dispatch)
      checkMobileListener(dispatch)
    }
    //get image
    if (imageStatus === 'idle'){
      dispatch(fetchImage())
    }
  },[])

  return (
    <>
    <Head>
      <title>CONF</title>
      <meta name="title" content="CONF" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <div className={inter.className}>
      <Header/>
          {children}
      <Footer/>
    </div>
    </>
  );
};