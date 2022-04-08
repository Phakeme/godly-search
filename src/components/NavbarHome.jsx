import React from "react";
import { EachLink } from "./Navigations/EachLink";

export default function AppBar() {
  const info = [
    { label: "Gmail", path: "/", btn: false },
    { label: "Images", path: "/", btn: false },
    { label: "Sign in", path: "/", btn: true },
  ];

  return (
    <header className="container mx-auto">
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
