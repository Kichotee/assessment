import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import { OutlinedInputProps } from "./type";
import { BaseControlledParameter } from "./type";
import OutlinedInput from "./outlinedInput";

type OmitTextField = Omit<OutlinedInputProps, "name" | "error" | "value" | "onBlur"> & {
  subText?: string;
  /**
   * @param {isNumber} should be "currency" or "decimal" or "integer"
   */
  isNumber?: "currency" | "decimal" | "integer";
};

export interface IControlledOutlineInput<TFieldValues extends FieldValues>
  extends OmitTextField,
    BaseControlledParameter<TFieldValues> {
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

const ControlledOutlineInput = <TFormValue extends FieldValues>(
  props: IControlledOutlineInput<TFormValue>
) => {
  const {
    control,
    name: cname,
    isNumber,
    label,
    placeholder,
    rules,
    type,
    helperText,
    ref: outlinedRef,
    // eslint-disable-next-line no-unused-vars
    onChange: onPropChange,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordToggle = () => {
    return type === "password" ? (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
      <span role="button" onClick={togglePasswordVisibility}>
        {showPassword ? "hide" : "show"}
      </span>
    ) : // eslint-disable-next-line no-undefined
    undefined;
  };

  return (
    <Controller
      control={control}
      rules={rules}
      name={cname}
      // eslint-disable-next-line no-unused-vars
      render={({ field: { ref, onChange, value, ...fields }, fieldState: { error } }) => {
        return (
          <OutlinedInput
            // className={`${fullWidth? "w-full":"" }`}
            placeholder={placeholder}
            ref={(e) => {
              if (ref) ref(e);
              if (outlinedRef?.current) outlinedRef.current = e;
            }}
            label={label}
            error={Boolean(error?.message)}
            // value={value}
            onChange={
              isNumber
                ? (e) => {
                    
                    // @ts-ignore
                    onNumberTypeValidator(e, onChange, isNumber);
                    if (onPropChange) {
                      onPropChange(e);
                    }
                  }
                : (e) => {
                    if (onPropChange) {
                      onPropChange(e);
                    }
                    onChange(e);
                  }
            }
            FormHelperTextProps={{
              error: Boolean(error),
            }}
            startAdornment={props.startAdornment}
            endAdornment={renderPasswordToggle()}
            type={showPassword ? "text" : type}
            {...rest}
            {...fields}
            helperText={error?.message || helperText || ""}
          />
        );
      }}
    />
  );
};

export default ControlledOutlineInput;
