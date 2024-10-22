"use client";

import { FC, useEffect, useState } from "react";
import { Filters, Product } from "../shared";
import { MyButton } from "../shared/button";
import { ProductsService, ProductType } from "@/services/homePage";
import { Skeleton } from "../ui/skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "next/navigation";
import qs from "qs";

import "swiper/css";

export const Products: FC = () => {
  const params = useParams();
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const getProducts = async (activeFilter: number) => {
    const data = await ProductsService.getProducts({ activeFilter, limit: 4 });
    setProducts(data.data);
  };
  useEffect(() => {
    const queryParams: { subCatId?: string; type?: string } = qs.parse(
      window.location.search.substring(1)
    );
    if (queryParams.type) getProducts(+queryParams.type);
    else toNavigate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const toNavigate = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("type", "0");
    window.history.pushState({ type: "0" }, "", currentUrl);
    getProducts(0);
  };

  return (
    <section className="lg:mt-10 mt-8 lg:px-10 px-4 pr-0 max-w-[1600px] m-auto">
      <Filters />
      <div className="mt-5">
        <Swiper
          spaceBetween={8}
          className="mySwiper w-full"
          breakpoints={{
            0: {
              slidesPerView: "auto",
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          }}
        >
          {products
            ? products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="lg:w-full sm:w-[360px!important] w-[180px!important]"
                >
                  <Product product={product} />
                </SwiperSlide>
              ))
            : [0, 1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                  <div>
                    <Skeleton className="h-[520px] bg-[#eee] sm:w-[360px!important] w-[180px!important] rounded-2xl" />
                    <Skeleton className="h-[134px] bg-[#eee] sm:w-[360px!important] w-[180px!important] rounded-2xl mt-2.5 mb-3" />
                    <Skeleton className="h-[52px] bg-[#eee] sm:w-[360px!important] w-[180px!important] rounded-2xl" />
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      <div className="lg:pr-0 pr-4">
        <MyButton
          value="Смотреть"
          className="w-[100%] lg:mt-12 sm:mt-8 mt-4 bg-accent text-white-100 sm:block hidden"
        />
      </div>
    </section>
  );
};
