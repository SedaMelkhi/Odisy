"use client";
import { useEffect, useRef, useState } from "react";
import { Container, MyButton, Product } from "./";
import { ProductsService } from "@/services";
import { ProductType } from "@/services/homePage";
import qs from "qs";
import { useParams } from "next/navigation";
import { Form } from "../cart";
import { cn } from "@/lib/utils";

export const SearchContent = () => {
  const [products, setProducts] = useState<ProductType[] | []>([]);
  const [isOpen, setIsOpen] = useState(false);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [isFound, setIsFound] = useState("");
  const params = useParams();
  const closeWindow = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      windowRef.current && // Убедимся, что windowRef.current не null
      e.target instanceof HTMLElement && // Проверяем, что e.target — это HTMLElement
      !windowRef.current.contains(e.target)
    )
      // Проверяем, что клик произошел за пределами windowRef.current)
      setIsOpen(false);
  };

  useEffect(() => {
    if (qs.parse(window.location.search.substring(1)).value) {
      const res = ProductsService.getProducts({
        search: qs.parse(window.location.search.substring(1)).value as string,
      });
      res.then((data) => {
        if (data.length > 0) {
          setProducts(data);
          setIsFound("fullfield");
        } else {
          setIsFound("error");
        }
      });
    } else {
      setProducts([]);
    }
  }, [params]);

  return (
    <Container border="none">
      <div
        className={cn(
          "hidden w-full h-[100vh] top-0 right-0 bg-bg-opacity z-10 items-center justify-center",
          isOpen && "fixed flex"
        )}
        onClick={closeWindow}
      >
        {isOpen ? (
          <div
            ref={windowRef}
            className="lg:w-1/2 rounded-2xl bg-no-repeat text-white-100 lg:mt-0 mt-2 bg-primary lg:bg-none bg-[url('/bg-umbrella.svg')] max-w-[755px]"
            style={{ backgroundPosition: "105% 120%" }}
          >
            <Form setIsOpen={setIsOpen} />
          </div>
        ) : (
          ""
        )}
      </div>
      {products.length > 0 && (
        <h1 className="pt-12 text-[48px] font-medium mb-8">
          Результаты поиска
        </h1>
      )}

      {isFound !== "error" && products.length > 0 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-2.5 w-full">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      ) : (
        isFound !== "error" && (
          <div className="text-[48px] font-medium text-secondary leading-[48px] pt-10 max-w-[600px]">
            <span className="text-primary">Напишите</span> в поисковике то что
            хотите <span className="text-accent">найти</span>
          </div>
        )
      )}
      {isFound === "error" && (
        <>
          <div className="text-[48px] font-medium leading-[48px] pt-10 max-w-[600px]">
            По вашему запросу ничего не найдено
          </div>
          <p className="text-secondary mt-4 mb-8">
            К сожалению этого товара нет, но вы можете утонить у менеджера
            способ его заказать
          </p>
          <div onClick={() => setIsOpen(true)} className="inline-block">
            <MyButton
              value="Оставить заявку"
              className="bg-accent text-white-100"
            />
          </div>
        </>
      )}
    </Container>
  );
};
