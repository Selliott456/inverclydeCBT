import React from "react";
import "./styles/style.scss";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Areas from "./components/Areas";
import Navbar from "./components/Navbar";
import Fees from "./components/Fees";
import Services from "./components/Services";
import Willwork from "./components/Willwork";
import Footer from "./components/Footer";
import justhead from "./styles/head.png";
import justtext from "./styles/justtext.png";
import Fade from "react-reveal/Fade";
import Mobilenav from "./components/Mobilenav";
import fulllogo from "./styles/fulllogo.png";

const App = () => (
  <BrowserRouter>
    <Mobilenav pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/areas" element={<Areas />} />
      <Route exact path="/fees" element={<Fees />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/willwork" element={<Willwork />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

const Landing = () => {
  return (
    <main id="landing">
      <div className="landingContent">
        <Fade left>
          <img id="head" className="landingImg" src={justhead} alt="head"></img>
        </Fade>
        <Fade right>
          <div id="landingRight">
            <img
              id="text"
              className="landingImg"
              src={justtext}
              alt="landing"
            ></img>
            <Link id="landingButton" to="/home">
              Come in!
            </Link>
          </div>
        </Fade>
      </div>
      <Fade right>
        <div id="mobileLanding">
          <img
            id="text"
            className="mobileLandingImage"
            src={fulllogo}
            alt="mobile landing"
          ></img>
          <Link id="landingButton" to="/home">
            Come in!
          </Link>
        </div>
      </Fade>
    </main>
  );
};

export default App;
