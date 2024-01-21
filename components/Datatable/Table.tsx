import React from "react";
import { TableProps } from "./types";

import "./index.css";

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ children, ...props }, ref) => {
  return (
    <table ref={ref} className="" {...props}>
      {children}
    </table>
  );
});

Table.displayName = "Table";

export default Table;
