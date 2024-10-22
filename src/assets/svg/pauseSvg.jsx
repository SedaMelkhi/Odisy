export const PauseSvg = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="-8 -8 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter0_b_126_121993)">
        <rect
          x="0.5"
          y="0.5"
          width="101"
          height="101"
          rx="50.5"
          stroke="white"
          strokeOpacity="0.2"
        />
        <rect
          x="41"
          y="35"
          width="2"
          height="30"
          fill="white"
          stroke="white"
          strokeLinecap="round"
        />
        <rect
          x="59"
          y="35"
          width="2"
          height="30"
          fill="white"
          stroke="white"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_126_121993"
          x="-70"
          y="-70"
          width="242"
          height="242"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="35" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_126_121993"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_126_121993"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
