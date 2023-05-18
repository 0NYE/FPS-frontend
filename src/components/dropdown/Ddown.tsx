import React, { useEffect, useState } from "react";

import {
  DropDownBoxWrap,
  DropDownContainer,
  ListItem,
} from "./Dropdown.styles";

type DropDownProps = {
  items: string[];
  showDropDown: boolean;
  toggleDropDown: () => void;
  itemSelection: (text: string) => void;
};

const DropDown: React.FC<DropDownProps> = ({
  items,
  itemSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (item: string): void => {
    itemSelection(item);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <DropDownBoxWrap>
        <DropDownContainer
          className={showDropDown ? "dropdown" : "dropdown active"}
        >
          {items &&
            items.map((item: string, index: number): JSX.Element => {
              return (
                <ListItem
                  key={index}
                  onClick={(): void => {
                    onClickHandler(item);
                  }}
                >
                  {item}
                </ListItem>
              );
            })}
        </DropDownContainer>
      </DropDownBoxWrap>
    </>
  );
};

export default DropDown;
