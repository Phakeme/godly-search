import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Google-Logo.wine.svg";
import SearchForm from "./util/SearchForm";
import { Links } from "./Links";
import { CustomContainer } from "./util/CustomContainer";

export default function AppBar() {
  return (
    <>
      <header className="container mx-auto mt-2">
        <nav className="flex items-center justify-between">
          <div className="flex items-center h-full">
            <div className="flex justify-center mr-12">
              <Link to="/">
                <img width="92px" src={Logo} alt="" />
              </Link>
            </div>
            <div className="flex items-center">
              <SearchForm />
            </div>
          </div>
          <ul className="flex items-center justify-end h-12">
            <li className="ml-2 pl-4 text-sm">
              <Link to="/">Setting</Link>
            </li>
            <li className="ml-2 pl-4 text-sm">
              <Link to="/">Google Apps</Link>
            </li>
            <li className="ml-2 pl-4 text-sm">
              <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  Profile Icon
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex items-center border-b-2">
        <CustomContainer>
          <Links></Links>
        </CustomContainer>
      </div>
    </>
  );
}
