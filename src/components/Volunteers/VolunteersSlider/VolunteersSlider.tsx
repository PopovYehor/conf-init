import style from "./VolunteersSlider.module.scss";

import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import {defaultImage} from "@/constants/mainItemsDefault/mainItemsDefault";

export default function VolunteersSlider() {
  const [apiData, setApiData] = useState<IImageItem[]>([defaultImage]);
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  const isMobile = useAppSelector((state) => state.mobile.mobile);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);
  const [dots, setDots] = useState<JSX.Element[]>([]);

  /* const fetchSlider = async () => {
      try {
        const response = await axios.get(
          apiUrls.volunteersPage + languageParameter + languageSelected
        );
        const { data } = response;
        setApiData(data);
      } catch {
        setApiData([defaultImage]);
      }
    }; 

    useEffect(() => {
      fetchSlider();
    }, [languageSelected]);

    useEffect(() => {
      if (!isMobile) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    }, [isMobile]);
*/
  return (
    <div className={style.wrapper}>
          <div className={style.container}>
              <h1>slider</h1>
      </div>
    </div>
  );
}