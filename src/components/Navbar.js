import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <Link to="/">Poogle</Link>
        <Link to="/images">Images</Link>
        <Link to="/search">Search</Link>
      </header>
    </div>
  );
};

export default Navbar;
