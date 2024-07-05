import Head from "next/head";
import { ReactNode } from "react";

export default function Layout ({ children }: {children: ReactNode}) {
    return (
      <>
      <Head>
        <title>CONF</title>
        <meta name="title" content="CONF" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div>
            {children}
      </div>
      </>
    );
};