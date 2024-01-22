
import React from "react";

export type IChildren = {
  children: React.ReactNode;
};

export type ButtonProps = {
    size?: string;
    variant: string;
    themeColor?: string;
    className?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>;



  export type OptionType = {
    label: string;
    value: string;
    content?: React.JSX.Element;
    disabled?: boolean;
    onClick?: () => void;
    showChangeIndicator?: boolean;
    changeIndicatorType?: "error" | "info" | "normal";
  };

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
  sizes?: string;
  label?: string| React.ReactNode;
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

export type transaction={
  from:string
  to:string;
  amount:number;
  date:string;
  description?:string;
  type:"credit"|"debit";
  status:"pending"|"successful"|"failed"
  
}

export type UserData={
  name:string;
  email:string;
  balance:string|number;
  transactions:transaction[];
  profile:"Admin"|"User"
} 

export interface IModifiedDialog extends IChildren {
  open: boolean;
  afterContent?:React.ReactNode;
  onClose: () => void;
  onAction?: () => void;
  onSeconAction?: () => void;
  secActionText?: string;
  actionText?: string;
  title?: string;
  description?: string;
  subTitle?: string;
  loading?: boolean;
  disabled?: boolean;
  isSecCancel?: boolean;
  hideDialogTitle?: boolean;
  actionSeverity?: "error" | "secondary" | "primary" | "success";
  secActionSeverity?: "error" | "secondary" | "primary" | "success";
}

export type Auth={
  email:string;
  password:string;
}