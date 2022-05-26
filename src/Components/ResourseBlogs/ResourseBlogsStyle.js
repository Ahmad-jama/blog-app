import styled from "styled-components";

const ResourseBlog = styled.section`
  display: flex;
  margin-top: 5.5rem;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const LeftBlog = styled.div`
  flex: 5;
  margin-right: 1rem;
  div {
    width: 100%;
    border-radius: 23px;
    overflow: hidden;
  }
  h3 {
    margin: 1rem 0;
    color: #5f5aed;
  }
  p {
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-weight: bold;
    max-width: 540px;
  }
  @media (max-width: 1100px) {
    p {
      max-width: 100%;
    }
  }
  img {
    width: 100%;
  }
`;

const RightBlogs = styled.div`
  flex: 5;

  h2 {
    margin-bottom: 1rem;
  }
  a {
    display: flex;
    margin-bottom: 1rem;
  }
  section {
    margin-left: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    color: #5f5aed;
  }
  p {
    font-weight: bold;
    font-family: sans-serif;
  }
  img {
    width: 150px;
    border-radius: 10px;
    height: 120px;
  }

  @media (max-width: 1100px) {
    display: grid;
    margin: 4rem 0 1rem;
    grid-template-columns: 1fr 1fr;

    h2 {
      margin-bottom: 2rem;
      grid-column: 1/3;
    }

    > a {
      margin: 1rem;
    }
  }

  @media (max-width: 900px) {
    display: block;
  }
  @media (max-width: 580px) {
    > a {
      flex-direction: column;
      margin: 3rem 0;
      box-shadow: 0 0 6px #b6b6b6;
      padding: 1rem;
    }

    section {
      margin: 0;
    }
  }
`;

export { ResourseBlog, LeftBlog, RightBlogs };
