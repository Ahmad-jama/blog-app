import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.back || "white"};
  border: none;
  border-radius: 15px;
  font-size: ${(props) => props.size};
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  place-items: center;
  padding-right: 0.5rem;
  svg {
    color: white;
  }
  a {
    background-color: ${(props) => props.back || "white"};
    border: none;
    font-weight: bold;
    border-radius: 15px;
    font-size: ${(props) => props.size};
    display: grid;
    grid-template-columns: auto auto;
    gap: 5px;
    place-items: center;
    color: ${(props) => props.color || "#7259ed"};
    padding: 0.5rem;
    padding-right: 0;

    color: ${(props) => props.color || "#7259ed"};
  }
`;
export default Button;
