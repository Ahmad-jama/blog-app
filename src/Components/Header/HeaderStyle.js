import styled from "styled-components";

const Header = styled.header`
  background: rgb(92, 91, 237);
  background: linear-gradient(
    110deg,
    rgba(92, 91, 237, 1) 0%,
    rgba(219, 83, 238, 1) 80%
  );
  margin: 0;
  min-height: 100vh;
`;

const HeaderPost = styled.div`
  padding: 100px;
  display: flex;
  justify-content: space-between;
  img {
    width: 449px;
    height: 345px;
    border-radius: 10px;
    margin-right: 2rem;
  }
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: white;
    margin: 2rem 0;
  }
  p {
    color: white;
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
  span {
    color: #ffffffa8;
  }

  svg {
    color: #b556ee;
  }

  @media (max-width: 1080px) {
    img {
      display: none;
    }
  }
  @media (max-width: 934px) {
    padding: 70px 0;
  }
`;

export { Header, HeaderPost };
