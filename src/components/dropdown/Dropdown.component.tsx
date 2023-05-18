import React, { useState } from "react";

import DropDown from "./Ddown";
import { CategoryMenuBox, ChevronDown } from "./Dropdown.styles";

interface itemProps {
  items: string[];
}

const Dropdown: React.FC<itemProps> = ({ items }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>("");

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const itemSelection = (item: string): void => {
    setSelectItem(item);
  };
  return (
    <>
      <CategoryMenuBox
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectItem ? selectItem : "Title"} </div>{" "}
        {!selectItem && <ChevronDown></ChevronDown>}
        {showDropDown && (
          <DropDown
            items={items}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            itemSelection={itemSelection}
          />
        )}
      </CategoryMenuBox>
    </>
  );
};

export default Dropdown;
