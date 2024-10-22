import { FC } from "react";

export const RightArrowCircle: FC = () => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="white"
      className="transition-colors duration-200 cursor-pointer hover:fill-accent group"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width="51.5"
        height="51.5"
        rx="25.75"
        stroke="#D9D9D9"
        strokeWidth="0.5"
        className="group-hover:stroke-accent"
      />
      <path
        d="M23.75 30.5L28.25 26L23.75 21.5"
        stroke="#0C0C0C"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        className="group-hover:stroke-white-100"
      />
    </svg>
  );
};
