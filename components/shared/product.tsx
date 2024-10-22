"use client";
import { FC, useState } from "react";
import { MyButton } from "./button";
import { ProductType } from "@/services/homePage";
import { ProductCount } from "./productCount";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { addProductToCart } from "../productPage/clientProductActions";

export const Product: FC<{ product?: ProductType }> = ({ product }) => {
  const [value, setValue] = useState("Купить");
  const [count, setCount] = useState(1);
  return product ? (
    <div className="w-full">
      <Link href={`/product/${product.id}`}>
        <div
          className="sm:h-[520px] h-[240px] bg-cover bg-no-repeat bg-[url('/not.png')] bg-center rounded-2xl"
          style={{
            backgroundImage: `url(${product.primary_image || "/not.png"})`,
          }}
        ></div>
      </Link>

      <div className="bg-white-100 p-4 rounded-2xl sm:mt-2.5 mt-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="sm:text-xl text-sm  font-medium sm:mb-2 mb-1 sm:leading-[22px] leading-3">
            {product.name}
          </h3>
        </Link>

        <div className="flex gap-2 items-center sm:mb-4 mb-3">
          <div className="text-secondary font-medium sm:text-base text-sm">
            {product.price} ₽
          </div>
          {product.old_price && (
            <div className="text-secondary font-medium text-sm relative">
              {product.old_price} ₽
              <div className="border border-secondary absolute top-[9px] w-full"></div>
            </div>
          )}
        </div>

        <ProductCount count={count} setCount={setCount} />
      </div>
      <div onClick={() => addProductToCart(setValue, product.id, count)}>
        <MyButton
          value={value}
          className="sm:mt-3 mt-1 w-[100%] text-base font-medium"
        />
      </div>
    </div>
  ) : (
    <div className="w-full">
      <Skeleton className="sm:h-[520px] bg-[#eee] h-[240px] rounded-2xl" />
      <Skeleton className="h-[90px] bg-[#eee] rounded-2xl sm:mt-2.5 mt-1" />
      <Skeleton className="h-[52px] bg-[#eee] rounded-2xl sm:mt-3 mt-1" />
    </div>
  );
};
