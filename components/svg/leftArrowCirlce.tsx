import { FC } from "react";

export const LeftArrowCircle: FC = () => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="white"
      className="transition-colors duration-200 cursor-pointer hover:fill-accent group"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Обводка SVG */}
      <rect
        x="0.25"
        y="0.25"
        width="51.5"
        height="51.5"
        rx="25.75"
        stroke="#D9D9D9"
        strokeWidth="0.5"
        className="group-hover:stroke-accent" // Изменение цвета обводки при ховере
      />
      {/* Стрелка */}
      <path
        d="M28.25 30.5L23.75 26L28.25 21.5"
        stroke="#0C0C0C"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        className="group-hover:stroke-white-100" // Изменение цвета стрелки при ховере
      />
    </svg>
  );
};
