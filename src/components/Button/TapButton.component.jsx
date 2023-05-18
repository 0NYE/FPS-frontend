import React, { useState } from "react";

import { StyledTapButton } from "./Button.styles";

const TapButton = ({ content, isClicked, setIsClicked }) => {

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
    return (
      <>
        {content.map((item,index)=>(
            <StyledTapButton 
            key={index}
            clicked={isClicked} 
            onClick={handleClick}>
            {item}
          </StyledTapButton>
        ))}
      </>
    );
  };

export default TapButton;
