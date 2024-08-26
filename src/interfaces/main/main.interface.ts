import { IImageItem } from "../image/image.interfaces";

interface IDBDefault{
    _id?: string;
    __v?: number;
    image?: IImageItem
    language: string
}

export interface IContactsItem extends IDBDefault {
    adressContEN: string;
    adressContUA: string;
    phoneContEN: string;
    phoneContUA: string;
    titleContEN: string
    titleContUA: string;
}

export interface IEventItem{
    _id?: string;
    __v?: number;
    image: IImageItem
    adressEvent: string
    dataEvent: string
    description: string
    titleEvent: string
}

export interface IHelpItem extends IDBDefault{
    titleHelpUA: string
    titleHelpEN: string
}

export interface IPartnerItem extends IDBDefault{
    webPatner: string
}

export interface IWorthItem extends IDBDefault{
    textWorthEN: string
    textWorthUA: string
}

export interface IMain{
    _id: string
    __v?: number
    description: string
    titleMain: string
    language: string
}