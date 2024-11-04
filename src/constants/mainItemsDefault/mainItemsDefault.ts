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

export const defaultGallerySlider = {
  _id: "0",
  image: defaultImage,
  language: "ua",
};
export const defaultAboutUsDescription = {
  _id: "1",
  titleAbout: "Благодійна організація «Конференція Блаженної Марти Вєцкої»",
  description:
    "Є українською гілкою Товариства св. Вікентія де Поля (St Vincent de Paul Society) - міжнародної християнської волонтерської спільноти.",
  description1:
    "Товариство св. Вікентія де Поля (історична назва – Конференція), було створено групою студентів на чолі з Бл. Фредеріком Озанамом в 1833 році в Франції і головною метою якого було допомагати бідним та обездоленим людям на вулицях. На  даний час товариство об'єднує майже 800 000 волонтерів по всьому світу для надання практичної допомоги людям, які її потребують. В світі функціонує близько 40 000 конференцій в 120 країна.",
  description2:
    "В Україні – волонтери Товариства працюють в Києві, Харкові, Снятині та інших містах. Наша організація названа на честь однієї з Дочок Милосердя - Марти Вєцкої, яка віддано та безумовно служила людям в лікарні Снятина Івано-Франківської області.",
  description3:
    "БО «Конференція Блаженної Марти Вєцкої» є частиною міжнародної мережі Вікентійської родини, яка об’єднує організації по всьому світу, основне завдання яких – благодійна діяльність для найбільш потребуючих з безумовним дотримання вікентійських цінностей.",
  image: defaultImage,
  language: "ua",
  __v: 0,
};

export const defaultTeemSlider = {
    _id: "0",
    name: "",
    role: "",
    description: "",
    image: defaultImage,
    language: 'ua',
    __v: 0,
}

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