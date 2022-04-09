import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./util/Loading";

import { useResultContext } from "../Context/ResultsContextProvider";
import { SearchResults } from "./Pages/SearchResults";
import { ImagesResults } from "./Pages/ImagesResults";
import { NewsResults } from "./Pages/NewsResults";
import { VideosResults } from "./Pages/VideosResults";

let localState;

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm.trim()) {
      if (location.pathname === "/videos") {
        console.log(`videos`);
        // getResults(`/video/q=${searchTerm} @youtube`);
      } else {
        // getResults(`${location.pathname}/q=${searchTerm}&num=40`);
        console.log(`${location.pathname}/q=${searchTerm}&num=40`);
      }
      // getResults(`/search/q=${searchTerm}&num=30`);
    }
    console.log("Just running");
  }, [location.pathname, searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      localState = JSON.parse(localStorage.getItem("searchRes"));
      return <SearchResults localState={localState} searchTerm={searchTerm} />;
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
