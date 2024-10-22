import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { FC } from "react";

export const ButtonFeedback: FC<{ value: string; className: string }> = ({
  value,
  className,
}) => {
  return (
    <Button
      className={cn(
        "bg-accent text-white-100 rounded-2xl px-8 hover:bg-primary duration-300 transition-colors cursor-pointer",
        className
      )}
    >
      {value}
    </Button>
  );
};
