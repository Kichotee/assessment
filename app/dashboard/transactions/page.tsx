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

const Transactions = () => {
  const user = useAppSelector((state: RootState) => state.user);
const {control, handlesubmit}= useForm()
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
        return <Column label={col?.to as string} />;
      },
    },
  ];
  const [openModal, setOpenModal]= React.useState(false)
const toggleModal=()=>{
  setOpenModal(prev=>!prev)
}
  return (
    <>
      <section className="mt-7">
        <div className="flex mb-7 justify-end">
          <Button variant="contained" themeColor="main" onClick={toggleModal}>
            Send money
          </Button>
        </div>
        <DataTable
          columns={columns}
          dataSource={user.user?.transactions as transaction[]}
        />
      </section>

      <ModifiedDialog open={openModal} title="Transfer Money" description="Send money to anyone around all over the world" actionText="Send" onClose={toggleModal}>
        <form action="">
         <ControlledOutlineInput name={"receiver"} label="Receiver's Id" control={control} placeholder="E.g 90o9oiu76" fullWidth/>
        <ControlledOutlineInput name={"amount"} control={control} fullWidth  label="Amount" placeholder="5000"/>
        </form>

      </ModifiedDialog>
    </>
  );
};

export default Transactions;
