import TitleForOtherPages from "@/components/TitlePages/TitleForOtherPages";
import { useAppSelector } from "@/hooks/hooks";
import { IteamItem } from "@/interfaces/junfolio/junfolio.interface";
import { languages } from "@/language/languages";
import styles from './junfolioView.module.scss'
import JunfolioItem from "@/components/Junfolio/junfolioItem";

export default function JunfolioView(){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)

    const linkedIn = 'https://linkedin.com/in/'
    const telegram = 'https://t.me/'
    const github = 'https://github.com/'
    const behance = 'https://www.behance.net/'
    const googlePhoto = 'https://drive.google.com/uc?export=view&id='

    const teamItems: IteamItem[] = [
        {name: languages[languageSelected].pm, description: '', occupation: 'Project maneger', img: googlePhoto+'1qVY_iWqVffsId1uRoEtlfnb3Tp_xQQ96', link: {linkedIn: linkedIn+'mykyta-holovatyi', telegram: telegram+'Nikita_Golovatyi'}},
        {name: languages[languageSelected].ba, description: '', occupation: 'Business analyst', img: googlePhoto+'1D3BxDngt3B5dCrNn8fSUCaI5eiiJDJPC', link: {linkedIn: linkedIn+'olena-dolhopiatova'}},
        {name: languages[languageSelected].ux1, description: '', occupation: 'UX/UI designer', img: googlePhoto+'1wa-hb2yrSfCnssOdsZxNaBHMFpyp-KBJ', link: {linkedIn: linkedIn+'maria-krivulya-93b43928a', behance:behance+"mariakrivulya"}},
        {name: languages[languageSelected].ux2, description: '', occupation: 'UX/UI designer', img: googlePhoto+'1WTL7EsurTo0SzSm_ysR7_U8xd9rSbiOv', link: {linkedIn: linkedIn+'vita-melnychuk-333a8a2b4', behance: behance+'2f47de46'}},
        {name: languages[languageSelected].front1, description: '', occupation: 'Frontend developer', img: googlePhoto+'1UN0d_6aZqlJBTDPh7oAFBFZV_70aP4dD', link: {linkedIn: linkedIn+'yehor-popov-a44a90250', telegram: telegram+'Yehor_dnipro', github: github+'PopovYehor'}},
        {name: languages[languageSelected].front2, description: '', occupation: 'Frontend developer', img: googlePhoto+'1ltLyvsr32h2eGpjxRtujd8bA0jUIyJXG', link: {linkedIn: linkedIn+'panshamray', github: github+'PanShamray'}},
        {name: languages[languageSelected].back, description: '', occupation: 'Backend developer', img: googlePhoto+'1eiCodg3dOxNzkz0Jr0N6Lsq-WFhMUxvI', link: {linkedIn: linkedIn+'viacheslav-shyrokov', telegram: telegram+'Wiltor69', github: github+'Wiltor69'}},
        {name: languages[languageSelected].qa, description: '', occupation: 'QA engineer', img: googlePhoto+'1AwhLkbYKGMV3BGiCKEF6SZ0GAXIlSQ1c', link: {linkedIn: linkedIn+'yulia-krakhmal-3aa110301', telegram: telegram+'JulyKrakhmal'}},
    ]

    return(
        <>
        <TitleForOtherPages text={languages[languageSelected].titleJunfolio}/>
        <article className={styles.junfolio_wrap}>
            <div className={styles.junfolio_container}>
                {teamItems.map((item)=>{
                    return(
                        <section key={item.name} className={styles.team_wrap}><JunfolioItem item={item}/></section>
                        
                    )
                })}
            </div>
        </article>
        </>
    )
}