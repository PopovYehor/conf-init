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
    adressEvent: "",
    dataEvent: "",
    description: "",
    titleEvent: "",
    language: 'ua'
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
        description:"Міжнародна християнська благодійна організація мирян, яка об’єднує близько 600 тисяч людей",
        titleMain: 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ "КОНФЕРЕНЦІЯ БЛАЖЕННОЇ МАРТИ ВЄЦКОЇ"',
        language: 'ua',
/*         contact: [defaultContacts],
        event: [defaultEvant],
        help: [defaultHelp],
        partner: [defaultPartner],
        worth: [defaultWorth], */
}