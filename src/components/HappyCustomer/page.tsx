"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import HappyCustomerCard from "./HappyCustomerCard";
import { HappyCustomerData } from "@/staticData/AllStaticData";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../../../public/assets/images/rightArrow.svg";
import prevArrow from "../../../public/assets/images/leftarrow.svg";

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="bg-secondary rounded-full p-2 hover:bg-gray-300" onClick={onClick}>
    <Image src={nextArrow} alt="Next Arrow" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="bg-secondary rounded-full p-2 hover:bg-gray-300" onClick={onClick}>
    <Image src={prevArrow} alt="Previous Arrow" />
  </button>
);

const HappyCustomerSection = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "90px",
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="mx-auto my-16 w-full">
      <div className="px-4 md:px-24 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-5xl text-primary dark:text-white  font-black text-center md:text-left">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-4 mt-4 md:mt-0">
          <PrevArrow onClick={handlePrev} />
          <NextArrow onClick={handleNext} />
        </div>
      </div>

      <div className="mt-10 px-4 md:px-10">
        <Slider ref={sliderRef} {...settings}>
          {HappyCustomerData.map((review, index) => (
            <div
              key={review.id}
              className={`flex justify-center transition-transform duration-300 ${
                index === currentSlide ? "scale-100" : "scale-90 opacity-80"
              }`}
            >
              <HappyCustomerCard
                id={review.id}
                rating={review.rating}
                title={review.title}
                desc={review.desc}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HappyCustomerSection;
