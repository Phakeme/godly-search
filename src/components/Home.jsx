import React from "react";
import Logo from "../images/Google-Logo.wine.svg";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  search: {
    bordeRadius: "20px !important",
    border: "1px solid #dadce0",
    width: "100%",
  },
  inputInput: {
    width: "100%",
    background: "red",
  },
}));

const Home = () => {
  const classes = Styles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "580px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width="272px" src={Logo} alt="" />
        </div>
        <div style={{ margin: 20 }}>
          <div
            style={{
              borderRadius: "50px",
              border: "1px solid #dadce0",
              width: "100%",
              height: 30,
              padding: 10,
            }}
          >
            <InputBase
              placeholder="Search…"
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: 10,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
        <div>Feeling lucky</div>
        <div>Lan links</div>
      </div>
    </div>
  );
};

export default Home;
