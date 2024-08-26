import Head from "next/head";
import { ReactNode } from "react";
import { Inter } from 'next/font/google'
import Header from "@/components/header/header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Layout ({ children }: {children: ReactNode}) {
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
        {/* <Footer/> */}
      </div>
      </>
    );
};