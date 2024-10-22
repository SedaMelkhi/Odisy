"use client";
import { FC, useEffect, useRef } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReviewType } from "@/app/page";

import { Arrows } from "../shared";

import "swiper/css";

export const Reviews: FC<{ reviews: ReviewType[] | null }> = ({ reviews }) => {
  const swiperRef = useRef<SwiperCore | null>(null); // Создаем реф для Swiper

  useEffect(() => {
    if (swiperRef.current) {
      // Листаем на один слайд при инициализации
      swiperRef.current.slideNext();
    }
  }, []);

  return (
    <div className="overflow-hidden reviews lg:mt-0 mt-10">
      <Arrows prev={"prev"} next={"next"} />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2.45}
        freeMode={true}
        slidesPerGroup={1}
        centeredSlides={true}
        modules={[Navigation]}
        spaceBetween={10}
        className="mySwiper"
        navigation={{
          nextEl: ".prev", // Связываем кастомную кнопку "Next"
          prevEl: ".next", // Связываем кастомную кнопку "Prev"
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 2.45,
            spaceBetween: 10,
          },
        }}
      >
        {reviews &&
          reviews.map(({ id, image, name, text }, item) => (
            <SwiperSlide key={id}>
              <div
                className={`flex lg:gap-10 gap-4 lg:justify-between lg:flex-row flex-col bg-white-100 lg:p-8 p-4 rounded-2xl h-[100%!important] min-h-[222px]`}
              >
                <div className="flex lg:flex-col flex-row justify-between">
                  <div
                    className="rounded-full lg:w-24 w-20 lg:h-24 h-20 bg-center bg-cover"
                    style={{ backgroundImage: `url(${image || "/no.png"})` }}
                  ></div>
                  <div className="lg:text-base text-xs">
                    {item + 1}/{reviews.length}
                  </div>
                </div>
                <div className="lg:w-[535px] flex flex-col flex-auto justify-between">
                  <p className="lg:font-medium lg:text-2xl text-[14px] lg:leading-[25px] leading-4 lg:mb-6 mb-4">
                    {text}
                  </p>
                  <div className="lg:text-base text-xs text-secondary">
                    {name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
