"use client";
import { FC, useState } from "react";
import {
  Nav,
  Logo,
  CartBtn,
  SearchInput,
  Container,
  Menu,
  MobileMenu,
} from "./";
import { ButtonFeedback } from "./buttonFeedback";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import Link from "next/link";

export const Header: FC = () => {
  const [value, setValue] = useState("");
  const [accordionValue, setAccordionValue] = useState("");
  const closeMenuMob = () => {
    setAccordionValue("");
  };

  return (
    <div className="lg:pt-[86px] pt-14">
      <div className="w-full fixed top-0 z-10 bg-background">
        <Accordion type="single" collapsible value={accordionValue}>
          <AccordionItem value="mobmenu">
            <header className="border-b border-grey w-full">
              <Container border="none">
                <div className="lg:py-5 py-1.5 flex justify-between gap-10 items-center">
                  <Nav />
                  <Logo />
                  <div className="flex lg:gap-4 gap-2 justify-end items-center lg:flex-row flex-row-reverse">
                    <Menu setAccordionValue={setAccordionValue} />

                    <Link href={"#form"}>
                      <ButtonFeedback
                        value="Связаться с нами"
                        className="lg:block hidden"
                      />
                    </Link>
                    <SearchInput
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <CartBtn />
                  </div>
                </div>
              </Container>
            </header>
            <AccordionContent
              style={{ height: "calc(100vh - 56px)" }}
              className="AccordionContent"
            >
              <Container border="none">
                <MobileMenu closeMenuMob={closeMenuMob} />
              </Container>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
