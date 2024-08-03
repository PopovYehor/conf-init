import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Layout from "./layout";
import { store } from "@/store/store";
import '@/styles/global.scss'
import "normalize.css"
import localFont from 'next/font/local'

const helvetica = localFont({ src: '../../public/fonts/Helvetica.woff2' })

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
      <>
        <Provider store={store}>
            <Layout>
                <div id="root" key={router.pathname} className={helvetica.className}>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
      </>
    );
  }
  
  export default MyApp;