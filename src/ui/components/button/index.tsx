import React from "react";
import ReactTooltip from "react-tooltip";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  tooltip?: string;
}

export const Button = ({
  variant = "main",
  tooltip = "",
  className,
  children,
  ...rest
}: ButtonProps) => (
  <button
    className={`${className} flex-shrink-0 px-4 py-2 text-base font-main font-semibold text-white bg-${variant} dark:bg-opacity-70 hover:bg-opacity-70 disabled:opacity-50 disabled:bg-${variant} rounded-lg shadow-md dark:hover:bg-${variant} focus:outline-none`}
    {...rest}
    data-tip={tooltip}
  >
    {children}
    {tooltip !== "" && (
      <>
        <ReactTooltip />
      </>
    )}
  </button>
);
