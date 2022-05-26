import React from "react";
import Button from "../GlobalStyles/Button";
import styled from "styled-components";
import emailImage from "./gmail.png";

const EmailBox = () => {
  return (
    <Box>
      <div>
        <h2>Blog Email Weekly</h2>
        <p>
          get email every time i create a new blog so you dont miss any one of
          my blogs and read it on the time and give me some comments to know how
          i can improve
        </p>
        <form>
          <input type="text" placeholder="Enter your email" />
          <Button back="#5f5aed" color="white" size="1rem">
            Submit
          </Button>
        </form>
      </div>
      <img src={emailImage} alt="" />
    </Box>
  );
};

export default EmailBox;

const Box = styled.div`
  background-color: #5f5aed;
  width: 80%;
  margin-top: 10rem;
  max-width: 800px;
  justify-content: space-between;
  display: flex;
  margin: 15rem auto;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  img {
    width: 165px;
    height: 67px;
    margin: auto;
  }
  p {
    margin: 1rem 0;
    width: 80%;
  }
  form {
    background: white;
    width: 66%;
    border-radius: 10px;
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    button {
      padding: 0.5rem;
    }
  }

  input {
    border: none;
    margin: 0 19px;
    color: gray;
    font-size: 1.1rem;
    flex: 1;
  }
  input:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 950px) {
    img {
      display: none;
    }
  }
  @media (max-width: 750px) {
    p,
    form {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;
