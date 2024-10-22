"use client";
import { CategoriesService, CategoryType } from "@/services/homePage";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const [isLoad, setIsLoad] = useState(false);
  const getData = async () => {
    setIsLoad(false);
    const res = await CategoriesService.getCategories(true);
    setCategories(res);
    setIsLoad(true);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-x-2.5 sm:mt-2.5 mt-4">
      <div className="grid lg:col-span-4 col-span-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-x-2.5 sm:gap-4 gap-1">
        {isLoad &&
          categories.map(({ id, name, icon, subcategories }) => (
            <Link
              href={`/categories?subCatId=${
                subcategories[0] && subcategories[0]?.id
              }`}
              key={id}
              className="col-span-1 group min-h-32 border border-light-grey rounded-2xl text-xl hover:bg-primary hover:text-white-100 transition-colors duration-200 px-4 py-2"
            >
              <div className="h-full flex justify-center items-center xl:gap-4 lg:gap-2 gap-4 xl:flex-row lg:flex-col m-auto">
                <div className="border border-accent rounded-full p-4 group-hover:border-white-100 group-hover:bg-white-100 transition-colors duration-200 w-16 h-16 flex-shrink-0">
                  <Image
                    src={icon || "icon.svg"}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 height-auto"
                  />
                </div>
                <div className="w-32 text-center">{name}</div>
              </div>
            </Link>
          ))}
        {!isLoad && (
          <>
            <Skeleton className="col-span-1 bg-[#eee] h-32 rounded-2xl" />
            <Skeleton className="col-span-1 bg-[#eee] h-32 rounded-2xl" />
            <Skeleton className="col-span-1 bg-[#eee] h-32 rounded-2xl" />
            <Skeleton className="col-span-1 bg-[#eee] h-32 rounded-2xl" />
          </>
        )}
      </div>
      <Link
        href={"/categories"}
        className="flex justify-center items-center shrink-0 bg-accent rounded-2xl text-white-100 lg:h-full h-[52px] text-xl hover:bg-primary transition-colors duration-200 lg:col-span-1 sm:col-span-2 col-span-1 lg:mt-0 mt-4"
      >
        Полный каталог
      </Link>
    </section>
  );
};
