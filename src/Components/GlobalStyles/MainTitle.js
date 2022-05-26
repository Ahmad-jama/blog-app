import React from "react";
import styled from "styled-components";

const MainTitle = ({ h1, p, h1Color, pColor, backColor }) => {
  return (
    <TitleContainer h1Color={h1Color} pColor={pColor} backColor={backColor}>
      <h1>{h1}</h1>
      <p>{p} </p>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  padding-left: 1rem;

  &::before {
    content: "";
    background-color: ${(props) => props.backColor || "white"};
    width: 5px;
    height: 100%;
    position: absolute;
    left: 0;
  }
  h1 {
    margin-bottom: 10px;
    color: ${(props) => props.h1Color || "white"};
    padding-left: 15px;
    font-size: clamp(2rem, 6vw, 3.5rem);
  }
  p {
    padding-left: 15px;
    color: ${(props) => props.pColor || "white"};
    max-width: 41rem;
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
`;

export default MainTitle;
