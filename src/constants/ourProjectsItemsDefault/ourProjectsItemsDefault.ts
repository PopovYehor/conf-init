import { IOurProject, IOurProjectItem } from "@/interfaces/our-project/ourProject.interface";
import { defaultImage } from "../mainItemsDefault/mainItemsDefault";

export const ourProjectDefault: IOurProject = {
    _id: "1",
    titleOurProject: "Мета благодійних проєктів",
    description: "– допомогти потребуючим, привернути увагу суспільства та громадян до проблем окремих груп населення, розвивати і культивувати в Україні традиції благодійності, милосердя, готовності прийти на допомогу ближньому.",
    image: defaultImage,
    language: "ua",
    __v: 0
}

export const ourProjectItemDefault: IOurProjectItem = {
    _id: "1",
    titleProject: "Школа волонтерів",
    descriptionBold: "Для людей, які бажають бути волонтерами та допомагати іншим, ми:",
    description: [
        "допомагаємо знайти бажані напрями волонтерської діяльності;",
        "проводимо заняття для отримання необхідних навиків обраного напряму волонтерства;",
        "розповідаємо про всі можливі ризики та як їх уникнути",
        "про межі та правила волонтерства, яких слід дотримуватись, щоб не порушувати права та свободи людей, які отримують допомогу."
    ],
    descriptionEnd: "Також Організація організовує та координує волонтерську діяльність.",
    descriptionWhen: "Коли: щопонеділка о 19:00",
    descriptionWhere: "Де: вул. Кучмин Як, 1Б",
    image: defaultImage,
    language: "ua",
    __v: 0
}