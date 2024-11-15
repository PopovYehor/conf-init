import style from "./mobile.module.scss";
import Image from "next/image";

import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import { defaultAboutUsDescription } from "@/constants/mainItemsDefault/mainItemsDefault";

export default function Mobile() {

    interface IAboutUsDescription {
      _id: string;
      titleAbout: string;
      description: string;
      description1: string;
      description2: string;
      description3: string;
      image: IImageItem;
      language: string;
      __v: number;
    }

    const [apiData, setApiData] = useState<IAboutUsDescription[]>([
      defaultAboutUsDescription,
    ]);
    const languageSelected = useAppSelector(
      (state) => state.language.languageSelected
    );

    useEffect(() => {
      const fetchDescription = async () => {
        try {
          const response = await axios.get(
            apiUrls.aboutUs + languageParameter + languageSelected
          );
          const { data } = response;
  
          setApiData(data);
        } catch {
          setApiData([defaultAboutUsDescription]);
        }
      };
      fetchDescription();
    }, [languageSelected, fetchDescription]);

  return (
    <>
      <section className={style.wrapper}>
        <div className={style.title_description}>
          <h2>{apiData[0].titleAbout}</h2>
          <h6>{apiData[0].description[0]}</h6>
        </div>
        <div className={style.image_wrapper}>
          <Image
            src={apiData[0].image.url}
            alt="marta"
            className={style.img}
            width={350}
            height={410}
          ></Image>
        </div>
        <div className={style.text_wrapper}>
          <p>{apiData[0].description[1]}</p>
          <p>{apiData[0].description[2]}</p>
          <p>{apiData[0].description[3]}</p>
        </div>
      </section>
    </>
  );
}
