import React from "react";
import "./style.css";
import Isearch from "../../images/icons8-search.svg";
import Ispeak from "../../images/Google_mic.svg";

const SearchForm = () => {
  return (
    <div className="search-box">
      <div className="flex justify-center p-3">
        <img src={Isearch} alt="" />
      </div>
      <input
        type="text"
        name="searchForm"
        id="searchForm"
        placeholder="Search"
        className="search-input"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <div className="flex justify-center p-3">
        <img src={Ispeak} alt="" />
      </div>
    </div>
  );
};

export default SearchForm;

// className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
// placeholder="0.00"
