"use client";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import qs from "qs";
import { cn } from "@/lib/utils";

export const Filters: FC<{ className?: string }> = ({ className }) => {
  const params = useParams();
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const filters = [
    {
      value: "Хиты продаж",
      id: 0,
    },
    {
      value: "Новые поступления",
      id: 1,
    },
    {
      value: "Акции",
      id: 2,
    },
  ];
  const toNavigate = (id: number) => {
    const currentUrl = new URL(window.location.href);
    if (id == activeFilter) {
      setActiveFilter(null);
      currentUrl.searchParams.delete("type");
      window.history.pushState({}, "", currentUrl);
      return "";
    }
    currentUrl.searchParams.set("type", id + "");
    window.history.pushState({ type: id + "" }, "", currentUrl);
    setActiveFilter(id);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const parsedParams: { subCatId?: string; type?: string } = qs.parse(
        window.location.search.substring(1)
      );
      setActiveFilter(parsedParams.type ? +parsedParams.type : null);
    }
  }, [params]);
  return (
    <div className={cn("flex gap-3", className)}>
      {filters.map(({ value, id }) => (
        <div
          key={id}
          onClick={() => toNavigate(id)}
          className={`py-2 px-5 rounded-xl cursor-pointer border hover:bg-accent hover:text-white-100 hover:border-accent duration-200 transition-colors  ${
            activeFilter === id
              ? "bg-accent text-white-100 border-accent"
              : "border-light-grey text-secondary"
          } ${id === 2 ? "sm:block hidden" : ""}`}
        >
          {value.split(" ").map((item, i) => (
            <span
              key={i}
              className={`${
                i === 1 && id === 1
                  ? "390:inline hidden"
                  : i === 1 && id === 0
                  ? "310:inline hidden"
                  : ""
              }`}
            >
              {item}
              {i === 0 && " "}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
