  import React, { useState } from "react";
  import styles from './header.module.scss'

const DropDown = ({item1, item2}) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
      setToggle(!toggle);
    };
  
    const [selected, setSelect] = useState(item1);
  
    const handleSelect = (choose) => {
      setSelect(choose);
      setToggle(false);
    };
  return (
    <div className={styles.header__nav_select}>
      <div className={styles.header__nav_optionBox}>
        <button className={styles.header__nav_selectBtn} onClick={handleToggle}>
          {selected}
        </button>

        {toggle && (
          <div className={styles.header__nav_selectBox}>
            <span
              className={styles.header__nav_selectOption}
              onClick={() => handleSelect(item1)}
            >
              {item1}
            </span>
            <span
              className={styles.header__nav_selectOption}
              onClick={() => handleSelect(item2)}
            >
              {item2}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
