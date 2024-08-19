import { navigation } from "@/constants/navigations/navigations"
import styles from "./baner.module.scss"
import { useAppSelector } from "@/hooks/hooks"
import Link from "next/link"
import { languages } from '@/language/languages';

export default function Baner(){
    const language = useAppSelector((state)=>state.language.languageSelected)
    const mobile = useAppSelector((state)=>state.mobile.mobile)
    const mainImg1 = 'https://s3-alpha-sig.figma.com/img/a1eb/aa0b/d2ff9a0e085476a1c0ac75e7a2bec72c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QlUZpQ4upa5gcqdpkVS2vVrRWquX-b-SviRqnCRAw9wtuaiXs54Hc7z4etGak-i5HV7EZ63OBxpABV4fveSocbXN-Ed23ZFixykJalXILcmM-gz16j8p2FhIeSuDM8eeuEYTJ18H2k7xQkD8L3biH7JNMKODU98oLELYv2vHcgSLcZ1MxOmsYARJzpeVK4SN58Kl9Wcjai3YSI6GX6zljObVAVwc1y4Z2gnIx4Y9YvuEwIltWur-uTC8ZDad-4yy9rBksnCJQHlJUyfUJ1tCwMVy1tHkgrBzvhk0XjbrdKgmKG8mp2tPCzy9F~cCXTg5HPTt5Uo7VT-G9lNXJzboDQ__'
    const mainImg2 = 'https://s3-alpha-sig.figma.com/img/cc61/055a/5439882ab1aab02ad4c35469ec31aea4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-ZLA~XSr~sgvri9NU5ysvMpxC2prEzNRhqOr6Ry8CVZid15m3dDFgtzxrd50wNBsqL0SuMEVL3ln8KbpBT6654l8bRK0ofU5fAt27sZ0LUArh7scWE5EuI54JIzRvMldctu34afa5PMINCpuixDA64YRJRtklZ9pzBmh~T9xSMUR40MBuVnDZNDG3St-0HSkLLC7FW1SzGzCBxrmjB4QAoVW58jfxY5QEClbnuGygtnGCLzozvZZCOhRu5MET1HsDYjdHY0YdAp8utySraWUYmq5Rny7l2kVI5LUTsq2d2pa~ZEpQdVyXH2UcZJ2nb4060~nTAj0rJXuIDXxP2TrQ__'
    
    const main = useAppSelector((state)=>state.main.main)

    return(
        <>
        <div className={styles.baner_wrap}>
            <div className={styles.background_image}><img src={!mobile? mainImg1 : mainImg2}/></div>
            <div className={styles.background_color_wrap}/>
            <div className={styles.baner_container}>
                <div className={styles.baner_text}>
                    <h1>{language === 'UA'? main.titleMainUA : main.titleMainEN}</h1>
                    <p>{language === 'UA'? main.descriptionUA : main.descriptionEN}</p>
                </div>
                <div className={styles.baner_buttons}>
                    <Link className={styles.button_about} href={navigation.about}>
                        {language === 'UA'? languages.UA.about : languages.EN.about}
                    </Link>
                    <Link href={navigation.support} className={styles.button_support}>
                        {language === 'UA'? languages.UA.support : languages.EN.support}
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}