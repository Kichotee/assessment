import React from "react";
import { ButtonProps } from "@/types";
import classNames from "../../utils/classname";

// eslint-disable-next-line consistent-return
const variantFn = (variantStyle = "") => {
  switch (variantStyle) {
    case "outlined":
      return " border-brand-primary rounded border bg-transparent";
    case "contained":
      return "bg-brand-primary rounded";
    case "text":
      return " bg-transparent text-text-main";
    default:
  }
};
const themeColorFn = (style = "") => {
  switch (style) {
    case "main":
      return " text-white bg-gradient md:text-[1rem] text-sm font-semibold px-8 py-2 rounded-lg hover:scale-105 duration-200";
    case "white":
      return "bg-white text-brand-primary duration-200 rounded-lg";

    case "":
      return "";
    default:
  }
};
// eslint-disable-next-line consistent-return
const sizeFn = (style = "") => {
  switch (style) {
    case "main":
      return " px-8 py-2  ";

    case "":
      return " bg-red-200, px-4 py-2";
    default:
  }
};
const Button = ({
  type,
  children,
  variant,
  size,
  themeColor,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames( variantFn(variant), themeColorFn(themeColor), sizeFn(size),className)}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
