import React, { useState } from "react";
import styles from "./search.module.scss";
import Dropdown from "react-dropdown";

const ChooseDropDown = ({ items, label }) => {
  const options = items;
  console.log(options[0]);
  const defaultOption = options[0]

  console.log(defaultOption);

  const [select, setSelect] = useState(defaultOption);
  const [toggle, setToggle] = useState(false);



  const handleSelect =(choose)=> {
      setSelect(choose)
      setToggle(!toggle)

  }

  return (
    <div className={styles.drop}>
      <div className={styles.dropItem}>
        <p className={styles.dropLabel}>{label}</p>
        <Dropdown
          className="search-dropDown"
          value={select}
          options={options}
          onChange={handleSelect}
        />
      </div>
    </div>
  );
};

export default ChooseDropDown;
