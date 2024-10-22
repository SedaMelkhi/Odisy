"use client";

import { CategoriesService, CategoryType } from "@/services/homePage";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { CategoryItems } from ".";
import { Skeleton } from "../ui/skeleton";
import qs from "qs";

export const CategoryContent: FC = () => {
  const allParams = useParams();
  const [isLoad, setIsLoad] = useState(false);
  const [categoryItems, setCategoryItems] = useState<CategoryType[] | []>([]);

  useEffect(() => {
    const params = qs.parse(window.location.search.substring(1));
    setIsLoad(false);
    if (params.subCatId) {
      const res = CategoriesService.getSecondSubCategories(
        params.subCatId + ""
      );
      res.then((data) => {
        setIsLoad(true);
        setCategoryItems(data ? data.data : []);
      });
    } else {
      const res = CategoriesService.getCategories();
      res.then((data) => {
        setIsLoad(true);
        setCategoryItems(data);
      });
    }
  }, [allParams]);

  return (
    <div className="w-full lg:px-0 px-4">
      {isLoad ? (
        <CategoryItems items={categoryItems} />
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-5 gap-x-2.5 w-full">
          {[1, 2, 3].map((i) => (
            <Skeleton
              className="sm:h-[520px] bg-[#eee] h-[240px] rounded-2xl"
              key={i}
            />
          ))}
        </div>
      )}
    </div>
  );
};
