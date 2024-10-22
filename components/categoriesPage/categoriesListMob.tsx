import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CategoriesAccordion } from "./categoriesAccordion";
import { Text } from "../homePage";

export const CategoriesListMob = () => {
  return (
    <Accordion type="single" collapsible className="w-full lg:hidden block">
      <AccordionItem value="item-category" className="border-none">
        <AccordionTrigger className="p-0 hover:no-underline mb-8 mt-2.5">
          <Text
            text_orange="Категории товаров"
            className="pt-0 lg:hidden block [&+svg]:scale-150"
          />
        </AccordionTrigger>
        <div className="lg:px-5 max-w-[1560px] mx-auto">
          <AccordionContent>
            <CategoriesAccordion />
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};
