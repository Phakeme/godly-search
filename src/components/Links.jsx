import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All" },
  { url: "/images", text: "Images" },
  { url: "/videos", text: "Vidoes" },
  { url: "/news", text: "News" },
];

export const Links = () => {
  let activeStyle = {
    color: "#1a73e8",
    borderBottom: "3px solid #1a73e8",
    padding: "10px 12px 10px 10px",
  };
  let activeClassName = {
    padding: "10px 12px 10px 10px",
  };

  return (
    <div className="flex items-top text-sm">
      {links.map(({ url, text }) => (
        <NavLink
          key={text}
          to={url}
          style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          className=""
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
