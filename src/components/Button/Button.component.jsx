import { StyledButton } from "./Button.styles";

const Button = ({ buttonColor, content }) => {
  return (
    <>
      {content.map((item, index) => (
        <StyledButton 
        buttonColor={buttonColor} 
        key={index}>
          {item}
        </StyledButton>
      ))}
    </>
  );
};

export default Button;
