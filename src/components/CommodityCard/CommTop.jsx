import React from "react";
import styles from "./commtop.module.scss";
import pricetag from "../../assets/images/Commodities/pricetag.svg";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import book from "../../assets/images/Commodities/book.svg";
import Rating from "../Rating/Rating";
// import { useParams } from "react-router";
// import { useSelector } from "react-redux";
// import { postSelector } from "../../redux/postReducer";

const CommTop = ({ data }) => {
  const [save, setSave] = useState(false);
  // console.log(data);

  const handleSave = () => {
    setSave(!save);
  };

  const ChangeSaveBtn = () => {
    if (!save) {
      return (
        <Link
          to=""
          className={`${styles.commRightBtn} ${styles.active}`}
          onClick={handleSave}
        >
          <FaRegBookmark className={styles.commRightBtnIcon} /> Добавить в
          библиотеку
        </Link>
      );
    } else {
      return (
        <Link to="" className={`${styles.commRightBtn}`} onClick={handleSave}>
          <FaBookmark className={styles.commRightBtnIcon} /> В библиотеке
        </Link>
      );
    }
  };
  // console.log(data);
  // return null;
  return (
    <div className="container">
      <div className="mt-5">
        <div className={styles.commRightTitleBox}>
          <h3 className={styles.commRightTitle}>{data.name}</h3>
          <p className={styles.commRightLabel}>
            Парадоксальный способ жить счастливо
          </p>
        </div>
        <div className={styles.comm}>
          <div className={styles.commLeft}>
            <div className={styles.commLeftBox}>
              <img src={data.image[0]} alt="" />
            </div>

            <Link to="/" className={styles.commLeftLink}>
              <img src={pricetag} alt="" /> {data.price} USD
            </Link>
          </div>

          <div className={styles.commRight}>
            <div className={styles.commRightTitleBox1}>
              <h3 className={styles.commRightTitle}>{data.name}</h3>

              <p className={styles.commRightLabel}>
                Парадоксальный способ жить счастливо
              </p>
            </div>
            <div className={styles.commRightBox}>
              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Автор:</h4>
                <p className={styles.commRightInfo}>{data.author.name}</p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Рейтинг:</h4>
                <div className={styles.commRightStars}>
                  <Rating data={data.rating} />
                  <h4 className={styles.commRightRate}>{data.rating}</h4>
                </div>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Дата выхода:</h4>
                <p className={styles.commRightInfo}>{data.publish_date}</p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Объем:</h4>
                <p className={styles.commRightInfo}>{data.size} стр.</p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Жанр:</h4>
                <p className={styles.commRightFormat}>
                  Зарубежная психология, Саморазвитие / личностный рост,
                  Социальная психология
                </p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>Теги:</h4>
                <p className={styles.commRightFormat}>
                  Бестселлеры «New York Times», Борьба со стрессом, Поиск
                  предназначения, Самореализация
                </p>
              </div>

              <div className={styles.commRightInfos}>
                <h4 className={styles.commRightType}>
                  Форматы для скачивания:
                </h4>
                <p className={styles.commRightInfo}>fb2, txt, epub, pdf, mp3</p>
              </div>

              <div className={styles.commRightBtns}>
                <Link to="/" className={styles.commRightBtn1}>
                  Текст
                </Link>
                <Link to="/" className={styles.commRightBtn2}>
                  Аудио
                </Link>
              </div>
            </div>

            <div className={styles.commRightLinks}>
              <ChangeSaveBtn />

              <Link to="/" className={styles.commRightBtn}>
                <img src={book} alt="" /> Купить{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.commDescrTitle}>Описание книги</h2>

      <p className={styles.commDescr}>{data.description}</p>
    </div>
  );
};

export default CommTop;
