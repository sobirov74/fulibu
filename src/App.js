import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainRegister from "./components/MainRegister/MainRegister";
import MainXits from "./components/MainXits/MainXits";
import MainNews from './components/MainNews/MainNews';
import Footer from "./components/Footer/Footer";

const App = () => (
  <>
    <Header />
    <main className="main">
      <MainRegister />
      <MainXits />
      <MainNews />
    </main>

      <Footer />
  </>
);

export default App;
