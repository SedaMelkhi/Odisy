import { FC } from "react";
import { Button } from "../ui/button";

export const MyButton: FC<{
  value: string;
  className?: string;
}> = ({ value, className }) => {
  return (
    <Button
      className={`bg-white-100 text-accent rounded-2xl px-[43px] sm:py-5 py-3.5 text-xl h-auto leading-[14px] hover:bg-primary hover:text-white-100 transition-colors duration-200 font-medium ${
        className || ""
      }`}
    >
      {value}
    </Button>
  );
};
