import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "./util/Loading";
import ReactPlayer from "react-player";

import { useResultContext } from "../Context/ResultsContextProvider";

let localState;
// const localState = JSON.parse(localStorage.getItem("searchRes"));

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm.trim()) {
      if (location.pathname === "/videos") {
        console.log(`videos`);
        // getResults(`/video/q=${searchTerm} videos`);
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
      return (
        <div className="">
          <p className="text-base mb-2 mt-2 text-gray-500">
            About {localState?.results?.length} results {searchTerm}
          </p>
          {localState && (
            <div>
              {localState?.results?.map(
                ({ title, link, description }, index) => (
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
                )
              )}
            </div>
          )}
        </div>
      );
    case "/image":
      localState = JSON.parse(localStorage.getItem("imagesRes"));
      return (
        <div className="">
          <p className="text-base mb-2 mt-2 text-gray-500">
            About {localState?.image_results?.length} results {searchTerm}
          </p>
          {localState && (
            <div className="flex flex-wrap justify-center items-center">
              {localState?.image_results?.map(
                (
                  { image, link: { domain, href, title }, image: { src, alt } },
                  index
                ) => (
                  <div key={index} className="mb-4">
                    <a
                      href={href}
                      target="_blank"
                      key={index}
                      rel="noreferrer"
                      className="sm:p-3 p-5"
                    >
                      <img src={image?.src} alt={title} loading="lazy" />
                      <p className="sm:w-36 w-36 break-words text-sm mt-2">
                        {title}
                      </p>
                    </a>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      );
    case "/news":
      localState = JSON.parse(localStorage.getItem("newsRes"));
      return (
        <div className="">
          <p className="text-base mb-2 mt-2 text-gray-500">
            About {localState?.entries?.length} results {searchTerm}
          </p>
          {localState && (
            <div>
              {localState?.entries?.map(({ title, link, published }, index) => (
                <div key={index} className="mb-4">
                  <a href={link} target="_blank" rel="noreferrer">
                    <p className="text-sm">
                      {link.length > 30 ? link.substring(0, 30) : link}
                    </p>
                    <p className="text-xl text-blue-500 hover:underline">
                      {title}
                    </p>
                  </a>
                  <p>{published}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    case "/videos":
      localState = JSON.parse(localStorage.getItem("videosRes"));
      console.log(localState, "localState");
      return (
        <div className="">
          <p className="text-base mb-2 mt-2 text-gray-500">
            About {localState?.image_results?.length} results {searchTerm}
          </p>
          {localState && (
            <div>
              {localState?.image_results?.map(
                (
                  { link: { domain, href, title }, image: { src, alt } },
                  index
                ) => (
                  <div key={index} className="mb-4">
                    <a href={href} target="_blank" rel="noreferrer">
                      <p className="text-sm">
                        {href.length > 30 ? href.substring(0, 30) : href}
                      </p>
                      <p className="text-2xl text-blue-500 hover:underline">
                        {title}
                      </p>
                    </a>
                    <p>
                      {domain.length > 30
                        ? domain.substring(0, 80) + "..."
                        : domain}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      );
    default:
      return (
        <div className="">
          <p>Error</p>
        </div>
      );
  }
};

export default Results;
