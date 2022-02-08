import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainRegister from "./components/MainRegister/MainRegister";
import MainNews from './components/MainNews/MainNews';
import Footer from "./components/Footer/Footer";
import MainTop from "./components/MainTop/MainTop";
import ParallaxLayer from "./components/MainTop/ParallaxLayer";

const App = () => (
  <>
  <ParallaxLayer />
    <Header />
    <main className="main">
      <MainTop />
      <MainRegister />
      <MainNews />
    </main>

      <Footer />
  </>
);

export default App;
