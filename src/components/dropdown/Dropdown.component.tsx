import React, { useState } from "react";

import DropDown from "./Ddown";
import { CategoryMenuBox, ChevronDown } from "./Dropdown.styles";

interface itemProps {
  items: string[];
}

const Dropdown: React.FC<itemProps> = ({ items }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const itemSelection = (item: string): void => {
    setSelectedItem(item);
  };
  return (
    <>
      <CategoryMenuBox
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectedItem ? selectedItem : "Title"} </div>{" "}
        {!selectedItem && <ChevronDown></ChevronDown>}
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
