"use client";

import DataTable from "@/components/Datatable/DataTable";
import { Column } from "@/components/Datatable/colums";
import { TypeColumns } from "@/components/Datatable/types";
import OverviewCardsGrid from "@/components/OverViewCardGrid";
import { transaction } from "@/types";
import { useAppSelector } from "../lib/store/hooks";
import { RootState } from "../lib/store/store";

const Dashboard = () => {
  const user = useAppSelector((state: RootState) => state.user);

  const columns: TypeColumns<transaction>[] = [
    {
      title: "Transaction Date",
      dataIndex: "Date",
      filter: false,
      sorter: true,
      render(_, col) {
        return <Column label={col?.date as unknown as string} />;
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      filter: false,
      sorter: true,
      render(_, col) {
        // @ts-ignore
        return <Column label={col?.amount as transaction["amount"]} />;
      },
    },
    {
      title: "Sender",
      dataIndex: "from",
      filter: false,
      sorter: true,
      render(_, col) {
        return <Column label={col?.from as string} />;
      },
    },

    {
      title: "Receiver",
      dataIndex: "to",
      filter: false,
      sorter: true,
      render(_, col) {
        return <Column label={col?.amount as number} />;
      },
    },

    // {
    //   title: "Withdrawal_date",
    //   dataIndex: "",
    //   filter: false,
    //   sorter: true,
    //   render(_, col) {
    //     return (
    //       <Column
    //         className="text-error-critical"
    //         label={getMonthandDate(col?.bankaccount?.created_at as string)}
    //       />
    //     );
    //   },
    // },
  ];

  const transactions = () => {
    if (user.user?.transactions) {
      return user.user?.transactions.slice(0,2);
    }
    return []
  };
  return (
    <div className="">
      <OverviewCardsGrid />
      <div className="mt-7 flex gap-4 w-full min-h-[30vh]">
        <div className="basis-2/3 border">
          <DataTable columns={columns} dataSource={transactions()} />
        </div>
        <div className="basis-1/3 border"></div>
      </div>
    </div>
  );
};

export default Dashboard;
