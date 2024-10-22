"use client";
import Link from "next/link";
import { Cart } from "../svg";
import { useEffect, useState } from "react";

export const CartBtn = () => {
  const [cartCount, setCartCount] = useState(0);
  const updateCartCount = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") as string)
      : [];
    setCartCount(cart.length);
  };
  useEffect(() => {
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);
  return (
    <Link
      href="/cart"
      className="w-11 h-11 rounded-full flex align-center justify-center cursor-pointer hover:bg-accent relative"
    >
      {cartCount > 0 && (
        <div className="h-4 w-4 rounded-2xl bg-black absolute top-[-4px] left-[-4px] flex items-center justify-center">
          <span className="text-white-100 font-medium text-[10px]">
            {cartCount}
          </span>
        </div>
      )}
      <Cart />
    </Link>
  );
};
