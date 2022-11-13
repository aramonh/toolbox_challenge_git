import React from "react";

import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Layout from "./components/Layout";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound";
const theme = createTheme({
  palette: {
    primary: {
      light: "#E62117",
      main: "#E62117",
      dark: "#E62117",
      contrastText: "#000",
    },
    secondary: {
      main: "#660F0A",
      light: "#660F0A",
      dark: "#660F0A",
      contrastText: "#000",
    },
    info: {
      main: "#B31A12",
      light: "#B31A12",
      dark: "#B31A12",
      contrastText: "#000",
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
