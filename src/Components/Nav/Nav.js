import React from "react";
import styled from "styled-components";
import Button from "../../Components/GlobalStyles/Button";
import { Link } from "react-router-dom";
import Container from "../GlobalStyles/Container";
const Nav = () => {
  return (
    <Navigation>
      <Container>
        <h1>
          <Link to="/"> Ahmad jama </Link>
        </h1>
        <Button size="1rem">
          <Link to={"/create-article"}>Create Article</Link>
        </Button>
      </Container>
    </Navigation>
  );
};

export default Nav;

const Navigation = styled.nav`
  background: rgb(92, 91, 237);
  background: linear-gradient(
    110deg,
    rgba(92, 91, 237, 1) 0%,
    rgba(219, 83, 238, 1) 80%
  );
  padding: 1rem 0;
  margin: 0 0 3rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-family: "Courgette", cursive, sans-serif;
    font-size: 2rem;
    color: #db53ee;
  }
`;
