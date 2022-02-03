import recomendImg1 from "../../assets/images/recomendImg1.png";
import recomendImg2 from "../../assets/images/recomendImg2.png";
import recomendImg3 from "../../assets/images/recomendImg3.png";
import recomendImg4 from "../../assets/images/recomendImg4.png";
import recomendImg5 from "../../assets/images/recomendImg5.png";
import toRight from '../../assets/images/toRight.svg'
import { FaStar } from "react-icons/fa";

const recomendationsList = [
  {
      id:'1',
    author: "Мария Метлицкая",
    img: recomendImg1,
    title: "Цветы и птицы Цветы и птицы ",
    price: "1 222 230 UZS",
  },
  {
    id:'2',
    author: "Макс Глебов",
    img: recomendImg2,
    title: "Асиметричный",
    price: "1 222 230 UZS",
  },
  {
    id:'3',
    author: "Татьяна Устинова",
    img: recomendImg3,
    title: "Пляжный детектив",
    price: "1 222 230 UZS",
  },
  {
    id:'4',
    author: "Эрика Адамс",
    img: recomendImg4,
    title: "Похищенная для монстра",
    price: "1 222 230 UZS",
  },
  {
    id:'5',
    author: "Анастасия Маркова",
    img: recomendImg5,
    title: "Анастасия Маркова",
    price: "1 222 230 UZS",
  },
];

const MainRecomendations = () => {
  return (
    <div className="main_recomend-cards">
       { recomendationsList.map(book => (
           <div className="main_recomend-card" key={book.id}>
        <h4 className="main_recomend-cardAuthor">{book.author}</h4>

        <div className="main_recomend-cardImgBox">
          <img src={book.img} alt="" />

          <div className="main_recomend-cardBtns">
            <a href="" className="main_recomend-cardLink1">
              Текст
            </a>
            <a href="" className="main_recomend-cardLink2">
              Аудио
            </a>
          </div>
        </div>
        <h4 className="main_recomend-cardTitle">
          {book.title}
        </h4>

        <div className="main_recomend-cardStars">
          <FaStar className="main_recomend-cardStar" />
          <FaStar className="main_recomend-cardStar" />
          <FaStar className="main_recomend-cardStar" />
          <FaStar className="main_recomend-cardStar" />
          <FaStar className="main_recomend-cardStar" />
        </div>

        <div className="main_recomend-cardPriceBox">
          <p className="main_recomend-cardPrice">{book.price}</p>
          <a href="" className="main_recomend-cardPriceLink">
            <img src={toRight} alt="" />
          </a>
        </div>
      </div>
       ))}
      
    </div>
  );
};

export default MainRecomendations;
