import { navigation } from "@/constants/navigations/navigations"
import styles from "./baner.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import Link from "next/link"
import { languages } from '@/language/languages';
import { useEffect } from "react";
import { fetchMain } from "@/reducers/main/main.reducer";
import banerImg from "@/assets/baner/baner-img.jpg"
import Image from "next/image";
import ButtonsDefault from "@/components/Buttons/ButtonsDefault/ButtonsDefault";
import ButtonsSecondary from "@/components/Buttons/ButtonsSecondary/ButtonsSecondary";

export default function Baner(){
    const languageSelected = useAppSelector((state)=>state.language.languageSelected)
    const dispatch = useAppDispatch()
    const main = useAppSelector((state)=>state.main.main)

    useEffect(()=>{
        dispatch(fetchMain(languageSelected))
    },[languageSelected])

    return(
        <>
        <div className={styles.baner_wrap}>
            <div className={styles.background_image}><Image src={banerImg} alt="baner"/></div>
            <div className={styles.background_color_wrap}/>
            <div className={styles.baner_container}>
                <div className={styles.baner_text}>
                    <h1>{main.titleMain}</h1>
                    <p>{main.description}</p>
                </div>
                <div className={styles.baner_buttons}>
                    <ButtonsDefault text={languages[languageSelected].about} url={navigation.about}/>
                    {/* <Link className={styles.button_about} href={}>
                        {}
                    </Link> */}
                    <ButtonsSecondary  text={languages[languageSelected].support} url={navigation.support}/>
                    {/* <Link href={navigation.support} className={styles.button_support}>
                        {languages[languageSelected].support}
                    </Link> */}
                </div>
            </div>
        </div>
        </>
    )
}