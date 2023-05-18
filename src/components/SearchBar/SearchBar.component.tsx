import React from "react";

import { ReactComponent as Glass } from "@/assets/images/glass.svg";
import {
  SearchBarLayout,
  SearchBarInput,
  SvgContainer,
} from "@/components/SearchBar/SearchBar.styles";

const SearchBar = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <SearchBarLayout>
      <SearchBarInput {...props} />
      <SvgContainer>
        <Glass />
      </SvgContainer>
    </SearchBarLayout>
  );
};

export default SearchBar;
