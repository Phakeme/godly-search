import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const HomeContainer = () => {
  return (
    <div className="container mx-auto h-screen bg-gray-500">
      <div className="flex flex-col">
        <div className="flex-none">
          <Navbar />
        </div>
        <div className="grow">
          <Home />
        </div>
        <div className="flex-none">
          <Footer />
        </div>
      </div>
    </div>
  );
};
