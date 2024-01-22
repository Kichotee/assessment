import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies

import TableHead from "./TableHead";
import TableCell from "./TableD";
import { ITableContraint, IEnhancedTableHead } from "./types";
import { BiSortDown } from "react-icons/bi";
// import { ILibraryData } from "@/features/library/pages/invites";
export interface columnType {
  dataIndex: number;
  title: string;
}

const SuperTableHead = <TField extends ITableContraint>(
  props: IEnhancedTableHead<TField> & {
    sortBy: any;
    sortTable: any;
  }
) => {
  const { columns, sortBy, sortTable } = props;

  return (
    <TableHead
      className={` tablehead h-[3.25rem]  text-black border-t border-b pl-2`}
    >
      {columns.map((column) => {
        
        const { dataIndex, title, sorter } = column;

        return (
          <TableCell
            onClick={() => {
              return sortTable(dataIndex.toLowerCase());
            }}
            key={`${dataIndex}-table-head-cell-${title}`}
            // width={}
            className="whitespace-nowrap capitalize first-of-type:pl-4   py-4 font-bold"
            scope="col"
          >
            <div className="flex gap-1 text-[0.875rem] items-center cursor-pointer">
              {title}
              {sorter &&<BiSortDown />}
            </div>
          </TableCell>
        );
      })}
    </TableHead>
  );
};

export default SuperTableHead;
