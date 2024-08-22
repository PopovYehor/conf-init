import { IImageItem } from "@/interfaces/image/image.interfaces"

export const defaultContacts = {
    _id: "1",
    __v: 0,
    adressContEN: "",
    adressContUA: "",
    phoneContEN: "",
    phoneContUA: "",
    titleContEN: "",
    titleContUA: "",
}

export const defaultImage: IImageItem = {
    _id: "",
    url: "",
    description: "",
    __v: 0
}

export const defaultEvant = {
    _id: "0",
    __v: 0,
    image: defaultImage,
    adressEventEN: "",
    adressEventUA: "",
    dataEventEN: "",
    dataEventUA: "",
    descriptionEN: "",
    descriptionUA: "",
    titleEventEN: "",
    titleEventUA: "",
}

export const defaultWorth = {
    _id: "1",
    __v: 0,
    textWorthEN: "",
    textWorthUA: "",
}

export const defaultPartner = {
    _id: "1",
    __v: 0,
    image: defaultImage,
    webPatner: "",
}

export const defaultHelp = {
    _id: "1",
    __v: 0,
    image: defaultImage,
    titleHelpUA: "",
    titleHelpEN: "",
}

export const defaultMain = {
        _id: "",
        __v: 0,
        descriptionEN: "",
        descriptionUA: "",
        titleMainEN: "",
        titleMainUA: "",
        contact: [defaultContacts],
        event: [defaultEvant],
        help: [defaultHelp],
        partner: [defaultPartner],
        worth: [defaultWorth],
}