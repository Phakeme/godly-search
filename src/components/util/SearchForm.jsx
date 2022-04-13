import React, { useState, useEffect } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../../Context/ResultsContextProvider";
import Isearch from "../../images/icons8-search.svg";
import Ispeak from "../../images/Google_mic.svg";
import ClearIcon from "../../images/x_icon.svg";
import { useDebounce } from "use-debounce";

const SearchForm = () => {
  const location = useLocation();
  const { getResults, searchTerm, setSearchTerm } = useResultContext();
  const [query, setQuery] = useState("");
  const [searchText] = useDebounce(query, 500);

  let localState;
  let seachTermLocal = JSON.parse(localStorage.getItem("seachTermLocal"));

  switch (location.pathname) {
    case "/search":
      localState = JSON.parse(localStorage.getItem("searchRes"));
      break;
    case "/image":
      localState = JSON.parse(localStorage.getItem("imagesRes"));
      break;
    case "/news":
      localState = JSON.parse(localStorage.getItem("newsRes"));
      break;
    case "/videos":
      localState = JSON.parse(localStorage.getItem("videosRes"));
      break;
    default:
      break;
  }

  useEffect(() => {
    if (location.pathname !== "/") {
      if (localState === null || localState?.resFor !== seachTermLocal) {
        handleSubmit(searchTerm || seachTermLocal);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    setSearchTerm(searchText?.trim());
  }, [searchText]);

  const handleSubmit = async (searchText) => {
    localStorage.setItem("seachTermLocal", JSON.stringify(searchText));
    setSearchTerm(searchText?.trim());

    if (window.location.pathname === "/") {
      await getResults(`/search/q=${searchText}&num=30`);
    } else if (location.pathname === "/videos") {
      getResults(`/video/q=${searchTerm || seachTermLocal} @youtube`);
    } else {
      getResults(
        `${location.pathname}/q=${searchTerm || seachTermLocal}&num=40`
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(searchTerm);
    }
  };

  return (
    <div className="search-box">
      <div className="flex justify-center p-3">
        <img src={Isearch} alt="" />
      </div>
      <input
        value={query}
        type="text"
        name="searchForm"
        id="searchForm"
        placeholder="Search"
        className="search-input"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
      {query.length ? (
        <div
          className="flex justify-center p-3 border-r-2 cursor-pointer"
          onClick={() => setQuery("")}
        >
          <img src={ClearIcon} alt="" />
        </div>
      ) : null}
      <div className="flex justify-center p-3">
        <img src={Ispeak} alt="" />
      </div>
      {query.length ? (
        <div
          className="flex justify-center p-3 cursor-pointer"
          onClick={() => handleSubmit(searchTerm)}
        >
          <img src={Isearch} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default SearchForm;
