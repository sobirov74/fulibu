import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ParallaxLayer from "./components/Parallax/ParallaxLayer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/Header/LoginPage/LoginPage";
import CommCard from "./components/CommodityCard/CommCard";

const App = () => (
  <BrowserRouter>
    <ParallaxLayer />
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/CommodityCard/:id" element={<CommCard />} />
    </Routes>

    {/* <Footer /> */}
  </BrowserRouter>
);

export default App;
