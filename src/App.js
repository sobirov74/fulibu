import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import MainRegister from "./components/MainRegister";
import MainXits from "./components/MainXits";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <MainRegister />
          <MainXits />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
