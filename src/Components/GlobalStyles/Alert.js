import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Alert = ({ setShowAlert }) => {
  return (
    <AletStyle>
      <AiOutlineCloseCircle
        size={"1.5rem"}
        color="red"
        onClick={() => {
          setShowAlert(false);
        }}
      />
      <p>you missed some filleds</p>
    </AletStyle>
  );
};

export default Alert;

const AletStyle = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  background-color: #505050;
  color: white;
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: 350px;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  animation: apper 0.5s ease-in-out forwards,
    desiper 0.5s ease-in-out 3s forwards;
  opacity: 0;
  @keyframes apper {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes desiper {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  transform: translateX(-50%);
  z-index: 10000;
  svg {
    cursor: pointer;
  }
`;
