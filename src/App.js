import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import ParallaxLayer from "./components/Parallax/ParallaxLayer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CommCard from "./components/CommodityCard/CommCard";
import Search from "./components/SearchingPage/Search";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ParallaxLayer />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/CommodityCard/:id" element={<CommCard />} />.
          <Route path="/search" element={<Search />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
