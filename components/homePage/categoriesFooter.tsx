import { FC } from "react";
import { MyButton } from "../shared/button";
import { CategoriesService, CategoryType } from "@/services/homePage";
import { CategoriesSlider } from "./categoriesSlider";
import Link from "next/link";

export const CategoriesFooter: FC = async () => {
  const categories: CategoryType[] = await CategoriesService.getCategories(
    true
  );

  return (
    <section className="lg:px-10 px-4 pr-0 max-w-[1600px] m-auto mt-10">
      <CategoriesSlider categories={categories} />
      <div className="lg:pr-0 pr-4">
        <Link href={"categories"}>
          <MyButton
            value="Смотреть"
            className="w-full bg-accent text-white-100 mt-12"
          />
        </Link>
      </div>
    </section>
  );
};
