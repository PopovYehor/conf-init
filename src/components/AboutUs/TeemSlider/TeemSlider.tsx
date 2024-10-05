import style from "./TeemSlider.module.scss";

import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem/EmployeeItem";
import { defaultTeemSlider } from "@/constants/mainItemsDefault/mainItemsDefault";
import { ActiveSlideDot, OtherSlideDot } from "@/components/icons/icons-slider/icons-slider";
import { languages } from "@/language/languages";

export default function TeemSlider() {
  interface ITeemSlider {
    _id: string;
    name: string;
    role: string;
    description: string;
    image: IImageItem;
    language: string;
    __v: number;
  }
  const isMobile = useAppSelector((state) => state.mobile.mobile);
  const [apiData, setApiData] = useState<ITeemSlider[]>([defaultTeemSlider]);
  const languageSelected = useAppSelector(
      (state) => state.language.languageSelected
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0); 
  const [dots, setDots] = useState<JSX.Element[]>([]);

  const fetchSlider = async () => {
    try {
      const response = await axios.get(
        apiUrls.member + languageParameter + languageSelected
      );
      const { data } = response;
      setApiData(data);
    } catch {
      setApiData([defaultTeemSlider]);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, [languageSelected]);

  useEffect(() => {
    if(!isMobile) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(1)
    }
  }, [isMobile])

 useEffect(() => {
   const slideInterval = setInterval(() => {
     setCurrentSlide(
       (prev) => (prev + 1) % Math.ceil(apiData.length / slidesToShow),
     );
   }, 5000); 
    
   return () => clearInterval(slideInterval);
 }, [apiData, slidesToShow]);

useEffect(() => {
  if (apiData.length === 0 || slidesToShow <= 0) return;

  const dotesCount = Math.max(1, Math.ceil(apiData.length / slidesToShow));


  const newDots = [];

 
  for (let i = 0; i < dotesCount; i++) {
    if (i === currentSlide) {
      newDots.push(<ActiveSlideDot key={i} />); // Активна точка
    } else {
      newDots.push(<OtherSlideDot key={i} />); // Інші точки
    }
  }

  setDots(newDots);
}, [currentSlide, apiData.length, slidesToShow]);
  
    return (
      <section className={style.wrapper}>
        <div className={style.container}>
          <h1>{languages[languageSelected].ourTeam}</h1>
          <p>{languages[languageSelected].joinOurTeam}</p>
          <div className={style.slider_wrapper}>
            <div
              className={style.slider}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {apiData.map((member) => (
                <>
                  <EmployeeItem
                    key={member._id}
                    img={member.image.url}
                    name={member.name}
                    role={member.role}
                    desc={member.description}
                  />
                </>
              ))}
            </div>
          </div>
          <div className={style.dots_wrapper}>{dots}</div>
        </div>
      </section>
    );
}