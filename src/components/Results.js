import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./util/Loading";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultsContextProvider";

const localState = JSON.parse(localStorage.getItem("searchRes"));

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // getResults(`/search/q=${searchTerm}&num=30`);
    console.log(`/search/q=${searchTerm}&num=30`);
  }, [location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div>
          <p className="text-base mb-2 mt-2 text-gray-500">
            About {localState.results.length} results {searchTerm}
          </p>
          {localState && (
            <div>
              {localState.results.map(({ title, link, description }, index) => (
                <div key={index} className="mb-4">
                  <a href={link} target="_blank" rel="noreferrer">
                    <p className="text-sm">
                      {link.length > 30 ? link.substring(0, 30) : link}
                    </p>
                    <p className="text-2xl text-blue-500 hover:underline">
                      {title}
                    </p>
                  </a>
                  <p>
                    {description.length > 30
                      ? description.substring(0, 80) + "..."
                      : description}
                  </p>
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
