import { IIRequsitsCurencyItem, IReportItem, IRequsitsItem } from "@/interfaces/supportUs/supportUs.interface"

export const SupportItemsDefault: IRequsitsItem = {
    _id: '0',
    nameOrganization: "БО КОНФЕРЕНЦІЯ БЛАЖЕННОЇ МАРТИ ВЄЦКОЇ ",
    code: "36883793",
    bankName: "АТ КБ «ПриватБанк»",
    accountNumber: "UA523052990000026006026722176",
    payment: "благодійна пожертва",
}

export const RequisitsCurrencyItemsDefault: IIRequsitsCurencyItem = {
        _id: '0',
        nameOrganization: "nameOrganization",
        codeIBAN: "codeIBAN",
        bankName: "bankName",
        bankSWIFTCode: "bankSWIFTCode",
        companyAddress: "companyAddress",
        acountCorrespondentBank: "acountCorrespondentBank",
        codeSWIFTCorrespondentBank: "codeSWIFTCorrespondentBank",
        correspondentBank: "correspondentBank",
        payment: "payment",
}

export const ReportItemDefault: IReportItem = {
        _id: '0',
        titleReport: "виписка 2",
        linkReport: "https://www.google.com.ua/?hl=uk",
        language: "ua"
}