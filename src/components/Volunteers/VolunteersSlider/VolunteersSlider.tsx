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
  interface IGallery {
    _id: string;
    image: IImageItem;
    language: string;
  }

  const languageSelected = useAppSelector(
    (state) => state.language.languageSelected
  );
  const isMobile = useAppSelector((state) => state.mobile.mobile);
  const [apiData, setApiData] = useState<IGallery[]>([defaultGallerySlider]);

  const [groupedSlides, setGroupedSlides] = useState<IGallery[][]>([]); // Grouped slides for mobile and desktop versions
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index
  const [startDotIndex, setStartDotIndex] = useState(0); // Initial index for pagination dots display

  useEffect(() => {
      const fetchSlider = async () => {
        try {
          const response = await axios.get(
            apiUrls.VolunteersSlider + languageParameter + languageSelected
          );
          const { data } = response;
          setApiData(data);
        } catch {
          setApiData([defaultGallerySlider]); // Use default slider in case of an error
        }
      };
    fetchSlider();
  }, [languageSelected]);

  // Group slides depending on device type (mobile or desktop version)
  useEffect(() => {
    if (!isMobile) {
      // For desktop version, group 6 photos per slide
      const slidesPerPage = 6;
      const grouped = [];
      for (let i = 0; i < apiData.length; i += slidesPerPage) {
        grouped.push(apiData.slice(i, i + slidesPerPage));
      }
      setGroupedSlides(grouped); // Update grouped slides state
    } else {
      // For mobile version, each slide contains only one photo
      setGroupedSlides(apiData.map((item) => [item]));
    }
    setCurrentSlide(0); // Reset to the first slide after updating data
    setStartDotIndex(0); // Start from zero index for pagination dots
  }, [apiData, isMobile]);

  // Update pagination dots display based on the current slide index
  useEffect(() => {
    const dotsCount = groupedSlides.length;

    // Logic for shifting visible pagination dots
    if (currentSlide <= 1) {
      setStartDotIndex(0); // Dot on the left when at the beginning of the slider
    } else if (currentSlide >= dotsCount - 2) {
      setStartDotIndex(dotsCount - 3); // Dot on the right when at the end of the slider
    } else {
      setStartDotIndex(currentSlide - 1); // Centered dot when there are more slides to the left and right
    }
  }, [currentSlide, groupedSlides.length]);

  // Slide transitions
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedSlides.length); // Increment index or loop back to start
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length
    ); // Decrement index or go to the end
  };

  // Navigate to a specific slide by index
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Swipe configuration for slide navigation
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true,
  });

  return (
    <section className={style.wrapper}>
      <div className={style.container} {...handlers}>
        <div
          className={style.content}
          style={{
            transform: `translateX(-${
              currentSlide * (isMobile ? 100 / groupedSlides.length : 33.34)
            }%)`,
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
          // Each dot is mapped from a sliced portion of groupedSlides, displaying only 3 dots at a time for pagination.
          <div
            key={i + startDotIndex} // Unique key for each dot based on its index and startDotIndex
            style={{ cursor: "pointer" }} // Style for the dot, allowing it to be clickable
            onClick={() => goToSlide(i + startDotIndex)} // Navigate to the respective slide when the dot is clicked
          >
            {i + startDotIndex === currentSlide ? (
              // Conditionally render different dot styles based on whether it's the active slide or not
              isMobile ? (
                <MobileVolunteerActiveSlideDot /> // Render active dot for mobile view
              ) : (
                <DesctopVolunteerActiveSlideDot /> // Render active dot for desktop view
              )
            ) : isMobile ? (
              <MobileVolunteerOtherSlideDot /> // Render inactive dot for mobile view
            ) : (
              <DesctopVolunteerOtherSlideDot /> // Render inactive dot for desktop view
            )}
          </div>
        ))}
      </div>
    </section>
  );
}