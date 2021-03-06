import React from "react";
import Logo from "../images/Google-Logo.wine.svg";
import { Link } from "react-router-dom";
import SearchForm from "./util/SearchForm";
import { useResultContext } from "../Context/ResultsContextProvider";
import { Loading } from "../components/util/Loading";
import { Error } from "./Pages/Error";

const Home = () => {
  const { isLoading, isServerError } = useResultContext();
  const data = {
    btn1: " Godly Search",
    btn2: " I feel like coding",
    moreInfoLabel: "Did you know Poogle is not offered in:",
    moreInfo: "Afrikaans Sesotho isiZulu IsiXhosa Setswana Northern Sotho",
  };
  return (
    <div className="flex justify-center items-center h-full">
      {isServerError ? (
        <Error />
      ) : (
        <>
          <div className="w-full">
            <div className="flex justify-center items-center h-40">
              {isLoading ? (
                <Loading />
              ) : (
                <div className="h-full flex flex-col items-center justify-center w-72 md:w-96">
                  <img width="360px" src={Logo} alt="" />
                </div>
              )}
            </div>
            <div className="my-12 flex justify-center max-w-xl mx-auto">
              <SearchForm />
            </div>
            <div>
              <div className="flex justify-center">
                <div className="mx-2">
                  <Link to="/">
                    <button className="bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
                      {data.btn1}
                    </button>
                  </Link>
                </div>
                <div className="mx-2">
                  <Link to="/">
                    <button className="bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
                      {data.btn2}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="text-sm text-center mt-8">
                {data.moreInfoLabel} <strong>{data.moreInfo}</strong>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
