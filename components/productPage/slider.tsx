"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";

export const Slider = ({
  images,
}: {
  images:
    | {
        image: string;
        is_primary: boolean;
      }[]
    | [];
}) => {
  return (
    <div className="relative lg:pl-0 pl-4">
      {images.length > 1 ? (
        <>
          <Swiper
            spaceBetween={4}
            slidesPerView={1.6}
            modules={[Navigation]}
            navigation={{ prevEl: ".product-prev", nextEl: ".product-next" }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              640: {
                slidesPerView: 1.6,
              },
            }}
          >
            {images.map(({ image }, i) => (
              <SwiperSlide
                className="xl:w-[54%!important] lg:w-[65%!important] w-[80%!important]"
                key={image + i}
              >
                <Image
                  src={image}
                  width={538}
                  height={683}
                  alt=""
                  className="rounded-2xl w-full sm:h-[683px] h-[297px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute left-10 bottom-10 lg:flex z-10 cursor-pointer hidden">
            <div className="product-prev w-[38px] h-11 rounded-l-3xl bg-white-100 flex items-center justify-center pl-1.5">
              <IoIosArrowBack className="h-6 w-6" />
            </div>
            <div className="product-next w-[38px] h-11 rounded-r-3xl bg-white-100 flex items-center justify-center pr-1.5">
              <IoIosArrowForward className="h-6 w-6" />
            </div>
          </div>
          <div className="lg:block hidden absolute right-0 top-0 z-10 h-full w-36 bg-gradient-to-r from-white-5 to-white-90"></div>
        </>
      ) : (
        <div className="flex gap-1">
          <Image
            src={images[0] && images[0].image ? images[0].image : "/not.png"}
            width={538}
            height={683}
            alt=""
            className="rounded-2xl w-[59%] sm:h-[683px] h-[297px] object-cover"
          />
          <Image
            src={"/not.png"}
            width={538}
            height={683}
            alt=""
            className="rounded-2xl w-[40%] sm:h-[683px] h-[297px] object-cover"
          />
        </div>
      )}
    </div>
  );
};
