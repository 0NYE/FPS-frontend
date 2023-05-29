import React from "react";

import { ReactComponent as Glass } from "@/assets/images/glass.svg";
import {
  SearchBarLayout,
  SearchBarInput,
  SvgContainer,
} from "@/components/SearchBar/SearchBar.styles";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
}

const SearchBar = ({ inputRef, ...props }: SearchBarProps) => {
  return (
    <SearchBarLayout>
      <SearchBarInput ref={inputRef} {...props} />
      <SvgContainer>
        <Glass />
      </SvgContainer>
    </SearchBarLayout>
  );
};

export default SearchBar;
