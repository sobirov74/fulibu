import React, { useState } from "react";
import styles from "./header.module.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropDown = ({ item1, item2 }) => {
  const [toggle, setToggle] = useState(false);

  const options = [item1, item2];

  const defaultOption = options[0];

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [selected, setSelect] = useState(defaultOption);

  const handleSelect = (choose) => {
    setSelect(choose);
    setToggle(false);
  };

  return (
    <div>
      <Dropdown
        className={styles.header__nav_select}
        options={options}
        onChange={handleSelect}
        value={selected}
        placeholder="Select an option"
      />
      ;
    </div>

    // <div className={styles.header__nav_select}>
    //   <div className={styles.header__nav_optionBox}>
    //     <button className={styles.header__nav_selectBtn} onClick={handleToggle}>
    //       {selected}
    //     </button>

    //     {toggle && (
    //       <div className={styles.header__nav_selectBox}>
    //         <span
    //           className={styles.header__nav_selectOption}
    //           onClick={() => handleSelect(item1)}
    //         >
    //           {item1}
    //         </span>
    //         <span
    //           className={styles.header__nav_selectOption}
    //           onClick={() => handleSelect(item2)}
    //         >
    //           {item2}
    //         </span>
    //       </div>
    //     )}
    //   </div>
    // </div>

    // const [toggle, setToggle] = useState(false);

    // const handleToggle = () => {
    //   setToggle(!toggle);
    // };

    // const [selected, setSelect] = useState(item1);

    // const handleSelect = (choose) => {
    //   setSelect(choose);
    //   setToggle(false);
    // };
    //
  );
};

export default DropDown;
