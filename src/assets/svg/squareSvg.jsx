export const SquareSvg = ({ className }) => {
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
        d="M24 1H4C2.34315 1 1 2.34315 1 4V24"
        stroke="url(#paint0_linear_133_49)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_133_49"
          x1="-7.5"
          y1="-7"
          x2="44"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
