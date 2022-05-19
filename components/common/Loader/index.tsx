import React from "react";

export interface LoaderProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  label?: string;
}

const Loader = (props: LoaderProps) => {
  const { className, height = 24, width, color = "#588CB0", label } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${height} ${width}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
    >
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stopColor={color} stopOpacity="0" offset="0%" />
          <stop stopColor={color} stopOpacity=".631" offset="63.146%" />
          <stop stopColor={color} offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path
            d="M36 18c0-9.94-8.06-18-18-18"
            id="Oval-2"
            stroke={color}
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
          <circle fill="#fff" cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
};

export default Loader;
