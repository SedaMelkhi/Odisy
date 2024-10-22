import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Dispatch, FC, SetStateAction } from "react";

type MenuProps = { setAccordionValue: Dispatch<SetStateAction<string>> };

export const Menu: FC<MenuProps> = ({ setAccordionValue }) => {
  return (
    <AccordionTrigger className="AccordionTrigger">
      <div
        className="menu lg:hidden flex flex-col gap-1.5 cursor-pointer lg:pl-0 pl-2"
        onClick={() =>
          setAccordionValue((prev) => (prev === "" ? "mobmenu" : ""))
        }
      >
        <div className="bg-primary w-[24px] h-[2px] transition-transform duration-150"></div>
        <div className="bg-primary w-[24px] h-[2px] transition-opacity duration-150"></div>
        <div className="bg-primary w-[24px] h-[2px] transition-transform duration-150"></div>
      </div>
    </AccordionTrigger>
  );
};
