import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//style imports
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//import redux things
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

//import thunk
import thunk from "redux-thunk";

//import reducer
import { nbaReducer } from "./util/reducer";

const store = createStore(nbaReducer, applyMiddleware(thunk));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6491A6",
      dark: "#22333B",
      light: "#CBDAE1",
      background: "#0D6491A6",
      border: "#806491A6",
    },
    secondary: {
      main: "#5E503F",
      dark: "#312A21",
      light: "#BEAF9D",
      background: "#1A5E503F",
      border: "#805E503F",
    },
  },
  typography: {
    fontFamily: ["Archivo Black", "Merriweather"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
