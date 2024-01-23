import React from "react";
import ControlledOutlineInput from "../Input/controlledOutlineInput";
import ModifiedDialog from "./ModifiedDialog";
import { useForm } from "react-hook-form";
import ConfirmActionModal from "./ConfirmModal";
import { GiPayMoney } from "react-icons/gi";

type IProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SendModal = (props: IProps) => {
  const { open, setOpen } = props;
  const { control,watch } = useForm();

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  const [openConfirm, setOpenConfirm] = React.useState(false);
  return (
    <>
      <ModifiedDialog
        open={open}
        title="Transfer Money"
        onAction={()=>setOpenConfirm(true)}
        description="Send money to anyone around the world"
        actionText="Send"
        onClose={toggleModal}
      >
        <form action="">
          <ControlledOutlineInput
            name={"receiver"}
            label="payee tag"
            control={control}
            placeholder="E.g John234"
            fullWidth
          />
          <ControlledOutlineInput
            name={"amount"}
            control={control}
            fullWidth
            label="Amount"
            placeholder="5000"
          />
        </form>
      </ModifiedDialog>

      <ConfirmActionModal
        open={openConfirm}
        setOpen={setOpenConfirm}
        actionText="Confirm"
        title="Confirm transfer"
        icon={<GiPayMoney size={48} color="green" />}
        description={`Are you sure you want to send ${watch().amount}?`}
      />
    </>
  );
};

export default SendModal;
