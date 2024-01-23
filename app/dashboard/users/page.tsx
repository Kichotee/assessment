"use client";

import DataTable from "@/components/Datatable/DataTable";
import { Column } from "@/components/Datatable/colums";
import { TypeColumns } from "@/components/Datatable/types";
import { UserData, transaction, user } from "@/types";
import { useAppSelector } from "../../lib/store/hooks";
import { RootState } from "../../lib/store/store";
import Button from "@/components/Buttons/Button";
import ModifiedDialog from "@/components/Dialog/ModifiedDialog";
import React from "react";
import ControlledOutlineInput from "@/components/Input/controlledOutlineInput";
import { useForm } from "react-hook-form";
import StatusAlert from "@/components/Buttons/StatusAlert";
import adminProtect from "@/app/lib/adminProtect";
import ConfirmActionModal from "@/components/Dialog/ConfirmModal";
import { CiWarning } from "react-icons/ci";

const Users = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedUser, setselectedUser] = React.useState<user|null>(null);

  const { control } = useForm();
  const columns: TypeColumns<user>[] = [
    {
      title: "Name",
      dataIndex: "Name",
      filter: false,
      sorter: true,
      render(_, col) {
        return <Column label={col?.name as unknown as string} />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      filter: false,
      sorter: true,
      render(_, col) {
        // @ts-ignore
        return <Column label={col?.email} />;
      },
    },
    {
      title: "tranactions",
      dataIndex: "transactions",
      filter: false,
      sorter: true,
      render(_, col) {
        return <Column label={col?.transactions as number} />;
      },
    },

    {
      title: "Status",
      dataIndex: "status",
      filter: false,
      sorter: true,
      render(_, col) {
        return (
          <StatusAlert value={col?.status?.toLowerCase() as user["status"]} />
        );
      },
    },
    {
      dataIndex: "menu",
      filter: false,
      title: "",
      render(row, col) {
        return (
          <Button
            variant="contained"
            themeColor="error"
            className="hover:bg-brand-primary/30 px-1.5 !text-xs py-2 rounded-md duration-200"
            onClick={(e) => {
              e.stopPropagation();
              if (col) {
                setselectedUser(col);
                setOpenModal(true);
              }
            }}
          >
            Delete
          </Button>
        );
      },
      width: "35px",
    },
  ];
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <section className="mt-7">
        {/* <div className="flex mb-7 justify-end">
          <Button variant="contained" themeColor="main" onClick={toggleModal}>
            Send money
          </Button>
        </div> */}

        <div className="border shadow">

        <DataTable columns={columns} dataSource={user.user?.users as user[]} />
        </div>
      </section>
      <ConfirmActionModal
        open={openModal}
        setOpen={setOpenModal}
        actionText="Confirm"
        description={`Delete user ${selectedUser?.name}?`}
        title={`Delete user`}
        icon={<CiWarning size={48} color="orange" />}
      />
    </>
  );
};

export default adminProtect(Users);
