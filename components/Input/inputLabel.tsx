import React from "react";
import { InputLabelProps } from "./type";

const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label className={className} {...props} ref={ref}>
        {children}
      </label>
    );
  }
);

InputLabel.displayName = "InputLabel";

export default InputLabel;
