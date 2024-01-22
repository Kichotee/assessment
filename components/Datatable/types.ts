// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck


import React from "react";
import { AsyncThunk } from "@reduxjs/toolkit";
import { MenuOption } from "@/types/index";

/* eslint-disable no-unused-vars */

// import React from "react";
// import { OptionType } from "@/types";
import { ITablePaginationFunction, Pagination } from "@/types/tableInterfaces";

/* eslint-disable no-unused-vars */
// import { ITablePagination, ITablePaginationFunction } from "@/@types/baseTableInterface";
// import { MenuOption } from "@/shared/Menu/type";
type columnTitle={
  columnTitle?:string
}
export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

export type TableHeaderProps = React.ThHTMLAttributes<HTMLTableSectionElement>;
export type TableHeaderCellProps = React.TableHTMLAttributes<HTMLTableCellElement>;

export type TableFooterProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

export type TableBodyProps = React.TableHTMLAttributes<HTMLTableSectionElement>;

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement>;

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & columnTitle;

export type TableCaptionProps = React.TableHTMLAttributes<HTMLTableCaptionElement>;

export type ITableContainerProps = React.HTMLAttributes<HTMLDivElement>;

export interface ITablePagination {
  search: string;
  sort?: string;
  filterBy?: string | number;
  pagination: Pagination;
}

export type PrimitiveType = string | number | boolean | Date | null | undefined;

export type RecurviePrimitiveType =
  | PrimitiveType
  | RecurviePrimitiveType[]
  | { [key: string]: RecurviePrimitiveType };

export type ITableLenType = string | number | null | boolean | Date;

export type RecuresiveTableType = Record<
  string,
  RecurviePrimitiveType | { [key: string | number]: RecuresiveTableType }
>;

// export type ITableContraint = Record<string, RecuresiveTableType>;
export type ITableContraint = RecuresiveTableType;

export type DataSourceObjType<P extends ITableContraint> = P;

export type TypeColumns<TField extends ITableContraint> = {
  dataIndex: string;
  title: string;
  filter: boolean;
  renderFilter?: React.ReactNode;
  sorter?: boolean;
  render?: (
    row: RecurviePrimitiveType,
    col?: DataSourceObjType<TField>,
    index?: number,
    onClick?: (_row: RecurviePrimitiveType, _col: DataSourceObjType<TField>) => void
  ) => JSX.Element;
  width?: number | string;
  className?: string;
  onMenuClick?: (_row: RecurviePrimitiveType, _col: TField) => void;
};

export interface IDataTable<TField extends ITableContraint> {
  columns: TypeColumns<TField>[];
  dataSource: DataSourceObjType<TField>[];
  tableParams?: ITablePagination;
  setTableParams?: ITablePaginationFunction;
  fullData?: any;
  emptyState?: React.ReactNode;
  loading?: boolean;
  url?:any
  handleFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  onRowClick?: (x: DataSourceObjType<TField>) => void;
  stickyHeader?: boolean;
  onMenuClick?: (x: DataSourceObjType<TField>) => void;
  menuOptions?: MenuOption[];
  menuIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  menuAction?: "default" | "none";
  tableHeader?: string | undefined;
}
export type OrderType = "asc" | "desc";

export interface IEnhancedTableHead<TField extends ITableContraint> {
  columns: TypeColumns<TField>[];
  order?: OrderType;
  orderBy?: string;
  rowCount?: number;
  onSort?: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  checker?: boolean;
  stickyHead?: boolean;
}
export type OptionType = {
  label: string;
  value: string;
  content?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
  showChangeIndicator?: boolean;
  changeIndicatorType?: "error" | "info" | "normal";
};

export interface ITableFooter {
  tableParams: ITablePagination;
  setTableParams: ITablePaginationFunction;
}
export interface ITablePaginationProps {
  count: number;
  nextURL:string|null;
  total:number|string;
  rowsPerPageOptions: (number | string | OptionType)[];
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, value: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  colSpan: number;
}
