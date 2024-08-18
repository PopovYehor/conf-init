interface IDBDefault{
    _id?: string;
    __v?: number;
    image?: string
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
    adressEventEN: string
    adressEventUA: string
    dataEventEN: string
    dataEventUA: string
    descriptionEN: string
    descriptionUA: string
    titleEventEN: string
    titleEventUA: string
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
    descriptionEN: string
    descriptionUA: string
    titleMainEN: string
    titleMainUA: string
    contact: Array<IContactsItem>
    event: Array<IEventItem>
    help: Array<IHelpItem>
    partner: Array<IPartnerItem>
    worth: Array<IWorthItem>
}