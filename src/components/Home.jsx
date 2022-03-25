import React from "react";
import Logo from "../images/Google-Logo.wine.svg";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-red-100 w-full">
        <div className="flex justify-center">
          <img width="272px" src={Logo} alt="" />
        </div>
        <div className="p-8">
          <div>
            <input
              placeholder="Search…"
              style={{
                width: "100%",
                height: "100%",
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>Feeling lucky</div>
          <div>Lan links</div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
