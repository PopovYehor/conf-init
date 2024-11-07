import style from "./VolunteersSlider.module.scss";
import axios from "axios";
import { useSwipeable } from "react-swipeable";
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import { defaultGallerySlider } from "@/constants/mainItemsDefault/mainItemsDefault";
import {
  MobileVolunteerActiveSlideDot,
  MobileVolunteerOtherSlideDot,
  DesctopVolunteerActiveSlideDot,
  DesctopVolunteerOtherSlideDot
} from "@/components/icons/icons-slider/icons-slider";

export default function VolunteersSlider() {
  interface IGallery {
    _id: string;
    image: IImageItem;
    language: string;
  }

  const [apiData, setApiData] = useState<IGallery[]>([defaultGallerySlider]);
  const [groupedSlides, setGroupedSlides] = useState<IGallery[][]>([]);
  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  const isMobile = useAppSelector((state) => state.mobile.mobile);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dots, setDots] = useState<JSX.Element[]>([]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true,
  });

  const fetchSlider = async () => {
    try {
      const response = await axios.get(
        apiUrls.VolunteersSlider + languageParameter + languageSelected
      );
      const { data } = response;
      setApiData(data);
    } catch {
      setApiData([defaultGallerySlider]);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, [languageSelected]);

  useEffect(() => {
    // Якщо не мобільна версія, групуємо по 6 фото на слайд
    if (!isMobile) {
      const slidesPerPage = 6;
      const grouped = [];
      for (let i = 0; i < apiData.length; i += slidesPerPage) {
        grouped.push(apiData.slice(i, i + slidesPerPage));
      }
      setGroupedSlides(grouped);
    } else {
      // Якщо мобільна версія, не групуємо фото, кожне фото буде окремим слайдом
      setGroupedSlides(apiData.map((item) => [item]));
    }
    setCurrentSlide(0);
  }, [apiData, isMobile]);

  useEffect(() => {
    const dotsCount = groupedSlides.length;
    const newDots = Array.from({ length: dotsCount }, (_, i) => (
      <div style={{ cursor: "pointer" }} key={i} onClick={() => goToSlide(i)}>
        {i === currentSlide ? (
          !isMobile ? (
            <DesctopVolunteerActiveSlideDot />
          ) : (
            <MobileVolunteerActiveSlideDot />
          )
        ) : !isMobile ? (
          <DesctopVolunteerOtherSlideDot />
        ) : (
          <MobileVolunteerOtherSlideDot />
        )}
      </div>
    ));
    setDots(newDots);
  }, [currentSlide, groupedSlides.length, isMobile]);


  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container} {...handlers}>
        <div
          className={style.content}
          style={{
            transform: `translateX(-${currentSlide * (isMobile ? (100 / dots.length) : 33.3)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {groupedSlides.map((group, index) => (
            <div key={index} className={style.slide}>
              {group.map((gallery) => (
                <div key={gallery._id} className={style.imageWrapper}>
                  <img src={gallery.image.url} alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={style.dots_wrapper}>{dots}</div>
    </section>
  );
}