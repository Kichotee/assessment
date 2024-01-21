/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { FaDownload, FaEllipsisVertical } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import SuperTableHead from "./SuperTableHead";
import TableCell from "./TableD";
import TableRow from "./TableRow";
import {
  DataSourceObjType,
  IDataTable,
  ITableContraint,
  RecurviePrimitiveType,
  TypeColumns,
} from "./types";
import Button from "../Buttons/Button";
import CircularProgress from "@/components/CircularProgress";

// import { getAllWithdrawalData } from "@/store/withdrawalsDetailsStore/withdrawalSlice";
// import { tableToCSV } from "@/utils/downloadCSV";

const DataTable = <TField extends ITableContraint>(
  props: IDataTable<TField>
) => {
  const {
    tableParams,
    setTableParams,
    dataSource,
    columns,
    emptyState,
    fullData,
    url,
    loading,
    onRowClick,
    handleFilter,
    stickyHeader,
    menuOptions,
    onMenuClick,
    menuIcon: MenuIcon,
    menuAction,
    tableHeader,
  } = props;

  // const { open, toggleMenu, handleClose } = useMenu();
  const [pageSize, setPageSize] = React.useState(fullData?.per_page);
  const handleRowPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTableParams((prev) => {
      return {
        ...prev,
        per_page: Number(event.target.value),
        page: 0,
      };
    });
  };

  const [data, setData] = React.useState(dataSource);
  React.useEffect(() => {
    setData(dataSource);
  }, [dataSource]);
  const [sortBy, setSortBy] = React.useState(null);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const sortTable = (column) => {
    const newData = [...data];
    if (sortOrder === "asc") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      newData.sort((a, b) => {
        return a[column] > b[column] ? 1 : -1;
      });
    } else {
      newData.sort((a, b) => {
        return a[column] < b[column] ? 1 : -1;
      });

      setSortOrder("asc");
    }

    setData(newData);
    setSortBy(column);
  };

  // console.log(tableParams)

  // const handleRowPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTableParams((prev) => {
  //     return {
  //       ...prev,
  //       page_size: Number(event.target.value),
  //       page: 0,
  //     };
  //   });
  // };

  const handlePageChange = (event: unknown, newPage: number) => {
    setTableParams((prev) => {
      return {
        ...prev,
        page: newPage,
      };
    });
  };
 
  const renderCellData = (
    column: TypeColumns<TField>,
    row: DataSourceObjType<TField>,
    index: number,

    _onClick?: (
      _row: RecurviePrimitiveType,
      _col: DataSourceObjType<TField>
    ) => void
  ): React.ReactNode => {
    // const dataValue = row[column?.dataIndex];
    // type ff = keyof DataSourceObjType
    // if (column.dataIndex === "date") return isValid(row?.updatedAt) ? "" : format(new Date(), "Pp");
    if (column.dataIndex === "menu-icon") {
      return (
        <Button
          variant="contained"
          onClick={
            menuAction === "default"
              ? (e) => {
                  if (onMenuClick) {
                    onMenuClick(row);
                  }
                }
              : () => {}
          }
        >
          {MenuIcon ? <MenuIcon /> : <FaEllipsisVertical />}
        </Button>
      );
    }
    if (column.render)
      return column.render(row?.[column.dataIndex], row, index, _onClick);
    if (
      typeof row[column?.dataIndex] === "string" ||
      typeof row[column?.dataIndex] === "number"
    ) {
      return (
        <div className="text-brand-primary border">{`${
          row[column?.dataIndex]
        }`}</div>
      );
    }
    
    return "-";
  };
  const renderDataItems = () => {
    return data?.map((row, rowIndex) => {
      // const key = dataKeys()[rowIndex];

      return (
        <TableRow
          className={` px-2`}
          key={`${row?.id}-${rowIndex}-table-body`}
          onClick={(e) => {
            e.stopPropagation();
            if (onRowClick) {
              onRowClick(row);
            }
          }}
        >
          {columns?.map((column, columnIndex) => {
            // console.log(column)
            return (
              <TableCell
                columnTitle={column.title}
                // width={column?.width as number}

                key={`${column.dataIndex}-${columnIndex}`}
                className="whitespace-nowrap "
              >
                {renderCellData(column, row, rowIndex, column?.onMenuClick)}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };
  const emptyRows =
    tableParams?.pagination?.pageNumber > 0
      ? Math.max(
          0,
          (1 + tableParams.pagination.pageNumber) *
            tableParams.pagination.pageSize -
            tableParams.pagination.total
        )
      : 0;

  return (
    <div className=" max-w-screen w-full ">
      <div className="flex justify-between items-center">
        {tableHeader && (
          <p className="py-3 text-xl mb-6  font-bold">{tableHeader}</p>
        )}
        {/* <Button variant="contained" className="!text-xs !py-2 h-max" onClick={()=>{return tableToCSV(tableHeader as string)}} themeColor="main">
       
      <FaDownload/>
      </Button> */}
      </div>
      <div className="">
        <table className="w-full  text-text-sub bg-transparent ">
          <SuperTableHead
            sortBy={setSortBy}
            sortTable={sortTable}
            columns={columns}
          />

          {data && data.length > 0 ? (
            <tbody
              className={`px-2`}
            >
              {loading ? (
                <TableRow style={{ height: 53 }}>
                  <TableCell colSpan={columns?.length || 1}>
                    <div className="grid items-center place-items-center min-h-screen md:p-4">
                      <CircularProgress size={40} color="#F4623A" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {renderDataItems()}
                  {/* <TableRow style={{ height: 53 }}>
                  <TableCell  colSpan={columns?.length || 1} />
                </TableRow> */}
                </>
              )}
            </tbody>
          ) : (
            <tbody>
              {loading ? (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={columns?.length || 1}>
                    <div className="grid items-center place-items-center p-4">
                      <CircularProgress size={64} color="white" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                <TableCell colSpan={columns?.length || 1}>
                  <div className="grid items-center place-items-center p-4">
                    <div className="m-0  h-[40vh] flex items-center justify-center">
                      {emptyState}
                    </div>
                  </div>
                </TableCell>
                // <TableRow className="min-h-screen flex justify-center" style={{ height: 53 * emptyRows }}>
                //   <TableCell  colSpan={columns?.length || 1}>
                //   </TableCell>
                // </TableRow>
              )}
            </tbody>
          )}
        </table>
      </div>

      {/* {dataSource?.length > 0 && (
        <TablePagination
          count={data?.length || 0}
          // rowsPerPageOptions={[5, 10, { label: "all", value: "All" }]}
          rowsPerPageOptions={[5, 10, 20, 40]}
          nextURL={tableParams?.next_page_url}
          rowsPerPage={Number(fullData?.data.length) - 1}
          page={tableParams?.page as number}
          onPageChange={(evt, pageNum) => {
            return handlePageChange(evt, pageNum);
          }}
          total={tableParams.total}
          onRowsPerPageChange={handleRowPerPageChange}
          colSpan={columns?.length}
        />
      )} */}
    </div>
  );
};

export default DataTable;
