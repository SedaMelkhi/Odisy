import { FC } from "react";

export const Close: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.4853 12.0009L3.51472 12.0009"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.51562L12 20.4862"
        stroke="#868686"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
