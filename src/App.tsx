import React from "react";
import logo from "./logo.svg";
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderComponent, LandinPage, AboutUs } from "./basmodule";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HeaderNav from "./components/layout/HeaderNav";
import FooterBar from "./components/layout/FooterBar";

const App = () => {
  return (
         <Router>
            {/* <HeaderComponent /> */}
            <HeaderNav/>
            <div className="body-center">
            <Route exact path="/">
              <LandinPage />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/landingpage" component={LandingPage} />
            </div>
            <FooterBar/>
          </Router>
  );
}

export default App;
