import React from "react";
import Container from "../GlobalStyles/Container";
import MainTitle from "../GlobalStyles/MainTitle";
import SingleBlog from "./SinglePost/SinglePost";
import { BlogContainer } from "./SinglePost/SinglePostStyle";

const Blogs = ({ Data }) => {
  return (
    <div className="section-container">
      <Container>
        <MainTitle
          h1="Blogs"
          p="lorem ipsume dolar is a uniqe way to write english dthe hard way i dont know why you are writting so much content on your channerl"
          h1Color="#5f5aed"
          pColor="#000"
          backColor="#5f5aed"
        />
        <BlogContainer>
          {Data.map((data) => {
            const { id, image, title, date, description } = data;

            return (
              <SingleBlog
                key={id}
                title={title}
                img={image}
                description={description}
                date={date}
                id={id}
              />
            );
          })}
        </BlogContainer>
      </Container>
    </div>
  );
};

export default Blogs;
