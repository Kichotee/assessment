import React from "react";
import { TableCellProps } from "./types";

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, width,columnTitle, ...props }, ref) => {
    return (
      <td
        data-cell={columnTitle}
        ref={ref}
        width={width}
        className="bg-transparent w-max text-xs font-light mx-auto dark:text-slate-900 "
        {...props}
      >
        {children}
      </td>
    );
  }
);

TableCell.displayName = "TableCell";

export default TableCell;
