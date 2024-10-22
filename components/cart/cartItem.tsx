import Image from "next/image";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { ProductCount } from "../shared";
import { CartProductType, CartType } from "@/app/cart/page";

type CartItemProps = {
  image: string;
  name: string;
  price: number;
  id: number;
  startCount: number;
  setCartProducts: Dispatch<SetStateAction<[] | CartProductType[]>>;
};

export const CartItem: FC<CartItemProps> = ({
  image,
  name,
  price,
  startCount,
  id,
  setCartProducts,
}) => {
  const [count, setCount] = useState(startCount);
  const deleteProduct = () => {
    const cart: CartType[] | [] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") as string)
      : [];
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id != id))
    );
    setCartProducts((prev) => prev.filter((item) => item.data?.id != id));
    //window.dispatchEvent(new Event("storage"));
  };
  useEffect(() => {
    const cart: CartType[] | [] = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") as string)
      : [];
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((item) => (item.id === id ? { ...item, count } : item))
      )
    );
    setCartProducts((prev) =>
      prev.map((item) => (item.data?.id === id ? { ...item, count } : item))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, id]);

  return (
    <section className="relative border-t border-light-grey rounded-[18px] sm:p-5 p-2.5">
      <div className="flex gap-5">
        <Image
          src={image ? image : "/not.png"}
          width={108}
          height={151}
          alt=""
          className="rounded-2xl w-[108px] h-[151px] object-cover"
        />
        <div>
          <h2 className="sm:w-52 w-[70%] lg:text-2xl sm:text-xl text-base font-medium sm:mb-5 mb-2 tracking-[-1px] leading-5">
            {name}
          </h2>
          <p className="lg:text-2xl sm:text-xl text-base text-accent font-medium mb-5 tracking-[-1px]">
            {price} ₽
          </p>
        </div>
        <div
          className="absolute sm:top-5 top-2.5 sm:right-5 right-2.5 cursor-pointer"
          onClick={deleteProduct}
        >
          <Image src="/close2.svg" width={24} height={24} alt="x" />
        </div>
        <div className="absolute sm:bottom-5 bottom-2.5 sm:right-5 right-2.5">
          <ProductCount
            className="bg-white-100 sm:w-[195px] w-[120px]"
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
    </section>
  );
};
