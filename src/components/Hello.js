import { useState } from "react";
import styled, { keyframes } from "styled-components";

const letterAnimation = keyframes`
    0% {transform: rotate(0deg);}
    20% {transform: rotate(-45deg);}
    100% {transform: rotate(-45deg);}
`;

const TextContainer = styled.div`
  position: absolute;
  top: 25%;
  display: flex;
  font-size: 10em;
  
`;

const LetterContainer = styled.div`
  &.fallanimation {
    transition: transform 1s;
    transform: translateY(942px);
  }
  
  p {
    font-weight: ${({bold}) => bold ? 600: 300};
    &.fallanimation {
      animation: ${letterAnimation} ease-out 1s forwards;
    }
  }
`;

const word = "Hello";
const d3 = "D3"
const d3Array = d3.split("");
const wordArray = word.split("");
const height = window.innerHeight;

export const Hello = () => {
  return (
    <TextContainer>
      {wordArray.map((d) => (
        <Letter letter={d} />
      ))}
      {d3Array.map((d) => (
        <Letter letter={d} bold={true}/>
      ))}
    </TextContainer>
  );
};

const Letter = ({ letter, bold}) => {
  const [visible, setVisible] = useState(true);

  const handleMouseEnter = () => {
    setVisible((prev) => !prev);
  };

  return (
    <LetterContainer className={!visible && "fallanimation"} height={height} bold={bold}>
      <p
        className={!visible && "fallanimation"}
        onMouseEnter={() => handleMouseEnter()}
      >
        {letter}
      </p>
    </LetterContainer>
  );
};
