import { cn } from "../../lib/utils";
import { FC, ReactNode } from "react";

export const Container: FC<{
  children: ReactNode;
  className?: string;
  border?: string;
  height?: string;
}> = ({ children, className, border, height }) => {
  return (
    <div className={cn("lg:px-0 px-1.5", height)}>
      <div
        className={cn(
          border === "none"
            ? ""
            : "border-t border-light-grey rounded-[18px] lg:pt-5 pt-2.5",
          "lg:px-5 px-2.5 max-w-[1560px] mx-auto",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
