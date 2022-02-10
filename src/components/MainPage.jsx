import React from "react";
import MainNews from "./MainNews/MainNews";
import MainRegister from "./MainRegister/MainRegister";
import MainTop from "./MainTop/MainTop";

const MainPage = () => {
  return (
    <>
      <MainTop />
      <MainRegister />
      <MainNews />
    </>
  );
};

export default MainPage;
