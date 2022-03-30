import React from "react";
import Results from "../components/Results";
import Navbar from "../components/NavbarResults";
import Footer from "../components/Footer";

export const ResultsContainer = () => {
  return (
    <div className="">
      <Navbar />
      <Results />
      <Footer></Footer>
    </div>
  );
};
