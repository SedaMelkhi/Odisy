import { CategoryType } from "@/services/homePage";
import { FC } from "react";
import { CategoryCard } from "./categoryCard";
import { NotFoundData } from "./notFoundData";

export const CategoryItems: FC<{ items: CategoryType[] }> = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-2.5 w-full">
      {items && items.length > 0 ? (
        items.map((item) => <CategoryCard {...item} key={item.id} />)
      ) : (
        <NotFoundData />
      )}
    </div>
  );
};
