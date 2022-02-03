import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainRegister from "./components/MainRegister";
import MainXits from "./components/MainXits/MainXits";

const App = () => (
  <>
    <Header />
    <main className="main">
      <MainRegister />
      <MainXits />
    </main>
  </>
);

export default App;
