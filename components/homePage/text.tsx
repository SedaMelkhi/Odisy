"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

interface TextProps {
  text_orange: string;
  text_black?: string;
  desc?: string;
  className?: string;
}

export const Text: FC<TextProps> = ({
  text_orange,
  text_black,
  desc,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex lg:flex-row flex-col lg:gap-40 gap-4 pt-2.5",
        className
      )}
    >
      <div className="lg:w-[600px] sm:text-2rem text-2xl font-medium tracking-[-0.48px] sm:leading-9 leading-7">
        <span className="text-accent">{text_orange}</span> {text_black}
      </div>
      {desc && <div className="lg:w-[333px] text-secondary">{desc}</div>}
    </div>
  );
};
