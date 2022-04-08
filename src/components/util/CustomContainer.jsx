import React from "react";
import "./style.css";

export const CustomContainer = ({ children }) => {
  return <div className="container mx-auto xl:pl-36 px-8">{children}</div>;
};
