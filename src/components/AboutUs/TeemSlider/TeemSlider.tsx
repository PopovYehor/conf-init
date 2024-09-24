import style from "./TeemSlider.module.scss";

import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem/EmployeeItem";
import { defaultTeemSlider } from "@/constants/mainItemsDefault/mainItemsDefault";

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

  const [apiData, setApiData] = useState<ITeemSlider[]>([defaultTeemSlider]);
  const languageSelected = useAppSelector(
      (state) => state.language.languageSelected
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  
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
   const slideInterval = setInterval(() => {
     setCurrentSlide(
       (prev) => (prev + 1) % Math.ceil(apiData.length / slidesToShow)
     );
   }, 3000); // Перемикання кожні 3 секунди

   return () => clearInterval(slideInterval);
 }, [apiData]);

 const displayedMembers = apiData.slice(
   currentSlide * slidesToShow,
   currentSlide * slidesToShow + slidesToShow
 );
  
    return (
      <section className={style.wrapper}>
        <h1>Наша Команда</h1>
        <p>
          Якщо ви бажаєте приєднатися до нашої команди, зв`яжіться з нами поштою
        </p>
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
        <div>. . .</div>
      </section>
    );
}