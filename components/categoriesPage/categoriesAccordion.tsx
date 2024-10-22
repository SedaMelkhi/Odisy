"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Close } from "@/components/svg";
import { useParams, usePathname, useRouter } from "next/navigation";
import { CategoriesService, CategoryType } from "@/services/homePage";
import { Skeleton } from "../ui/skeleton";
import qs from "qs";

export const toNavigate = (id: number) => {
  const currentUrl = new URL(window.location.origin + "/categories");
  currentUrl.searchParams.set("subCatId", id.toString());
  // Обновляем URL без перезагрузки страницы
  window.history.pushState(
    { subCatId: id }, // объект состояния, который можно будет использовать позже
    "", // заголовок (можно оставить пустым)
    currentUrl // обновленный URL
  );
};

export const CategoriesAccordion = () => {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const pathName = usePathname();
  const [isLoad, setIsLoad] = useState(false);
  const searchParams = useParams();
  const params = useParams();
  const [activeSubcat, setActiveSubcat] = useState(0);
  const [activeCatId, setActiveCatId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsLoad(false);
    CategoriesService.getCategories().then((res) => {
      setCategories(res);
      setIsLoad(true);
    });
  }, []);

  useEffect(() => {
    const obj = qs.parse(window.location.search.substring(1));
    setActiveSubcat(Number(obj.subCatId || 0));
    if (!obj.subCatId && !params.id) {
      setActiveSubcat(0);
    }
  }, [searchParams, params]);

  const findActiveCatId = () => {
    return categories.filter(
      ({ subcategories }) =>
        subcategories && subcategories.some(({ id }) => id == activeSubcat)
    )[0]?.id;
  };
  useEffect(() => {
    setActiveCatId(findActiveCatId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSubcat, categories]);

  return isLoad ? (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={`item-${activeCatId}`}
    >
      {categories.map(({ name, id, subcategories }) => (
        <AccordionItem value={`item-${id}`} key={id} className="border-none">
          <AccordionTrigger
            className="sm:text-2xl text-xl font-medium tracking-[-0.48px] text-secondary sm:mb-7 mb-5 [&[data-state=open]>svg]:rotate-45 hover:no-underline p-0 [&[data-state=open]]:text-primary [&[data-state=open]>svg>path]:stroke-accent"
            onClick={() =>
              activeCatId === id ? setActiveCatId(0) : setActiveCatId(id)
            }
          >
            <div className="leading-6">{name}</div>
            <Close className="w-auto h-auto transition-all duration-200 [&+svg]:hidden" />
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            {subcategories &&
              subcategories.map(({ id, name }) => (
                <div
                  onClick={() =>
                    pathName.substring(1, 8) === "catalog"
                      ? router.push(`/categories?subCatId=${id}`)
                      : toNavigate(id)
                  }
                  key={id}
                  className={`block text-xl hover:text-accent duration-200 transition-colors mb-5 cursor-pointer ${
                    id === activeSubcat ? "text-accent" : "text-secondary"
                  }`}
                >
                  {name}
                </div>
              ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <div className="w-full">
      <Skeleton className="bg-[#eee] sm:mb-7 mb-5 h-[38px] w-full"></Skeleton>
      <Skeleton className="bg-[#eee] sm:mb-7 mb-5 h-[38px] w-full"></Skeleton>
      <Skeleton className="bg-[#eee] sm:mb-7 mb-5 h-[38px] w-full"></Skeleton>
    </div>
  );
};
