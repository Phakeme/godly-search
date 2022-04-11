import React from "react";
import SearchIcon from "../../images/search-icon.svg";
import { EachLink } from "../Navigations/EachLink";
import { useResultContext } from "../../Context/ResultsContextProvider";

export const Error = () => {
  const { setIsServerError, errorMessage } = useResultContext();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-full flex justify-center items-center w-24 h-auto overflow-hidden mb-6 border-8 border-white shadow-lg">
        <img height="100%" src={SearchIcon} alt="" />
      </div>
      <p className="text-xl mb-4">
        <strong>No results found</strong>
      </p>
      <p className="text">Something went wrong :(</p>
      <p className="mb-6 text-red-700 text-center">
        {errorMessage ||
          "Godly search is using google free api, and we might have reached  our monthly restriction. "}
      </p>
      <div className="bg-red-100" onClick={() => setIsServerError(false)}>
        <EachLink btn={true} label="Got it, take me back" path="#" />
      </div>
    </div>
  );
};
