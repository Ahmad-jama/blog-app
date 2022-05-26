import React from "react";
import { Link } from "react-router-dom";
import Container from "../GlobalStyles/Container";
import MainTitle from "../GlobalStyles/MainTitle";
import { ResourseBlog, LeftBlog, RightBlogs } from "./ResourseBlogsStyle";
const ResourseBlogs = ({ Data }) => {
  return (
    <div className="section-container">
      <Container>
        <MainTitle
          h1="The Blogs Resource Libary "
          p="lorem ipsume dolar is a uniqe way t  so much content on your channerl"
          h1Color="#5f5aed"
          pColor="#000"
          backColor="#5f5aed"
        />{" "}
        <ResourseBlog>
          <Link to={`singleblog/${Data[0].id}`}>
            <LeftBlog>
              <div>
                <img src={Data[0].image} alt="blogs" />
              </div>
              <h3>{Data[0].title}</h3>
              <p>{Data[0].description}</p>
            </LeftBlog>
          </Link>
          <RightBlogs>
            <h2>Featured Blogs</h2>

            {Data.slice(0, 4).map((data) => {
              const { id, image, title, description } = data;

              return (
                <Link to={`singleblog/${id}`} key={id}>
                  <div>
                    <img src={image} alt="blogs" />
                  </div>
                  <section>
                    <h3>{title}</h3>
                    <p>{description.slice(0, 140)} ...</p>
                  </section>
                </Link>
              );
            })}
          </RightBlogs>
        </ResourseBlog>
      </Container>
    </div>
  );
};

export default ResourseBlogs;
