import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Header, HeaderPost } from "./HeaderStyle";
import Button from "../GlobalStyles/Button";
import Container from "../GlobalStyles/Container";
import MainTitle from "../GlobalStyles/MainTitle";
import { Link } from "react-router-dom";
import Navigation from "../Nav/Nav";

const MainHeader = ({ Data }) => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const firstBlog = Data[1];
  return (
    <Header>
      <Navigation />
      <Container>
        <MainTitle
          h1="latest blogs"
          p="this is my latest blogs i wrote it in this weak see for more inforamtion"
        />

        <HeaderPost>
          <img src={firstBlog.image} />
          <div>
            <p>{firstBlog.date}</p>
            <h1>{firstBlog.description.slice(0, 60)}....</h1>
            <Button size="1rem" color="#b556ee">
              <Link to={`/singleblog/${firstBlog.id}`}>Read Articale</Link>
              <HiArrowRight fontWeight="bold" />
            </Button>
          </div>
        </HeaderPost>
      </Container>
    </Header>
  );
};

export default MainHeader;
