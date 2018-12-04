import React, { Component } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "./pages/Index";
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h6: { color: `inherit` },
    subtitle1: { color: `inherit` }
  },
  palette: {
    primary: {
      main: `#FFF`,
      contrastText: `#282828`,
      background: { default: `#f8f9fb` },
      text: { primary: `#353535` }
    },
    secondary: { main: "#0D65FF" },
    divider: `#E1E1E6`
  },
  direction: "ltr"
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <CssBaseline />
            <Container />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
