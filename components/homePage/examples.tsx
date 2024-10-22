"use client";
import { FC, useEffect, useRef } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ExampleType } from "@/services/homePage";

import { Arrows } from "../shared";

import "swiper/css";

export const Examples: FC<{ examples: ExampleType[] | null }> = ({
  examples,
}) => {
  const swiperRef = useRef<SwiperCore | null>(null); // Создаем реф для Swiper
  useEffect(() => {
    if (swiperRef.current) {
      // Листаем на один слайд при инициализации
      swiperRef.current.slideNext();
    }
  }, []);
  return (
    <div className="overflow-hidden examples sm:mt-0 mt-8">
      <Arrows prev={"left"} next={"right"} />

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
          nextEl: ".right", // Связываем кастомную кнопку "Next"
          prevEl: ".left", // Связываем кастомную кнопку "Prev"
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
        {examples &&
          examples.map(
            ({ id, url }) =>
              url && (
                <SwiperSlide
                  key={id}
                  className="slide lg:h-[500px!important] sm:h-[300px!important] h-[180px!important]"
                >
                  {({ isActive }) => (
                    <div
                      className={`bg-cover bg-center rounded-2xl h-full  ${
                        !isActive ? "sm:blur-[.7px]" : ""
                      }`}
                      style={{
                        backgroundImage: `url(${url})`,
                      }}
                    >
                      <div
                        className="h-full rounded-2xl"
                        style={{
                          background: !isActive
                            ? `sm:linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)`
                            : "none",
                        }}
                      ></div>
                    </div>
                  )}
                </SwiperSlide>
              )
          )}
      </Swiper>
    </div>
  );
};
