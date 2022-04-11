import React from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./util/Loading";
import { useResultContext } from "../Context/ResultsContextProvider";
import { SearchResults } from "./Pages/SearchResults";
import { ImagesResults } from "./Pages/ImagesResults";
import { NewsResults } from "./Pages/NewsResults";
import { VideosResults } from "./Pages/VideosResults";

let localState;

const Results = () => {
  const { isLoading, searchTerm } = useResultContext();
  const location = useLocation();

  let seachTermLocal = JSON.parse(localStorage.getItem("seachTermLocal"));

  if (searchTerm.length === 0 && seachTermLocal === null) {
    window.location.pathname = "/";
  }

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      localState = JSON.parse(localStorage.getItem("searchRes"));
      return (
        <>
          <p className="text-base mb-2 mt-2 text-gray-500">
            About {localState?.results?.length} results {seachTermLocal}
          </p>
          <SearchResults localState={localState} searchTerm={searchTerm} />
        </>
      );
    case "/image":
      localState = JSON.parse(localStorage.getItem("imagesRes"));
      return <ImagesResults localState={localState} searchTerm={searchTerm} />;
    case "/news":
      localState = JSON.parse(localStorage.getItem("newsRes"));
      return <NewsResults localState={localState} searchTerm={searchTerm} />;
    case "/videos":
      localState = JSON.parse(localStorage.getItem("videosRes"));
      console.log(localState);
      return <VideosResults localState={localState} searchTerm={searchTerm} />;
    default:
      return (
        <div className="">
          <p>Error</p>
        </div>
      );
  }
};

export default Results;
