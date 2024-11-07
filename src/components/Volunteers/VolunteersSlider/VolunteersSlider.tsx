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
  DesctopVolunteerOtherSlideDot,
} from "@/components/icons/icons-slider/icons-slider";

export default function VolunteersSlider() {
  // Інтерфейс для зображень, що використовуються у слайдері
  interface IGallery {
    _id: string;
    image: IImageItem;
    language: string;
  }

  // Ініціалізація станів
  const languageSelected = useAppSelector((state) => state.language.languageSelected); // Обраний користувачем мовний параметр
  const isMobile = useAppSelector((state) => state.mobile.mobile); // Стан мобільної/десктопної версії

  const [apiData, setApiData] = useState<IGallery[]>([defaultGallerySlider]); // Дані з API або за замовчуванням

  const [groupedSlides, setGroupedSlides] = useState<IGallery[][]>([]); // Груповані слайди для мобільної і десктопної версій
  const [currentSlide, setCurrentSlide] = useState(0); // Поточний індекс слайду
  const [startDotIndex, setStartDotIndex] = useState(0); // Початковий індекс для відображення точок пагінації

  // Конфігурація свайпів для навігації між слайдами
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true,
  });

  // Завантаження даних слайдера з API
  const fetchSlider = async () => {
    try {
      const response = await axios.get(
        apiUrls.VolunteersSlider + languageParameter + languageSelected
      );
      const { data } = response;
      setApiData(data); // Зберігаємо дані з API в стан
    } catch {
      setApiData([defaultGallerySlider]); // Використовуємо слайдер за замовчуванням у разі помилки
    }
  };

  // Викликаємо fetchSlider() щоразу, коли змінюється обрана мова
  useEffect(() => {
    fetchSlider();
  }, [languageSelected]);

  // Групування слайдів залежно від типу пристрою (мобільна чи десктопна версія)
  useEffect(() => {
    if (!isMobile) {
      // Для десктопної версії групуємо по 6 фото на слайд
      const slidesPerPage = 6;
      const grouped = [];
      for (let i = 0; i < apiData.length; i += slidesPerPage) {
        grouped.push(apiData.slice(i, i + slidesPerPage));
      }
      setGroupedSlides(grouped); // Оновлюємо стан згрупованих слайдів
    } else {
      // Для мобільної версії кожен слайд містить лише одне фото
      setGroupedSlides(apiData.map((item) => [item]));
    }
    setCurrentSlide(0); // Повертаємося на перший слайд після оновлення даних
    setStartDotIndex(0); // Починаємо з нульового індексу для точок пагінації
  }, [apiData, isMobile]);

  // Оновлюємо відображення точок пагінації відповідно до поточного індексу слайду
  useEffect(() => {
    const dotsCount = groupedSlides.length;

    // Логіка для зміщення видимих точок пагінації
    if (currentSlide <= 1) {
      setStartDotIndex(0); // Точка зліва, коли слайд на початку
    } else if (currentSlide >= dotsCount - 2) {
      setStartDotIndex(dotsCount - 3); // Точка справа, коли слайд в кінці
    } else {
      setStartDotIndex(currentSlide - 1); // Точка посередині, коли є більше слайдів ліворуч та праворуч
    }
  }, [currentSlide, groupedSlides.length]);

  // Переходи між слайдами
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedSlides.length); // Збільшуємо індекс або повертаємося на початок
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length
    ); // Зменшуємо індекс або переходимо в кінець
  };

  // Перехід до певного слайду за індексом
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Рендер компоненту
  return (
    <section className={style.wrapper}>
      <div className={style.container} {...handlers}>
        <div
          className={style.content}
          style={{
            transform: `translateX(-${currentSlide * (isMobile ? 100 / groupedSlides.length : 33.34)}%)`,
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
      <div className={style.dots_wrapper}>
        {groupedSlides.slice(startDotIndex, startDotIndex + 3).map((_, i) => (
          <div
            key={i + startDotIndex}
            style={{ cursor: "pointer" }}
            onClick={() => goToSlide(i + startDotIndex)}
          >
            {i + startDotIndex === currentSlide ? (
              isMobile ? (
                <MobileVolunteerActiveSlideDot />
              ) : (
                <DesctopVolunteerActiveSlideDot />
              )
            ) : isMobile ? (
              <MobileVolunteerOtherSlideDot />
            ) : (
              <DesctopVolunteerOtherSlideDot />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}