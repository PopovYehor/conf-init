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
  const [currentSlide, setCurrentSlide] = useState(0); // Index of the current slide
  const [slidesToShow, setSlidesToShow] = useState(0); // Number of visible slides on one screen
  const [startDotIndex, setStartDotIndex] = useState(0); // Starting index for pagination dots

  

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await axios.get(
          apiUrls.member + languageParameter + languageSelected
        );
        const { data } = response;
        setApiData(data);
      } catch {
        setApiData([defaultTeemSlider]); // Use default data if there's an error
      }
    };
    fetchSlider();
  }, [languageSelected]);

  // Set the number of visible slides based on device type
  useEffect(() => {
    setSlidesToShow(isMobile ? 1 : 3);
  }, [isMobile]);

  // Update the starting index for pagination dots based on the current slide
  useEffect(() => {
    const dotesCount = Math.ceil(apiData.length / slidesToShow);

    // Logic for controlling visible pagination dots
    if (currentSlide <= 1) {
      setStartDotIndex(0); // Dot on the left when at the start
    } else if (currentSlide >= dotesCount - 2) {
      setStartDotIndex(dotesCount - 3); // Dot on the right when at the end
    } else {
      setStartDotIndex(currentSlide - 1); // Center dot when there is room to move in both directions
    }
  }, [currentSlide, apiData.length, slidesToShow]);

  // Slide transitions
  const handleNextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(apiData.length / slidesToShow)
    ); // Increment index or loop back to start
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(apiData.length / slidesToShow)) %
        Math.ceil(apiData.length / slidesToShow)
    ); // Decrement index or go to the end
  };

  // Go to a specific slide by index
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Swipe configuration for slide navigation
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true, // Allows swipe with mouse drag
  });

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

        {/* Display three pagination dots */}
        <div className={style.dots_wrapper}>
          {Array.from({ length: 3 }, (_, i) => i + startDotIndex).map(
            (index) => (
              <div
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => goToSlide(index)} // Handle click to navigate to the corresponding slide
              >
                {index === currentSlide ? (
                  isMobile ? (
                    <MobileActiveSlideDot /> // Display active dot on mobile
                  ) : (
                    <ActiveSlideDot /> // Display active dot on desktop
                  )
                ) : isMobile ? (
                  <MobileOtherSlideDot /> // Display inactive dot on mobile
                ) : (
                  <OtherSlideDot /> // Display inactive dot on desktop
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}