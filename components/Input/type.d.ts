import React from "react";
// eslint-disable-next-line no-unused-vars

interface InputFormProps {
  label?: string | React.ReactNode;
  select?: boolean;
  error?: boolean;
}
export interface InputLabelProps {
  className?: string;
  children: React.ReactNode | string | string[];
}
export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizes?: string | React.ReactNode;
  label?: string;
  fullWidth: boolean;
  variant?: string;
  error?: boolean;
}
interface OutlinedInputFormProps {
  label?: string | React.ReactNode;
  select?: boolean;
  helperText?: string | React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export interface FormHelperTextProps extends React.LabelHTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
  // children: React.ReactNode | string
}
export interface OutlinedInputProps extends InputBaseProps, OutlinedInputFormProps {
  InputLabelProps?: InputLabelProps;
  type?:string;
  FormHelperTextProps?: FormHelperTextProps;
  containerClassName?: string;
  autoCompleteClassName?: string;
  containerRef?: React.MutableRefObject<HTMLDivElement | null>;
}
interface SelectInputFormProps {
  label?: string;
  options?: OptionType[];
  helperText?: string | React.ReactNode;
  FormHelperTextProps?: FormHelperTextProps;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
}
export type SelectInputProps = React.SelectHTMLAttributes<HTMLSelectElement> & SelectInputFormProps;

export interface BaseControlledParameter<TFieldValues extends FieldValues> {
  /**
   *
   * it is equivalent to the controller error validation for the helperText
   */
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  
  control: Control<TFieldValues, any>;
  /**
   *
   * if `true` & @param {name} for the component name attribute
   */
  name: Path<TFieldValues>;
  /**
   *
   * it is equivalent to the validation rule of Yup and Zod
   */
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}
