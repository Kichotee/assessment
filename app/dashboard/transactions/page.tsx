"use client";

import DataTable from "@/components/Datatable/DataTable";
import { Column } from "@/components/Datatable/colums";
import { TypeColumns } from "@/components/Datatable/types";
import { transaction } from "@/types";
import { useAppSelector } from "../../lib/store/hooks";
import { RootState } from "../../lib/store/store";
import Button from "@/components/Buttons/Button";
import ModifiedDialog from "@/components/Dialog/ModifiedDialog";
import React from "react";
import ControlledOutlineInput from "@/components/Input/controlledOutlineInput";
import { useForm } from "react-hook-form";
import StatusAlert from "@/components/Buttons/StatusAlert";
import SendModal from "@/components/Dialog/SendModal";

const Transactions = () => {
  const user = useAppSelector((state: RootState) => state.user);
const {control}= useForm()
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
        return <Column label={<span>&#8358; {col?.amount}</span>} />;

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
        return <Column label={col?.to as string} />;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      filter: false,
      sorter: true,
      render(_, col) {
        return <StatusAlert value={col?.status?.toLowerCase() as transaction["status"]} />;

      },
    },
    {
      title: "transaction",
      dataIndex: "to",
      filter: false,
      sorter: true,
      render(_, col) {
        return <Column label={col?.to as string} />;
      },
    },
  ];
  const [openModal, setOpenModal]= React.useState(false)
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
      <section className="mt-7">
        <div className="flex mb-7 justify-end">
          <Button variant="contained" themeColor="main" onClick={toggleModal}>
            Send money
          </Button>
        </div>
        <div className="border shadow">

        <DataTable
          columns={columns}
          dataSource={user.user?.transactions as transaction[]}
        />
        </div>
      </section>

      <SendModal open={openModal} setOpen={toggleModal} />
    </>
  );
};

export default Transactions;
