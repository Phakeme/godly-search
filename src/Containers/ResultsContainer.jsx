import React from "react";
import Results from "../components/Results";
import Navbar from "../components/NavbarResults";
// import Footer from "../components/Footer";
import { CustomContainer } from "../components/util/CustomContainer";

export const ResultsContainer = () => {
  return (
    <div className="">
      <Navbar />
      <CustomContainer>
        <Results />
      </CustomContainer>
      {/* <Footer></Footer> */}
    </div>
  );
};
