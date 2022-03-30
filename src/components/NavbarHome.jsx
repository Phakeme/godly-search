import React from "react";
import { Link } from "react-router-dom";
export default function AppBar() {
  return (
    <header className="container mx-auto ">
      <nav>
        <ul className="flex items-center justify-end h-12">
          <li className="ml-2 pl-4 text-sm">
            <Link to="/">Gmail</Link>
          </li>
          <li className="ml-2 pl-4 text-sm">
            <Link to="/">Images</Link>
          </li>
          <li className="ml-2 pl-4 text-sm">
            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Sign in
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
