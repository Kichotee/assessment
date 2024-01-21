/* eslint-disable no-unused-vars */
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { CloseCircle } from "iconsax-react";
import { IModifiedDialog } from "@/types";
// import IconButton from "@/shared/Button/IconButton";
import Button from "@/components/Buttons/Button";
import CircularProgress from "../CircularProgress";
// import CircularProgress from "@/shared/CircularProgress";

const ModifiedDialog = (props: IModifiedDialog) => {
  const {
    open,
    afterContent,
    onAction,
    actionText,
    onClose,
    title,
    children,
    secActionText,
    onSeconAction,
    description,
    loading,
    disabled,
    isSecCancel,
    hideDialogTitle,
    // actionSeverity,
    // secActionSeverity,
  } = props;
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-[4000000] " onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center w-full justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modified-dialog-content w-[28rem] max-w-xl md:max-w-5xl md:pt-[3rem] pt-[1.25rem] pb-[2rem] md:pb-[3.5rem]  transform overflow-auto relative rounded-md bg-[white] text-black  text-left align-middle shadow-xl transition-all">
                {!hideDialogTitle && (
                  <Dialog.Title className="pt-3  px-2  md:px-4  sticky  top-0 bg-white z-10">
                    <div className="flex justify-between items-center font-semibold">
                      <p className=" text-[1.625rem]  flex-1">
                        {title || ""}
                      </p>
                      <button
                        onClick={onClose}
                        className="bg-white text-black rounded-full h-6 w-6 grid place-items-center place-content-center "
                      >
                        {/* <CloseCircle /> */} X
                      </button>
                      {/* <div className="bg-white ">
                      </div> */}
                    </div>
                  </Dialog.Title>
                )}
                <Dialog.Description className="px-2 md:px-4">
                  {description && (
                    <p className=" text-gray-600 text-sm my-2">{description}</p>
                  )}
                  <div>{children}</div>
                </Dialog.Description>
                <div className="sticky bottom-0 flex justify-end">
                  <div className="flex justify-center  gap-4 items-center w-full  py-4 px-6 ">
                    {secActionText && (
                      <Button
                        variant="contained"
                        themeColor="main"
                        disabled={disabled || loading}
                        className="!w-[80vw] py-[1.19rem] ! md:!w-[6rem]"
                        // startArdornment={
                        //   loading && (
                        //     <span>
                        //       <CircularProgress
                        //         color="rgb(83 182 237 / var(--tw-text-opacity))"
                        //       />
                        //     </span>
                        //   )
                        // }

                        onClick={() => {
                          if (isSecCancel) {
                            onClose();
                          } else if (onSeconAction) {
                            onSeconAction();
                          }
                        }}
                      >
                        {loading ? (
                          <div className="w-ful flex justify-center">
                            <CircularProgress color="white" />
                          </div>
                        ) : (
                          secActionText || "Close"
                        )}
                      </Button>
                    )}

                    {actionText && (
                      <Button
                        className="w-full"
                        themeColor="secondary"
                        variant="contained"
                        onClick={() => {
                          if (onAction) {
                            onAction();
                          }
                        }}
                        // startArdornment={
                        //   loading && (
                        //     <span>
                        //       <CircularProgress color={"white"} />
                        //     </span>
                        //   )
                        // }
                        disabled={disabled || loading}
                      >
                        {actionText || "Ok"}
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-2 md:p-4">{afterContent}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ModifiedDialog.defaultProps = {
  actionSeverity: "secondary",
  secActionSeverity: "secondary",
};

export default React.memo(ModifiedDialog);
