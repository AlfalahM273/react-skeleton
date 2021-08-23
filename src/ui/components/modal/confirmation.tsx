import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";

//props for this modal
interface modalProps {
  isShowing: boolean;
  data?: any;
  onSubmit: (data: any) => void;
  onClose: () => void;
  message: string;
  okButton: string;
  cancelButton: string;
}

export const ModalConfirmation = ({
  isShowing,
  data = null,
  onSubmit,
  onClose,
  message,
  okButton,
  cancelButton,
}: modalProps) => {
  //state for this modal
  const [showModal, setShowModal] = useState(false);

  //reset props
  useEffect(() => {
    updateState(isShowing);
  });

  useEffect(() => {
    showModal && (document.body.style.overflow = "hidden");
    !showModal && (document.body.style.overflow = "unset");
  }, [showModal]);

  const updateState = (val: boolean) => {
    setShowModal(val);
  };

  const handleSubmitData = () => {
    if (onSubmit) onSubmit(data);
    if (onClose) onClose();
    setShowModal(false);
  };

  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="slide-up border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-secondBg outline-none focus:outline-none">
                {/*body / input data*/}
                <div className="relative p-6 flex-auto space-y-2 font-main text-black dark:text-white text-lg">
                  {message}
                </div>
                {/*footer / action button*/}
                <div className="flex items-center justify-end p-6 gap-3 border-t border-solid border-secondBg dark:border-white rounded-b">
                  <Button
                    variant="neutral"
                    onClick={() => {
                      onClose();
                      setShowModal(false);
                    }}
                  >
                    {cancelButton}
                  </Button>
                  <Button variant="danger" onClick={handleSubmitData}>
                    {okButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>,
    document.getElementById("modal-root") as Element
  );
};
