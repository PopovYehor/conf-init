import { IDBDefault } from "../main/main.interface";

export interface IOurProject extends IDBDefault{
    titleOurProject: string
    description: string
}

export interface IOurProjectItem extends IDBDefault{
    _id: string,
    titleProject: string,
    descriptionBold: string,
    description: Array<string>,
    descriptionEnd?: string,
    descriptionWhen?: string,
    descriptionWhere?: string,
}