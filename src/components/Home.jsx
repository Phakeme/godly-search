import React from "react";
import Logo from "../images/Google-Logo.wine.svg";

const Home = () => {
  return (
    <div className="flex flex-col bg-red-100">
      <div>
        <img width="272px" src={Logo} alt="" />
      </div>
      <div>
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
      </div>
      <div>Feeling lucky</div>
      <div>Lan links</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
