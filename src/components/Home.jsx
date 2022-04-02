import React from "react";
import Logo from "../images/Google-Logo.wine.svg";
import { Link } from "react-router-dom";
import SearchForm from "./util/SearchForm";

const Home = () => {
  const data = {
    btn1: " Poogle Search",
    btn2: " I feel lucky",
    moreInfoLabel: "Did you know Poogle is not offered in:",
    moreInfo: "Afrikaans Sesotho isiZulu IsiXhosa Setswana Northern Sotho",
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full">
        <div className="flex justify-center">
          <img width="272px" src={Logo} alt="" />
        </div>
        <div className="my-12 flex justify-center">
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
    </div>
  );
};

export default Home;
