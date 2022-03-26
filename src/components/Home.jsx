import React from "react";
import Logo from "../images/Google-Logo.wine.svg";
import { Link } from "react-router-dom";
import SearchForm from "./util/SearchForm";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full">
        <div className="flex justify-center">
          <img width="272px" src={Logo} alt="" />
        </div>
        <SearchForm />
        <div>
          <div className="flex justify-center">
            <div className="mx-2">
              <Link to="/">
                <button className="bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
                  Poogle Search
                </button>
              </Link>
            </div>
            <div className="mx-2">
              <Link to="/">
                <button className="bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
                  I feel lucky
                </button>
              </Link>
            </div>
          </div>
          <div className="text-sm text-center mt-8">
            Did you know Poogle is not offered in:{" "}
            <strong>
              Afrikaans Sesotho isiZulu IsiXhosa Setswana Northern Sotho
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
