import React from "react";
import { Oval } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center items-center lg:-ml-36 ml-0">
        <Oval
          ariaLabel="loading-indicator"
          height={50}
          width={50}
          strokeWidth={5}
          color="rgb(26, 115, 232)"
          secondaryColor="rgb(229 231 235)"
        />
        <p> Loading...</p>
      </div>
    </div>
  );
};
