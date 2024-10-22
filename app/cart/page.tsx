"use client";
import { CartItem, Empty, Form } from "@/components/cart";
import { CustomBreadcrumb } from "@/components/categoriesPage";
import { Container, MyButton } from "@/components/shared";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ProductType } from "@/services/homePage";
import { ProductService } from "@/services/productPage";
import { useCallback, useEffect, useRef, useState } from "react";

export type CartProductType = {
  data: ProductType | null;
  count: number;
};

export type CartType = {
  id: number | string;
  count: number;
};

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [isLoad, setIsLoad] = useState(false);
  const [allPrice, setAllPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | []>([]);
  const closeWindow = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      windowRef.current && // Убедимся, что windowRef.current не null
      e.target instanceof HTMLElement && // Проверяем, что e.target — это HTMLElement
      !windowRef.current.contains(e.target)
    )
      // Проверяем, что клик произошел за пределами windowRef.current)
      setIsOpen(false);
  };

  const fetchCartProducts = async (cart: CartType[]) => {
    const promises = cart.map(async (item) => {
      const data = await ProductService.getProduct(item.id as number);
      const cart: CartType[] | [] = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart") as string)
        : [];
      if (data) return { data, count: item.count };
      else {
        localStorage.setItem(
          "cart",
          JSON.stringify(cart.filter(({ id }) => item.id != id))
        );
        return { data, count: item.count };
      }
    });
    setIsLoad(false);
    // Ждем выполнения всех запросов
    const results: CartProductType[] = await Promise.all(promises);
    setIsLoad(true);

    setCartProducts(results);
  };

  const updateCartProducts = useCallback(() => {
    const cart: CartType[] | [] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") as string)
      : [];

    fetchCartProducts(cart);
  }, []);
  useEffect(() => {
    updateCartProducts();
    window.addEventListener("storage", updateCartProducts);
    return () => {
      window.removeEventListener("storage", updateCartProducts);
    };
  }, [updateCartProducts]);
  useEffect(() => {
    let price: number = 0;
    cartProducts.forEach(
      (item) => (price += item.data ? item.data.price * item.count : 0)
    );
    setAllPrice(price);
  }, [cartProducts]);

  return (
    <main>
      <Container className="lg:mt-10 sm:mt-6 mt-4" border="none">
        <div
          className={cn(
            "hidden w-full h-[100vh] top-0 right-0 bg-bg-opacity z-10 items-center justify-center px-4",
            isOpen && "fixed flex"
          )}
          onClick={closeWindow}
        >
          {isOpen ? (
            <div
              ref={windowRef}
              className="lg:w-1/2 rounded-2xl bg-no-repeat text-white-100 lg:mt-0 mt-2 bg-primary lg:bg-none bg-[url('/bg-umbrella.svg')] max-w-[755px] w-full"
              style={{ backgroundPosition: "105% 120%" }}
            >
              <Form setIsOpen={setIsOpen} />
            </div>
          ) : (
            ""
          )}
        </div>
        <CustomBreadcrumb
          items={[
            { id: 0, name: "Главная", link: "/" },
            { id: 1, name: "Корзина", link: "/cart" },
          ]}
        />
        <h1 className="sm:text-5xl text-4xl lg:mt-16 sm:mt-10 mt-8 font-medium tracking-[-2px]">
          Корзина
        </h1>
        <div className="sm:mt-5 mt-2 flex lg:flex-row flex-col lg:gap-2.5 sm:gap-20 gap-10">
          <div className="lg:w-[1147px]">
            {isLoad ? (
              cartProducts.length > 0 ? (
                cartProducts.map(
                  ({ data, count }) =>
                    data && (
                      <CartItem
                        name={data.name}
                        id={data.id}
                        image={data.primary_image}
                        price={data.price}
                        startCount={count}
                        key={data.id}
                        setCartProducts={setCartProducts}
                      />
                    )
                )
              ) : (
                <Empty />
              )
            ) : (
              [1, 2].map((item) => (
                <section
                  key={item}
                  className="relative border-t border-light-grey rounded-[18px] sm:p-5 p-2.5"
                >
                  <div className="flex gap-5">
                    <Skeleton className="bg-[#eee] rounded-2xl w-[108px] h-[151px] object-cover" />
                    <div className="w-full">
                      <Skeleton className="bg-[#eee] w-[70%] h-[32px] lg:text-2xl sm:text-xl text-base font-medium sm:mb-5 mb-2 tracking-[-1px] leading-5" />
                      <Skeleton className="bg-[#eee] w-[50%] lg:text-2xl h-[32px] sm:text-xl text-base text-accent font-medium mb-5 tracking-[-1px]" />
                    </div>
                  </div>
                </section>
              ))
            )}
          </div>
          {cartProducts.length > 0 ? (
            <div className="lg:w-[382px]">
              <div className="bg-white-100 rounded-2xl p-4 font-medium text-xl">
                <div className="mb-2">Итог</div>
                <div className="text-accent">{allPrice} ₽</div>
              </div>
              <div onClick={() => setIsOpen(true)}>
                <MyButton
                  value="Купить"
                  className="lg:h-32 h-[52px] bg-accent text-white-100 mt-1 w-full"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </main>
  );
};

export default Page;
