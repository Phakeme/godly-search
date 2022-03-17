import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultsContextProvider";

const Results = () => {
  const { results, isLoading, getResults, searchItem } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // getResults("/search/q=Javascript&num=30");
  }, []);

  if (isLoading) return "Loading";

  switch (location.pathname) {
    case "/search":
      return "Search";
    case "/images":
      return "Images";
    case "/news":
      return "News";
    case "/videos":
      return "Videos";
    default:
      return "Error";
  }
};

export default Results;
