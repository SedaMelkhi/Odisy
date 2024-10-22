import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

export const Telegram: FC<{ type?: string; className?: string }> = ({
  type,
  className,
}) => {
  return (
    <Link href="https://t.me/JEMMES_GM">
      <svg
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("group cursor-pointer", className)}
      >
        <rect
          x="0.75"
          y="0.25"
          width="59.5"
          height="59.5"
          rx="29.75"
          stroke={"#D9D9D9"}
          strokeWidth="0.5"
        />
        <path
          d="M30.5 15C38.7846 15 45.5 21.7154 45.5 30C45.5 38.2846 38.7846 45 30.5 45C22.2154 45 15.5 38.2846 15.5 30C15.5 21.7154 22.2154 15 30.5 15ZM35.6743 36.1141C35.9502 35.2676 37.2428 26.8311 37.4026 25.1687C37.4509 24.6652 37.2917 24.3307 36.98 24.1813C36.603 24 36.0448 24.0907 35.3972 24.3241C34.5089 24.6443 23.1533 29.4659 22.4972 29.745C21.875 30.0091 21.2867 30.2974 21.2867 30.7148C21.2867 31.0083 21.4609 31.1733 21.9409 31.3448C22.4404 31.5228 23.6985 31.9043 24.4413 32.1091C25.1567 32.3067 25.9713 32.1352 26.4278 31.8515C26.9117 31.5509 32.4963 27.8139 32.8974 27.4865C33.2978 27.1591 33.6174 27.5785 33.29 27.9065C32.9626 28.2339 29.1291 31.9546 28.6237 32.4698C28.01 33.0952 28.4457 33.7435 28.8572 34.003C29.3274 34.2991 32.7089 36.5674 33.2183 36.9313C33.7276 37.2952 34.2441 37.4602 34.717 37.4602C35.1898 37.4602 35.4389 36.8374 35.6743 36.1141Z"
          fill={type === "black" ? "#0c0c0c" : "white"}
          className={cn(
            type === "black" || type === "orange"
              ? "group-hover:fill-accent"
              : "group-hover:fill-primary",
            "duration-200 transition-colors"
          )}
        />
      </svg>
    </Link>
  );
};
