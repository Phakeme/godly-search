import React from "react";
import Results from "../components/Results";
import Navbar from "../components/NavbarResults";
import Footer from "../components/Footer";
import { CustomContainer } from "../components/util/CustomContainer";

export const ResultsContainer = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-screen ">
        <Navbar />
        <div className="grow container mx-auto  xl:pl-36 px-8">
          <Results />
        </div>
        <Footer />
      </div>
    </div>
  );
};
