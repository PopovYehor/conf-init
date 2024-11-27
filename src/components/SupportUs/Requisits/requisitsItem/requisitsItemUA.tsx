import { useAppSelector } from "@/hooks/hooks"
import { languages } from '@/language/languages'
import styles from "../requisits.module.scss";
import { IRequsitsItem } from '@/interfaces/supportUs/supportUs.interface';
import { useEffect } from "react";

interface IRequsitsItemUaProps{
    item: IRequsitsItem
    header: string
}

export default function RequisitsItemUa({item, header}: IRequsitsItemUaProps){

    const languageSelected = useAppSelector((state) => state.language.languageSelected)
    return(
        <>
            <div className={styles.item_header}>
                <p>{header}</p>
            </div>
            <div className={styles.item_container}>
                <div className={styles.item}>
                    <p>{languages[languageSelected].nameOrganization}</p>
                    <p>{item.nameOrganization}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].code}</p>
                    <p>{item.code}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].bankName}</p>
                    <p>{item.bankName}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].accountNumber}</p>
                    <p>{item.accountNumber}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].payment}</p>
                    <p>{item.payment}</p>
                </div>
            </div>
        </>
    )
}