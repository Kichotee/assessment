import React from "react";
import { TableRowProps } from "./types";

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className="  w-max  text-neutral-black dark:text-slate-900 hover:bg-neutral-bodyText/10 cursor-pointer "
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = "TableRow";

export default TableRow;
