import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ResultsContextProvider } from "./Context/ResultsContextProvider";
import createTheme from "@material-ui/core/styles/createTheme";
import { ThemeProvider } from "@material-ui/core/styles";

import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    phakeme: {
      main: "#blue",
    },
  },
});

ReactDOM.render(
  <ResultsContextProvider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  </ResultsContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
