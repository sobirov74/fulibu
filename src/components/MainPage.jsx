import React from "react";
import Footer from "./Footer/Footer";
import LoginPage from "./Header/LoginPage/LoginPage";
import MainNews from "./MainNews/MainNews";
import MainRegister from "./MainRegister/MainRegister";
import MainTop from "./MainTop/MainTop";

const MainPage = () => {
  return (
    <>
    <main>
      <MainTop />
      <MainRegister />
      <MainNews />
    </main>

    <Footer/>
    </>
  );
};

export default MainPage;
