import React,{ useState } from "react";

import DropDown from "./Ddown";
import { 
    CategoryMenuBox,
    ChevronDown,
} from "./Dropdown.styles";

const Dropdown =()=> {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectItem, setSelectItem] = useState<string>("");
    const items = () => {
    return ["Hong Kong", "London", "New York City", "Paris"];
    };
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
    return(
        <>
            <CategoryMenuBox onClick={(): void => toggleDropDown()}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
            }>
                <div>{selectItem? selectItem: "Title"} </div> {!selectItem&&
                <ChevronDown></ChevronDown>
                }
                {showDropDown && (
                <DropDown
                    items={items()}
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
