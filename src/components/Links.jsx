import React from "react";
import { NavLink } from "react-router-dom";
import NewsIcon from "../images/newspaper-folded-svgrepo-com.svg";
import VideoIcon from "../images/video-831.svg";
import ImagesIcon from "../images/photos-10602.svg";
import SearchIcon from "../images/search-3076.svg";

const links = [
  { url: "/search", icon: SearchIcon, text: "All" },
  { url: "/image", icon: ImagesIcon, text: "Images" },
  { url: "/videos", icon: VideoIcon, text: "Vidoes" },
  { url: "/news", icon: NewsIcon, text: "News" },
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
      {links.map(({ url, text, icon }) => (
        <NavLink
          key={text}
          to={url}
          style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          className=""
        >
          <div className="flex justify-center">
            <img height="10px" width="20px" src={icon} alt="" />
            <span className="ml-2">{text}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
