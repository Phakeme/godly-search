import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseURL = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  let localKey;
  let seachTermLocal = JSON.parse(localStorage.getItem("seachTermLocal"));

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseURL}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    const data = await response.json();
    data.resFor = searchTerm || seachTermLocal;
    if (data.message) {
      setIsServerError(true);
      setErrorMessage(data.message);
    } else {
      setResults(data);
      console.log(data, "Sucess DATA");
      console.log(data.resFor, "data.resFor");
      if (window.location.pathname === "/") {
        window.location.pathname = "/search";
      } else {
        window.location.reload();
      }
    }
    setIsLoading(false);

    switch (window.location.pathname) {
      case "/":
        await data;
        localKey = "searchRes";
        break;
      case "/search":
        localKey = "searchRes";
        break;
      case "/image":
        localKey = "imagesRes";
        break;
      case "/news":
        localKey = "newsRes";
        break;

      default:
        localKey = "videosRes";
        break;
    }
    localStorage.setItem(localKey, JSON.stringify(data));
  };
  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
        isServerError,
        setIsServerError,
        errorMessage,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
