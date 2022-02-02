import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import MainRegister from "./components/MainRegister";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <MainRegister />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
