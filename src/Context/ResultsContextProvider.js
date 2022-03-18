import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    const data = await response.json();
    console.log(data, "DATA");
    setResults(data);
    setIsLoading(false);
    localStorage.setItem("searchRes", JSON.stringify(data));
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
