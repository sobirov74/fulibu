import React, { useState, useEffect } from "react";
import styles from "./search.module.scss";
import ReactPaginate from "react-paginate";
import Cards from "./RenderCards";
import { rightArrow, leftArrow } from "./../arrows/Arrows";

const PaginateItems = ({ books, itemsPerPage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(books.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(books.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, books]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Cards cards={currentItems} />
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel={rightArrow}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={leftArrow}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginateItems;
