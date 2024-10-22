import { CategoriesListMob, CategoriesAccordion } from "./";
import { Container } from "../shared";
import { Text } from "../homePage";
import { cn } from "@/lib/utils";

export const CategoriesList = ({ className }: { className?: string }) => {
  return (
    <div className={cn("lg:w-[373px]", className)}>
      <Container>
        <CategoriesListMob />
        <Text
          text_orange="Категории товаров"
          className="mb-10 pt-0 lg:block hidden"
        />
        <div className="lg:block hidden">
          <CategoriesAccordion />
        </div>
      </Container>
    </div>
  );
};
