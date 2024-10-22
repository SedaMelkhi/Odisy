"use client";
import { toNavigate } from "./categoriesAccordion";
import { useParams, useRouter } from "next/navigation";
import { CategoryType } from "@/services/homePage";
import { useEffect, useState } from "react";
import qs from "qs";

export const CategoryCard = ({ id, name, image }: CategoryType) => {
  const params = useParams();
  const router = useRouter();
  const [obj, setObj] = useState<{ subCatId: string } | null>(null);
  useEffect(() => {
    const temp = qs.parse(window.location.search.substring(1));
    setObj(temp as { subCatId: string });
  }, [params]);
  return (
    <div
      onClick={() =>
        obj?.subCatId
          ? router.push(`catalog/${id}?subCatId=${obj?.subCatId}`)
          : toNavigate(id)
      }
      key={id}
      className="w-full cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${image || "not.png"})`,
        }}
        className="pb-[140%] sm:min-h-[450px] min-h-[229px] rounded-2xl bg-light-grey bg-cover bg-center"
      ></div>
      <h3 className="mt-3 font-medium text-xl leading-4">{name}</h3>
    </div>
  );
};
