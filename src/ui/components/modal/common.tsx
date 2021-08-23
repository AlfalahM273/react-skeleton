import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";

//props for this modal
interface modalProps {
  isShowing: boolean;
  minSize?: string;
  size: string;
  title: string;
  okText?: string;
  cancelText?: string;
  canSubmit?: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
  footer?: boolean;
  children: React.ReactNode;
}

export const Modal = ({
  isShowing,
  minSize = "",
  size,
  title,
  okText = "Submit",
  cancelText = "Cancel",
  onSubmit,
  canSubmit = true,
  onClose,
  footer = true,
  children,
}: modalProps) => {
  //state for show/hide modal
  const [showModal, setShowModal] = React.useState(false);

  //reset show state
  React.useEffect(() => {
    setShowModal(isShowing);
  }, [isShowing]);

  //lock/unlock scroll bar
  React.useEffect(() => {
    showModal && (document.body.style.overflow = "hidden");
    !showModal && (document.body.style.overflow = "unset");
  }, [showModal]);

  //handler for modal
  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    if (onClose) onClose();
    setShowModal(false);
  };

  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className={`relative ${
                minSize === "" ? "w-auto" : "w-" + minSize
              } my-6 mx-auto max-w-${size} text-black dark:text-white`}
            >
              {/*content*/}
              <div className="slide-up border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-secondBg outline-none focus:outline-none">
                {/*header / title*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-secondBg dark:border-white rounded-t">
                  <div className="flex w-full justify-center">
                    <h3 className="text-3xl font-semibold font-title">
                      {title}
                    </h3>
                  </div>
                </div>
                {/*body / input data*/}
                {/*footer / action button*/}
                {footer ? (
                  <>
                    <div className="relative p-2 flex-auto space-y-3">
                      {children}
                    </div>
                    <div className="flex items-center justify-end p-6 gap-3 border-t border-solid border-secondBg dark:border-white rounded-b">
                      <Button
                        variant="danger"
                        className="slide-down"
                        onClick={() => {
                          if (onClose) onClose();
                          setShowModal(false);
                        }}
                        type="button"
                      >
                        {cancelText}
                      </Button>
                      <Button onClick={handleSubmit} disabled={!canSubmit}>
                        {okText}
                      </Button>
                    </div>
                  </>
                ) : (
                  <div>{children}</div>
                )}
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
