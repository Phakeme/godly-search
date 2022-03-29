import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultsContextProvider";

const localState = JSON.parse(localStorage.getItem("searchRes"));

const Results = () => {
  const { results, isLoading, getResults, searchItem } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // getResults(`/search/q=${searchItem}&num=30`);
    console.log(`/search/q=${searchItem}&num=30`);
  }, []);

  if (isLoading) return "Loading";

  switch (location.pathname) {
    case "/search":
      return (
        <div>
          {localState && (
            <div>
              {localState.results.map(({ title, link }, index) => (
                <div key={index}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <p>{link.length > 30 ? link.substring(0, 30) : link}</p>
                  </a>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
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
