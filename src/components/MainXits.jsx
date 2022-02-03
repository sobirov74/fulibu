import { FaStar } from "react-icons/fa";
import toRight from '../../assets/images/toRight.svg'


const MainXits = () => {
  return (
    <div className="main__xits">
      <div className="container">
        <h3 className="main__xits-title"></h3>

        <div className="main__xits-slides">
          <div className="main__xits-slide">
            <img src="main__xits-slideImg" alt="" />
            <div className="main__xits-content">
              <h4 className="main__xits-contentTitle"></h4>
              <span className="main__xits-contentAuthor"></span>

              <div className="main_recomend-cardStars">
                <FaStar className="main_recomend-cardStar" />
                <FaStar className="main_recomend-cardStar" />
                <FaStar className="main_recomend-cardStar" />
                <FaStar className="main_recomend-cardStar" />
                <FaStar className="main_recomend-cardStar" />
              </div>

              <p className="main__xits-contentDescr"></p>

              <div className="main_recomend-cardPriceBox">
          <p className="main_recomend-cardPrice">120000</p>
          <a href="" className="main_recomend-cardPriceLink">
            <img src={toRight} alt="" />
          </a>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainXits;
