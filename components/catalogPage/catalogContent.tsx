"use client";
import { useEffect, useRef, useState } from "react";
import { ProductsService, ProductType } from "@/services/homePage";
import { CatalogItems } from "./catalogItems";
import { Product } from "../shared";
import { useParams } from "next/navigation";
import qs from "qs";

export const CatalogContent = ({ id }: { id: string }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const allParams = useParams();
  const productsContainerRef = useRef<HTMLDivElement | null>(null);
  const [nextPage, setNextPage] = useState(false);
  // Обработчик скролла с флагом
  const handleScroll = () => {
    if (
      productsContainerRef.current &&
      productsContainerRef.current.getBoundingClientRect().bottom <=
        window.innerHeight &&
      fetching
    ) {
      setFetching(false); // Отключаем дальнейшие запросы до завершения текущего
      setPage((prev) => prev + 1);
      getData(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  useEffect(() => {
    setPage(1);
    setIsLoad(false);
    setProducts([]);
    setFetching(true);
    window.scrollTo(0, 0);
    getData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allParams, id]);

  const getData = (page: number) => {
    const params = qs.parse(window.location.search.substring(1));
    ProductsService.getProducts({
      activeFilter: (params.type as string) || "",
      limit: 12,
      page: page,
      subcategory: id,
    }).then((res) => {
      setProducts((prev) => [...prev, ...res.data]);
      setIsLoad(true);
      if (!res.next) {
        setFetching(false); // Останавливаем запросы, если больше страниц нет
        setNextPage(false);
      } else {
        setFetching(true); // Разрешаем новые запросы
        setNextPage(true);
      }
    });
  };

  return (
    <div className="w-full lg:px-0 px-4" ref={productsContainerRef}>
      {isLoad ? (
        <CatalogItems products={products} />
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-2.5 w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Product key={item} />
          ))}
        </div>
      )}

      {/* Лоадер, который отображается при загрузке данных */}
      {!fetching && nextPage && (
        <div className="flex justify-center items-center mt-24">
          <div className="sm:w-24 sm:h-24 w-12 h-12 border-2 border-solid border-background border-t-accent border-r-accent  rounded-full animate-spin"></div>{" "}
          {/* Вставляем лоадер */}
        </div>
      )}
    </div>
  );
};
