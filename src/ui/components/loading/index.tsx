import React from "react";

interface LoadingProps {
  isLoading: boolean;
  text?: string;
}

export const Loading = ({ isLoading, text = "" }: LoadingProps) => {
  //state for show/hide modal
  const [showLoading, setShowLoading] = React.useState(false);

  //reset show state
  React.useEffect(() => {
    setShowLoading(isLoading);
  }, [isLoading]);

  //lock/unlock scroll bar
  React.useEffect(() => {
    showLoading && (document.body.style.overflow = "hidden");
    !showLoading && (document.body.style.overflow = "unset");
  }, [showLoading]);

  return (
    <>
      {isLoading && (
        <div className="w-full h-full fixed block top-0 left-0 bg-black bg-opacity-60 font-extrabold text-4xl font-main z-50 text-white">
          <div className="flex flex-col justify-center items-center my-0 mx-auto relative w-full h-full gap-2">
            <div className="inline-flex items-center gap-2 animate-bounce">
              <span className="rounded-full relative p-5 bg-yellowLight hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" transform h-4 xl:h-5 absolute top-1/2 left-1/2 text-carrot -translate-x-1/2 -translate-y-1/2 hover:scale-125"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217 2.3 479.7c-2.9 6-3.1 13.3 0 19.7 5.4 11.1 18.9 15.7 30 10.3l133.6-65.2-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6 6.3-6.2 16.4-6.2 22.6 0l57 57 102-49.8c24-11.7 44.5-31.3 57.1-57.1 30.1-61.7 4.5-136.1-57.2-166.2zm92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9-32.9-39.7-81-49.8-121.7-30.3z"
                  ></path>
                </svg>
              </span>
              <p className="tracking-wide">Loading...</p>
            </div>
            {text !== "" && (
              <p className="font-second font-normal text-sm ">{text}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
