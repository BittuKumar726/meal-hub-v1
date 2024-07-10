import React from "react";
import { RefreshCcw } from "react-feather";

const LoadingSpinner = ({ loadingText = null }) => {
  return (
    <div className="flex justify-center items-center h-[40rem]">
      <span className="flex text-xl justify-center items-center bg-sky-100 rounded-[20px] p-4">
        <RefreshCcw className="animate-spin h-5 w-5 mr-3" />
        {loadingText ? loadingText : ""}
      </span>
    </div>
  );
};

export default LoadingSpinner;
