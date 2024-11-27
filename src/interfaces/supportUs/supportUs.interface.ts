import { IDefaultData } from "../main/main.interface";

export interface IReportItem extends IDefaultData{
    titleReport: string;
    linkReport: string;
    language: string;
}

export interface IRequsitsItem extends IDefaultData{
    nameOrganization: string;
    code: string;
    bankName: string;
    accountNumber: string;
    payment: string;
} 

export interface IIRequsitsCurencyItem extends IDefaultData {
    nameOrganization: string
    codeIBAN: string
    bankName: string
    bankSWIFTCode: string
    companyAddress: string
    acountCorrespondentBank: string
    codeSWIFTCorrespondentBank: string
    correspondentBank: string
    payment: string
}