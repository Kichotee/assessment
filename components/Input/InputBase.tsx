import React from "react";
import { InputBaseProps } from "./type";

const variantFn = (variantStyle = "") => {
  switch (variantStyle) {
    case "outlined":
      return " border-brand-primary rounded border bg-transparent";
    case "contained":
      return "bg-transparent rounded";
    case "text":
      return " bg-transparent text-text-main";
    default:
  }
};

const fullWidthFn = (style = false) => {
  switch (style) {
    case true:
      return "w-full px-2 py-1";

    case false:
      return " ";
    default:
  }
};

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, type, placeholder, fullWidth, error, variant, label, ...prop }, ref) => {
    return (
      // <label className="font-medium" htmlFor="">
      //   {label}
      // </label>
      <div className="flex flex-col  w-full">
        <input
          aria-label="sensor"
          data-app-error={Boolean(error)}
          className={ ` ${variantFn(variant)} ${fullWidthFn(fullWidth)}  ${className} rounded-md py-2 text-xs
        placeholder:text-slate-400  placeholder:text-xs
        data-[app-error=true]:border focus:bg-transparent !bg-transparent data-[app-error=true]:border-error-100 
        disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-bg disabled:border-neutral-border
        focus:!outline-none `}
          // className={`${classVariable(baseInputVariants({ className, sizes, fullWidth }))}`}
          ref={ref}
          placeholder={placeholder || ""}
          type={type || "text"}
          {...prop}
        />
      </div>
    );
  }
);

InputBase.displayName = "InputBase";
export default InputBase;
