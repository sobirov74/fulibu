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
    </div>
  );
};

export default DropDown;
