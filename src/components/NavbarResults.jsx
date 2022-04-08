import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Google-Logo.wine.svg";
import SearchForm from "./util/SearchForm";
import { Links } from "./Links";
import { EachLink } from "./Navigations/EachLink";
import { CustomContainer } from "./util/CustomContainer";

export default function AppBar() {
  const info = [
    { label: "Setting", path: "/", btn: false },
    { label: "Google Apps", path: "/", btn: false },
    { label: " Profile Icon", path: "/", btn: true },
  ];
  return (
    <div className="bg-white w-full">
      <header className="container mx-auto mt-2 px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center h-full mr-4 md:mr-12 min-w-fit">
            <Link to="/">
              <img width="92px" src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex items-center w-full">
            <div className="max-w-xl w-full">
              <SearchForm />
            </div>
          </div>
          <ul className="flex items-center justify-end h-12 min-w-fit hidden lg:flex">
            {info.map(({ btn, label, path }, index) => (
              <li className="ml-2 pl-4 text-sm" key={index}>
                <EachLink btn={btn} path={path} label={label} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="flex items-center border-b-2">
        <CustomContainer>
          <Links />
        </CustomContainer>
      </div>
    </div>
  );
}
