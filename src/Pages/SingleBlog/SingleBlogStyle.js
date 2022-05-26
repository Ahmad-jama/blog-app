import styled from "styled-components";

const SingleBlogPost = styled.div`
  margin-bottom: 10rem;
`;

const Blog = styled.div`
  > h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    text-align: center;
    margin: auto;
    max-width: 900px;
  }
  > p {
    margin: 2rem 0;
    color: #6c6c6c;
    font-weight: bold;
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 900px;
    max-height: 908px;
    margin: auto;
    display: block;
    margin-bottom: 3rem;
  }

  div {
    max-width: 900px;
    margin: auto;

    h1,
    h2,
    h3,
    h4 {
      margin: 0 0 0.7rem;
    }
    h1 {
      font-size: clamp(1.5rem, 5vw, 2rem);
    }
    p,
    span {
      font-size: clamp(1rem, 5vw, 1.5rem);
    }

    img {
      max-width: 300px;
    }
  }
`;

export { SingleBlogPost, Blog };
