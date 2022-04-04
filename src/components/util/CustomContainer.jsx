import React from "react";
import "./style.css";

export const CustomContainer = ({ children }) => {
  return <div className="container mx-auto pl-0 xl:pl-36">{children}</div>;
};
