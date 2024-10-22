import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

export const Inst: FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="https://www.instagram.com/jemmes_garden?igsh=Y2dkMzNvM25vMW1m">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("group cursor-pointer", className)}
      >
        <rect
          x="0.25"
          y="0.25"
          width="59.5"
          height="59.5"
          rx="29.75"
          stroke="#D9D9D9"
          strokeWidth="0.5"
        />
        <path
          d="M23.8636 15C18.975 15 15 18.975 15 23.8636V36.1364C15 41.025 18.975 45 23.8636 45H36.1364C41.025 45 45 41.025 45 36.1364V23.8636C45 18.975 41.025 15 36.1364 15H23.8636ZM38.1818 20.4545C38.9318 20.4545 39.5455 21.0682 39.5455 21.8182C39.5455 22.5682 38.9318 23.1818 38.1818 23.1818C37.4318 23.1818 36.8182 22.5682 36.8182 21.8182C36.8182 21.0682 37.4318 20.4545 38.1818 20.4545ZM30 22.5C34.1386 22.5 37.5 25.8614 37.5 30C37.5 34.1386 34.1386 37.5 30 37.5C25.8614 37.5 22.5 34.1386 22.5 30C22.5 25.8614 25.8614 22.5 30 22.5ZM30 23.8636C26.6182 23.8636 23.8636 26.6182 23.8636 30C23.8636 33.3818 26.6182 36.1364 30 36.1364C33.3818 36.1364 36.1364 33.3818 36.1364 30C36.1364 26.6182 33.3818 23.8636 30 23.8636Z"
          fill="#0C0C0C"
          className="group-hover:fill-accent duration-200 transition-colors"
        />
      </svg>
    </Link>
  );
};
