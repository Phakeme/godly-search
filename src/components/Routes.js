import React from "react";
import Results from "./Results";
import Images from "./Images";
import { Routes, Route } from "react-router-dom";

const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route axact path="/">
          {/* <Navigate to="/search" /> */}
        </Route>
        <Route axact path="/search" element={<Results />}></Route>
        <Route axact path="/images" element={<Images />}></Route>
      </Routes>
    </div>
  );
};

export default NavRoutes;
