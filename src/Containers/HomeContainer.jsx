import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const HomeContainer = () => {
  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col h-screen">
        <div className="">
          <Navbar />
        </div>
        <div className="grow">
          <Home />
        </div>
        <div className="bg-yellow-500 item-end">
          <Footer />
        </div>
      </div>
    </div>
  );
};
