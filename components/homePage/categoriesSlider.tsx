"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { CategoryType } from "@/services/homePage";

export const CategoriesSlider: FC<{ categories: CategoryType[] }> = ({
  categories,
}) => {
  return (
    <Swiper
      spaceBetween={8}
      className="mySwiper w-[full]"
      breakpoints={{
        0: {
          slidesPerView: "auto",
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      }}
    >
      {categories &&
        categories.map(({ id, name, image, subcategories }) => (
          <SwiperSlide
            key={id}
            className="lg:w-[373px!important] sm:w-[360px!important] w-[164px!important]"
          >
            <Link
              href={`/categories?subCatId=${
                subcategories && subcategories[0]?.id
              }`}
              style={{
                background: `url(${image || "not.png"}) center/cover no-repeat`,
              }}
              className="sm:pb-[132%] pb-[140%] rounded-2xl bg-[#eee] block"
            ></Link>
            <Link
              href={`/categories?subCatId=${
                subcategories && subcategories[0]?.id
              }`}
              className="mt-3 font-medium text-xl block"
            >
              {name}
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
