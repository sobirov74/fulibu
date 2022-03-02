import React, { useState } from "react";
import MainTop from "../MainTop/MainTop";
import styles from "./search.module.scss";
import logoGif from "../../assets/images/logoGif.gif";
import searchIcon from "../../assets/images/searchIcon.svg";
import ChooseDropDown from "./ChooseDropDown";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import toRight from "../../assets/images/toRight.svg";
import cardStyles from "../MainRegister/mainregister.module.scss";

import { books } from "../../LibraryOfBooks/Books";

const Search = () => {
  const years = ["all"];
  const currYear = new Date().getFullYear();

  for (let i = 2017; i <= currYear; i++) {
    years.push(i);
  }

  const cards = books;

  return (
    <>
      <main className="main">
        <div className="container mt-5">
          <div className={styles.top}>
            <h2 className={styles.topTitle}>НАЙДИ СЕБЕ КНИГУ ПО ДУШЕ</h2>

            <img src={logoGif} className={styles.topImg} alt="" />
          </div>

          <div className={styles.searchBox}>
            <div className={styles.searchInputBox}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Введите название книги"
              />
              <button className={styles.searchBtn} type="submit">
                <img src={searchIcon} alt="" /> Найти
              </button>
            </div>
            <div className={styles.searchDropDowns}>
              <ChooseDropDown
                className={styles.searchDropDown}
                label={"Жанры"}
                items={["all", "comedy", "dramma", "detective", "sitcom"]}
              />
              <ChooseDropDown
                className={styles.searchDropDown}
                label={"Дата выпуска"}
                items={years}
              />
              <ChooseDropDown
                className={styles.searchDropDown}
                label={"Тип"}
                items={["all", "smlkasl", "slkdjk", "lskdsl", "kslakslak"]}
              />
              <ChooseDropDown
                className={styles.searchDropDown}
                label={"Рейтинг"}
                items={["all", "1", "2", "3", "4", "5"]}
              />
            </div>
          </div>

          <h2 className={styles.cardsTitle}>Результаты</h2>

          <div className={styles.dropCards}>
            {cards.map((book) => {
              return (
                <div className={styles.dropCard} key={book.id}>
                  <div className={cardStyles.main_recomend_card}>
                    <h4 className={cardStyles.main_recomend_cardAuthor}>
                      {book.author}
                    </h4>

                    <div className={cardStyles.main_recomend_cardImgBox}>
                      <img src={book.img} alt="" />

                      <div className={cardStyles.main_recomend_cardBtns}>
                        <Link
                          to="/"
                          className={cardStyles.main_recomend_cardLink1}
                        >
                          Текст
                        </Link>
                        <Link
                          to="/"
                          className={cardStyles.main_recomend_cardLink2}
                        >
                          Аудио
                        </Link>
                      </div>
                    </div>
                    <h4 className={cardStyles.main_recomend_cardTitle}>
                      {book.title}
                    </h4>

                    <div className={cardStyles.main_recomend_cardStars}>
                      <FaStar className={cardStyles.main_recomend_cardStar} />
                      <FaStar className={cardStyles.main_recomend_cardStar} />
                      <FaStar className={cardStyles.main_recomend_cardStar} />
                      <FaStar className={cardStyles.main_recomend_cardStar} />
                      <FaStar className={cardStyles.main_recomend_cardStar} />
                    </div>

                    <div className={cardStyles.main_recomend_cardPriceBox}>
                      <p className={cardStyles.main_recomend_cardPrice}>
                        {book.price}
                      </p>

                      <Link
                        to={`/CommodityCard/${book.id}`}
                        className={cardStyles.main_recomend_cardPriceLink}
                      >
                        <img src={toRight} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;
