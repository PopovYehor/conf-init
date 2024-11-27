import { useAppSelector } from "@/hooks/hooks"
import { languages } from '@/language/languages'
import styles from "../requisits.module.scss";
import { IIRequsitsCurencyItem } from '@/interfaces/supportUs/supportUs.interface';

interface IRequsitsItemUaProps{
    item: IIRequsitsCurencyItem
    header: string
}

export default function RequisitsItemCurrency({item, header}: IRequsitsItemUaProps){

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
                    <p>{languages[languageSelected].iBAN}</p>
                    <p>{item.codeIBAN}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].bankName}</p>
                    <p>{item.bankName}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].beneficiaryBankSwift}</p>
                    <p>{item.bankSWIFTCode}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].addressOrganization}</p>
                    <p>{item.companyAddress}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].correspondentBank}</p>
                    <p>{item.acountCorrespondentBank}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].beneficiaryBankSwift}</p>
                    <p>{item.codeSWIFTCorrespondentBank}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].correspondentBank}</p>
                    <p>{item.correspondentBank}</p>
                </div>
                <div className={styles.item}>
                    <p>{languages[languageSelected].payment}</p>
                    <p>{item.payment}</p>
                </div>
            </div>
        </>
    )
}