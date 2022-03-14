import React, { useEffect, useState } from "react";
import styles from "./search.module.scss";
import logoGif from "../../assets/images/logoGif.gif";
import searchIcon from "../../assets/images/searchIcon.svg";
import ChooseDropDown from "./ChooseDropDown";

import Footer from "./../Footer/Footer";
import PaginateItems from "./PaginateItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postActions";
import Loading from "../Loading/Loading";
import ApiService from "../../ApiService";

const years = ["all"];
const currYear = new Date().getFullYear();

for (let i = 2016; i <= currYear; i++) {
  years.push(i);
}

const useInputValue = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const Search = () => {
  const [lastPage, setLastPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [books, setBooks] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [typeId, setTypeId] = useState(0);
  const [sort, setSort] = useState(0);
  // const [startDate, setStartDate] = useState(new Date());
  const [dateChosen, setDateChosen] = useState(false);
  const [currentPage, setCurrentPge] = useState(1);

  const input = useInputValue();

  const { loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const fetchData = () => fetchPosts();

  const searchItems = (e) => {
    if (e) e.preventDefault();
    const body = {
      page:
        sort !== 0 || dateChosen > 0 || categoryId > 0 || typeId > 0
          ? "1"
          : currentPage,
      ...(typeId > 0 && { type: typeId }),
      ...(input.value.length > 0 && { keyword: input.value }),
    };

    ApiService.getResources("/search?" + new URLSearchParams(body)).then(
      (val) => {
        if (val) {
          setBooks(val.data);
          setLastPage(val.last_page);
          if (total !== val.total) setTotal(val.total);
        } else {
          setBooks([]);
        }
      }
    );
  };

  useEffect(
    (prevProps, prevState) => {
      fetchData();
      searchItems();
    },
    [currentPage]
  );

  if (loading || error) {
    return <Loading loading={loading} error={error} reload={fetchData} />;
  }

  return (
    <>
      <main className="main pt-3">
        <div className="container">
          <div className={styles.top}>
            <h2 className={styles.topTitle}>НАЙДИ СЕБЕ КНИГУ ПО ДУШЕ</h2>

            <img src={logoGif} className={styles.topImg} alt="" />
          </div>

          <div className={styles.searchBox}>
            <form
              onSubmit={(e) => searchItems(e)}
              className={styles.searchInputBox}
            >
              <input
                {...input}
                type="text"
                className={styles.searchInput}
                placeholder="Введите название книги"
              />
              <img src={searchIcon} alt="" />
              <button className={styles.searchBtn}>
                <img src={searchIcon} alt="" /> Найти
              </button>
            </form>

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
                items={["all", "Text", "Audio"]}
              />
              <ChooseDropDown
                className={styles.searchDropDown}
                label={"Рейтинг"}
                items={["all", "1", "2", "3", "4", "5"]}
              />
            </div>
          </div>

          <h2 className={styles.cardsTitle}>Результаты</h2>
          <PaginateItems
            search={input}
            books={books}
            itemsPerPage={10}
            current={currentPage}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Search;
