"use client";

import { ServiceType } from "@/app/page";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";

export const ServicesMobile: FC<{ services: ServiceType[] }> = ({
  services,
}) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={1.2}
      className="mySwiper block sm:hidden "
    >
      {services.map(({ id, title, text, image }) => (
        <SwiperSlide key={id} className="sm:space-x-1 flex-auto">
          <div className="sm:block flex flex-col">
            <div
              className="rounded-2xl sm:pb-[100%] sm:h-auto h-[208px] group p-1 relative group sm:cursor-pointer"
              style={{
                background: `url(${image || "/no.png"}) center/cover no-repeat`,
              }}
            >
              <div
                className="sm:block hidden px-6 rounded-md absolute bg-white-30 backdrop-blur-[22px] bottom-1 overflow-hidden min-h-16"
                style={{ width: "calc(100% - 8px)" }}
              >
                <h3 className="flex items-center min-h-16 lg:text-2xl text-xl text-white-100 font-medium leading-6 tracking-[-0.48px]">
                  {title}
                </h3>
                <p className="mb-[-100%] overflow-hidden group-hover:mb-0 transition-all duration-200 pb-4 leading-[18px] text-white-100">
                  {text}
                </p>
              </div>
            </div>
            <div className="sm:hidden block flex-auto bg-white-100 rounded-2xl p-4 mt-1">
              <h3 className="font-medium leading-[18px] tracking-[-0.32px] mb-2">
                {title}
              </h3>
              <p className="text-xs text-secondary leading-[14px]">{text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
