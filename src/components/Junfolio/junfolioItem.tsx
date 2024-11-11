import { IteamItem } from '@/interfaces/junfolio/junfolio.interface'
import styles from './junfolioItem.module.scss'
import Link from 'next/link'
import { IconBehance, IconGitHub, IconLinkedIn, IconTelegram } from '../icons/icons-socials/icons-socials'
import Image from 'next/image'

interface IJunfolioitemProps{
    item: IteamItem
}

export default function JunfolioItem({item}: IJunfolioitemProps){

    return(
        <>
            <div className={styles.image_wrap}>
                <Image  src={item.img} alt={item.name} sizes='500px' width={100} height={100}/>
            </div>
            <div className={styles.item_wrap}>
                <div className={styles.name_container}>
                    <div className={styles.name_wrap}>
                        <p>{item.name}</p>
                    </div>
                    <div className={styles.occupation_wrap}>
                        <p>{item.occupation}</p>
                    </div>
                </div>
                <div className={styles.description_container}>
                    <div className={styles.description_wrap}>
                        <div className={styles.description}>
                            <p>{item.description}</p>
                        </div>
                        <div className={styles.link_wrap}>
                            {item.link.linkedIn && <Link href={item.link.linkedIn} target='_blank'><IconLinkedIn/></Link>}
                            {item.link.github && <Link href={item.link.github} target='_blank'><IconGitHub/></Link>}
                            {item.link.behance && <Link href={item.link.behance} target='_blank'><IconBehance/></Link>}
                            {item.link.telegram && <Link href={item.link.telegram} target='_blank'><IconTelegram/></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}