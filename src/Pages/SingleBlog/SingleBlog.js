import React from "react";
import Button from "../../Components/GlobalStyles/Button";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { SingleBlogPost, Blog } from "./SingleBlogStyle";
import { useParams } from "react-router-dom";
import Container from "../../Components/GlobalStyles/Container";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

const SingleBlog = ({ Data }) => {
  const { id } = useParams();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  // filter array to the specifc blog
  const SingleBlog = Data.filter((data) => data.id == id);
  console.log(SingleBlog);
  if (SingleBlog == false) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1>There Is No Blog With This id</h1>
        <h1>please dont try to change the site url</h1>
        <Link
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "10px 15px",
            borderRadius: "10px",
          }}
          to={"/"}
        >
          Return to Home page
        </Link>
      </div>
    );
  }

  const { title, date, image, MarkDownText } = SingleBlog[0];
  if (!Data) {
    return <h1>Loding</h1>;
  }
  return (
    <>
      <Nav />
      <SingleBlogPost>
        <div>
          <Container>
            <Blog>
              <h1>{title}</h1>
              <p>{date}</p>
              <img src={image} />
              <div>
                <Markdown>{MarkDownText}</Markdown>
              </div>{" "}
            </Blog>
          </Container>
        </div>
      </SingleBlogPost>
      <Footer />
    </>
  );
};

export default SingleBlog;
