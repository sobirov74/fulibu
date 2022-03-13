import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import ParallaxLayer from "./components/Parallax/ParallaxLayer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CommCard from "./components/CommodityCard/CommCard";
import Search from "./components/SearchingPage/Search";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./redux/store";
import Confirm from "./components/LoginPage/Confirm";
import CreateAcc from "./components/LoginPage/CreateAcc";
import WelcomingPage from "./components/LoginPage/WelcomingPage";
import { PersistGate } from "redux-persist/integration/react";
import Loading from './components/Loading/Loading';

const App = () => {
  // const { token } = useSelector((state) => state.posts);

  // useEffect(() => {
  //   ()
  // })

  // console.log(token);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <BrowserRouter>
          <div className="wrap">
            <ParallaxLayer />
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/CommodityCard/:id" element={<CommCard />} />.
              <Route path="/search" element={<Search />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="/createAcc" element={<CreateAcc />} />
              <Route path="/userPage" element={<WelcomingPage />} />
            </Routes>

          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider >
  );
};

export default App;