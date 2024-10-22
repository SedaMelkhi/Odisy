import { FC } from "react";

export const Cart: FC = () => {
  return (
    <svg
      width="43"
      height="44"
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <rect
        x="0.5"
        y="1"
        width="42"
        height="42"
        rx="21"
        stroke="#D9D9D9"
        className="lg:block hidden group-hover:stroke-accent"
      />
      <path
        d="M10 10.5H14.1818L16.9836 25.1652C17.0792 25.6695 17.3411 26.1224 17.7233 26.4448C18.1056 26.7672 18.5839 26.9384 19.0745 26.9286H29.2364C29.727 26.9384 30.2053 26.7672 30.5876 26.4448C30.9698 26.1224 31.2317 25.6695 31.3273 25.1652L33 15.9762H15.2273M30.9091 32.4048C30.9091 33.0096 30.441 33.5 29.8636 33.5C29.2862 33.5 28.8182 33.0096 28.8182 32.4048C28.8182 31.7999 29.2862 31.3095 29.8636 31.3095C30.441 31.3095 30.9091 31.7999 30.9091 32.4048ZM19.4091 32.4048C19.4091 33.0096 18.941 33.5 18.3636 33.5C17.7862 33.5 17.3182 33.0096 17.3182 32.4048C17.3182 31.7999 17.7862 31.3095 18.3636 31.3095C18.941 31.3095 19.4091 31.7999 19.4091 32.4048Z"
        stroke="#868686"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        className="lg:stroke-secondary lg:stroke-1 stroke-2 stroke-primary group-hover:stroke-white-100 group-hover:stroke-2 duration-100 transition-colors"
      />
    </svg>
  );
};
