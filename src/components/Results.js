import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultsContextProvider";

const localState = JSON.parse(localStorage.getItem("searchRes"));

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // getResults(`/search/q=${searchItem}&num=30`);
    console.log(`/search/q=${searchTerm}&num=30`);
  }, [location.pathname]);

  if (isLoading) return "Loading";

  switch (location.pathname) {
    case "/search":
      return (
        <div>
          <p>search = {searchTerm}</p>
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
      return (
        <div>
          <p>images</p>
        </div>
      );
    case "/news":
      return (
        <div>
          <p>news</p>
        </div>
      );
    case "/videos":
      return (
        <div>
          <p>videos</p>
        </div>
      );
    default:
      return (
        <div>
          <p>Error</p>
        </div>
      );
  }
};

export default Results;
