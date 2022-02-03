import React from "react";
import RegSwiper from "./functions/RegSwiper";
import toRight from '../assets/images/toRight.svg'
import MainRecomendations from "./functions/MainRecomendations";

const MainRegister = () => {
  return (
    <React.Fragment>
      <div className="main__registration">
        <div className="container main__reg-box">
          <RegSwiper />
        

        {/* <div className="circle2 main__reg-circle2"></div>
    <div className="circle1 main__reg-circle1"></div> */}

        <div className="main_recomend">
          <h3 className="main_recomend-title">рекомендации</h3>
          <MainRecomendations />
          <MainRecomendations />



          <a href="#" className="findMore-link">Найти больше книг 
            <img src={toRight} alt="" />
          </a>
        </div>

        </div>

      </div>
    </React.Fragment>
  );
};

export default MainRegister;
