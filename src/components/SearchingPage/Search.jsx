import React, { useState, useEffect } from "react";
import styles from "./search.module.scss";
import logoGif from "../../assets/images/logoGif.gif";
import searchIcon from "../../assets/images/searchIcon.svg";
import ChooseDropDown from "./ChooseDropDown";

import { books } from "../../LibraryOfBooks/Books";
import Footer from "./../Footer/Footer";
import PaginateItems from "./PaginateItems";

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
              <img src={searchIcon} alt="" />
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


          <PaginateItems books={cards} itemsPerPage={8}/>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Search;
