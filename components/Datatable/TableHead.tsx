import React from "react";
import { TableHeaderProps } from "./types";

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <thead
        data-testid={children}
        ref={ref}
        className={`   text-neutral-black dark:text-slate-900 hover:bg-slate-700 font-medium capitalize`}
        {...props}
      >
        {children}
      </thead>
    );
  }
);

TableHead.displayName = "TableHead";

export default TableHead;
