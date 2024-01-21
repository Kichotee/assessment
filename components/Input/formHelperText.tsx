import React from "react";
import { FormHelperTextProps } from "./type";

const FormHelperText = React.forwardRef<HTMLParagraphElement, FormHelperTextProps>( function FormHelperText
  ({ children, error }, ref){
    return (
      <p
        data-app-error={Boolean(error)}
        ref={ref}
        className="bg-none text-text-sub data-[app-error=true]:text-error-100 text-xs"
      >
        {children}
      </p>
    );
  }
);

export default FormHelperText;
