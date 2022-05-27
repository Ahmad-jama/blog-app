import styled from "styled-components";

const BlogContainer = styled.div`
  gap: 2rem;
  margin-top: 2rem;
  counter-reset: my-counter;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 735px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 5px #d8d8d8;
  border-radius: 10px;
  padding-bottom: 1rem;
  position: relative;
  margin-top: 3rem;
  counter-increment: my-counter;
  z-index: 1;
  ::before {
    content: counter(my-counter);
    height: 48px;
    width: 48px;
    background-color: #6e59ed;
    border-radius: 100%;
    position: absolute;
    left: -14px;
    left: 1;
    z-index: 2;
    top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  @media (772px) {
    height: 300px;
  }
`;

const Heading = styled.h3`
  margin: 1rem 0;
  padding: 0 1rem;
  font-size: 1.1rem;
  span {
    color: gray;
    font-size: 0.9rem;
  }
`;

const Text = styled.p`
  padding: 0 1rem;
  margin-bottom: 1rem;
  font-family: sans-sarif;
`;

const Rating = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { BlogContainer, Post, ImageContainer, Image, Heading, Text, Rating };
