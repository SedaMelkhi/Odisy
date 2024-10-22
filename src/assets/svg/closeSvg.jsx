export const CloseSvg = ({ className }) => {
  return (
    <svg
      width="102"
      height="102"
      viewBox="0 0 102 102"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <rect
        x="0.5"
        y="0.5"
        width="101"
        height="101"
        rx="50.5"
        stroke="white"
        strokeOpacity="0.2"
      />
      <path
        d="M61 41L41 61"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M41 41L61 61"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
