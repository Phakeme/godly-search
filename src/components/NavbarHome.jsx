import React from "react";
import { Link } from "react-router-dom";
/*
--Separate Data from the rest of the Component
*/
export default function AppBar() {
  // I created the info an array of objects and stored the label, path and type btn true or false
  const info = [
    { label: "Gmail", path: "/", btn: false },
    { label: "Images", path: "/", btn: false },
    { label: "Gmail", path: "/", btn: true },
  ];

  // Made EachLink component and render btn conditionally
  const EachLink = ({ btn, path, label }) => {
    return (
      <Link to={path}>
        {btn ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            {label}
          </button>
        ) : (
          label
        )}
      </Link>
    );
  };

  return (
    <header className="container mx-auto ">
      <nav className="w-full">
        <ul className="flex items-center lg:justify-end  justify-center h-12">
          {info.map(({ btn, label, path }, index) => (
            <li className="ml-2 pl-4 text-sm" key={index}>
              <EachLink btn={btn} path={path} label={label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
