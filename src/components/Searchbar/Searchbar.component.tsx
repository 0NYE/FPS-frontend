import React from "react";

import { ReactComponent as Glass } from "@/assets/images/glass.svg";
import {
  SearchBarLayout,
  SearchBarInput,
  SvgContainer,
} from "@/components/Searchbar/Searchbar.styles";

const Search = () => {
  return (
    <SearchBarLayout>
      <SearchBarInput />
      <SvgContainer>
        <Glass />
      </SvgContainer>
    </SearchBarLayout>
  );
};

export default Search;
