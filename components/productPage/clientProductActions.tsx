"use client";

import { FC, useState } from "react";
import { MyButton } from "@/components/shared/button";

interface ClientProductActionsProps {
  id: number | string;
}

export const addProductToCart = (
  setValue: (value: string) => void,
  id: number | string,
  count?: number
) => {
  const data = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [];
  if (!data.some((item: { id: number }) => item.id == id)) {
    localStorage.setItem(
      "cart",
      JSON.stringify([...data, { id, count: count || 1 }])
    );
    window.dispatchEvent(new Event("storage"));
  }
  setValue("Добавлен");
};

export const ClientProductActions: FC<ClientProductActionsProps> = ({ id }) => {
  const [value, setValue] = useState("Купить");

  return (
    <div
      className="lg:px-0 px-4"
      onClick={() => addProductToCart(setValue, id)}
    >
      <MyButton value={value} className="bg-accent w-full text-white-100" />
    </div>
  );
};
