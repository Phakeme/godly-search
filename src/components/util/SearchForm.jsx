import React, { useState, useEffect } from "react";
import "./style.css";
import Isearch from "../../images/icons8-search.svg";
import Ispeak from "../../images/Google_mic.svg";
import { useResultContext } from "../../Context/ResultsContextProvider";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { setSearchTerm } = useResultContext();
  const [searchText] = useDebounce(query, 500);

  useEffect(() => {
    setSearchTerm(searchText.trim());
  }, [searchText]);

  const handleNavige = () => {
    navigate(`/search`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleNavige("/search");
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
      <div className="flex justify-center p-3">
        <img src={Ispeak} alt="" />
      </div>
    </div>
  );
};

export default SearchForm;

// className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
// placeholder="0.00"
