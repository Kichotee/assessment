import React from "react";

interface ColumnProps {
    label: string | number |React.ReactNode;
    className?: string | string[];
  }


export const Column: React.FC<ColumnProps> = React.memo(function Column({ label, className }: ColumnProps)  {
    return <p className={`text-xs text-text-sub py-4 ${className}`}>{label}</p>;
  });