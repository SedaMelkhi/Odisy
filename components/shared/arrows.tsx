import { FC } from "react";
import { LeftArrowCircle, RightArrowCircle } from "../svg";
import { Container } from "./сontainer";

type ArrowsProps = {
  prev: string;
  next: string;
};

export const Arrows: FC<ArrowsProps> = ({ prev, next }) => {
  return (
    <Container border="none">
      <div className="lg:flex hidden gap-40 mt-20 mb-5">
        <div className="w-[600px]"></div>
        <div className="w-[333px] flex gap-2">
          <div className={prev}>
            <LeftArrowCircle />
          </div>
          <div className={next}>
            <RightArrowCircle />
          </div>
        </div>
      </div>
    </Container>
  );
};
