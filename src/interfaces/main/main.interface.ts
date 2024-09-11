import { JSXElementConstructor } from "react";
import { IImageItem } from "../image/image.interfaces";

export interface IDefaultData{
    _id: string;
    __v: number;
}

export interface IDBDefault extends IDefaultData{
    image: NonNullable<IImageItem>
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

export interface IEventItem extends IDBDefault{
    adressEvent: string
    dataEvent: string
    description: string
    titleEvent: string
    linkEvent?: string
}

export interface IHelpItem extends IDBDefault{
    titleHelp: string
}

export interface IPartnerItem extends IDBDefault{
    webPatner: string
}

export interface IWorthItem extends IDefaultData{
    textWorth: string
    icon?: JSX.Element
    key?: number
    language: string
}

export interface IMain{
    _id: string
    __v?: number
    description: string
    titleMain: string
    language: string
}