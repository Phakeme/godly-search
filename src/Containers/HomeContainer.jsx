import React from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const HomeContainer = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};
