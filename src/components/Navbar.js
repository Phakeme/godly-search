import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          Login
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header>
//       <Link to="/">Poogle</Link>
//       <Link to="/images">Images</Link>
//       <Link to="/search">Search</Link>
//     </header>
//   );
// };

// export default Navbar;
