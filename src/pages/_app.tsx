import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Layout from "./layout";
import { store } from "@/store/store";
import '@/styles/global.scss'
import "normalize.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
      <>
        <Provider store={store}>
            <Layout>
                <div id="root" key={router.pathname} className={inter.className}>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
      </>
    );
  }
  
  export default MyApp;