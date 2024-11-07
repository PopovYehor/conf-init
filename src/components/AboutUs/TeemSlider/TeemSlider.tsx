import style from "./TeemSlider.module.scss";
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem/EmployeeItem";
import { defaultTeemSlider } from "@/constants/mainItemsDefault/mainItemsDefault";
import {
  ActiveSlideDot,
  OtherSlideDot,
  MobileActiveSlideDot,
  MobileOtherSlideDot
} from "@/components/icons/icons-slider/icons-slider";
import { languages } from "@/language/languages";
import { useSwipeable } from "react-swipeable";

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
  const [startDotIndex, setStartDotIndex] = useState(0); // Індекс для видимих точок пагінації

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
    setSlidesToShow(isMobile ? 1 : 3); // Встановлюємо кількість видимих слайдів залежно від типу пристрою
  }, [isMobile]);

  // Оновлюємо початковий індекс для точок пагінації залежно від поточного слайду
  useEffect(() => {
    const dotesCount = Math.ceil(apiData.length / slidesToShow);

    // Логіка для зміщення видимих точок пагінації
    if (currentSlide <= 1) {
      setStartDotIndex(0); // Точка зліва на початку слайдера
    } else if (currentSlide >= dotesCount - 2) {
      setStartDotIndex(dotesCount - 3); // Точка справа в кінці слайдера
    } else {
      setStartDotIndex(currentSlide - 1); // Точка посередині на інших слайдах
    }
  }, [currentSlide, apiData.length, slidesToShow]);

  // Логіка для обробки свайпів
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true,
  });

  const handleNextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(apiData.length / slidesToShow)
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(apiData.length / slidesToShow)) %
        Math.ceil(apiData.length / slidesToShow)
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <h1>{languages[languageSelected].ourTeam}</h1>
        <p>{languages[languageSelected].joinOurTeam}</p>
        <div className={style.slider_wrapper} {...handlers}>
          <div
            className={style.slider}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {apiData.map((member) => (
              <EmployeeItem
                key={member._id}
                img={member.image.url}
                name={member.name}
                role={member.role}
                desc={member.description}
              />
            ))}
          </div>
        </div>

        {/* Відображення трьох точок пагінації */}
        <div className={style.dots_wrapper}>
          {Array.from({ length: 3 }, (_, i) => i + startDotIndex).map(
            (index) => (
              <div
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => goToSlide(index)}
              >
                {index === currentSlide ? (
                  isMobile ? (
                    <MobileActiveSlideDot />
                  ) : (
                    <ActiveSlideDot />
                  )
                ) : isMobile ? (
                  <MobileOtherSlideDot />
                ) : (
                  <OtherSlideDot />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}