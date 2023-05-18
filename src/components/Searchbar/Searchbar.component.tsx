import React from "react";

import {
  SearchWrapper,
  SingleSearch,
  Glasses,
  GlassesCircle,
  GlassesLine,
} from "@/components/Searchbar/Searchbar.styles";

const Search = () => {
  return (
    <>
      <SearchWrapper>
        <SingleSearch />
        <Glasses>
          <GlassesCircle />
          <GlassesLine />
        </Glasses>
      </SearchWrapper>
    </>
  );
};

export default Search;
