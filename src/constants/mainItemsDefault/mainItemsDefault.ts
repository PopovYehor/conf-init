import { IImageItem } from "@/interfaces/image/image.interfaces"
import { IEventItem, IHelpItem, IPartnerItem, IWorthItem } from "@/interfaces/main/main.interface"

export const defaultContacts = {
    _id: "1",
    __v: 0,
    adressCont: "",
    phoneCont: "",
    titleCont: "",
    language: "ua"
}


export const defaultImage: IImageItem = {
    _id: "",
    url: "",
    description: "",
    __v: 0
}

export const defaultAboutUsDescription = {
  _id: "1",
  titleAbout: "",
  description: "",
  description1: "",
  description2: "",
  description3: "",
  image: defaultImage,
  language: "",
  __v: 0,
};

export const defaultEvant: IEventItem = {
    _id: "0",
    __v: 0,
    image: defaultImage,
    adressEvent: "",
    dataEvent: "",
    description: "",
    titleEvent: "",
    language: 'ua'
}

export const defaultWorth: IWorthItem = {
    _id: "1",
    __v: 0,
    textWorth: "",
    language: 'ua'
}

export const defaultPartner: IPartnerItem = {
    _id: "1",
    __v: 0,
    image: defaultImage,
    webPatner: "",
    language: 'ua'
}

export const defaultHelp: IHelpItem = {
    _id: "1",
    __v: 0,
    image: defaultImage,
    titleHelp: "",
    language: 'ua'
}

export const defaultMain = {
        _id: "",
        __v: 0,
        description:"Міжнародна християнська благодійна організація мирян, яка об’єднує близько 600 тисяч людей",
        titleMain: 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ "КОНФЕРЕНЦІЯ БЛАЖЕННОЇ МАРТИ ВЄЦКОЇ"',
        language: 'ua',
}