import { FC } from "react";

export const Search: FC<{ className?: string }> = ({ className }) => {
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
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#868686"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lg:stroke-1 stroke-2 lg:stroke-secondary stroke-primary"
      />
      <path
        d="M20.9984 20.9984L16.6484 16.6484"
        strokeWidth={1}
        stroke="#868686"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lg:stroke-1 stroke-2 lg:stroke-secondary stroke-primary"
      />
    </svg>
  );
};
