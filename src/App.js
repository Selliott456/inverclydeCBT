import React from "react";
import "./styles/style.scss";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Areas from "./components/Areas";
import Navbar from "./components/Navbar";
import Fees from "./components/Fees";
import Services from "./components/Services";
import Willwork from "./components/Willwork";
import Footer from "./components/Footer";
import Mobilenav from "./components/Mobilenav";

const App = () => (
  <BrowserRouter>
    <Mobilenav pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/services" element={<Services />} />
      <Route path="/willwork" element={<Willwork />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
