import styled from "styled-components";
const FooterContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 76%;
  margin: auto;
  color: white;
  gap: 2rem;

  div {
    margin-bottom: 2rem;
  }

  h1 {
    font-family: "Courgette", cursive, sans-serif;
    font-size: 2rem;
    color: #db53ee;
  }
  ul {
    list-style: none;
  }
  li {
    margin: 0.4rem 0;
    font-size: 1.2rem;
  }
  div:first-of-type li {
    margin: 1rem 0;
  }
  button a {
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 792px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 544px) {
    grid-template-columns: 1fr;
  }
`;

export { FooterContainer };
