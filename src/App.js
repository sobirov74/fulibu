import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ParallaxLayer from "./components/Parallax/ParallaxLayer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

const App = () => (
  <BrowserRouter>
    <ParallaxLayer />
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
