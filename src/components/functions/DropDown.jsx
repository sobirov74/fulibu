  import React, { useState } from "react";

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
    <div className="header__nav-select">
      <div className="header__nav-optionBox">
        <button className="header__nav-selectBtn" onClick={handleToggle}>
          {selected}
        </button>

        {toggle && (
          <div className="header__nav-selectBox">
            <span
              className="header__nav-selectOption"
              onClick={() => handleSelect(item1)}
            >
              {item1}
            </span>
            <span
              className="header__nav-selectOption"
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
