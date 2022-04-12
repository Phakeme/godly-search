import React from "react";
import Home from "../components/Home";
import Navbar from "../components/NavbarHome";
import Footer from "../components/Footer";

export const HomeContainer = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen">
        <div className="">
          <Navbar />
        </div>
        <div className="grow px-4">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};
