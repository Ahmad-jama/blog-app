import React from "react";
import Blogs from "../../Components/Blogs/Blogs";
import EmailBox from "../../Components/EmailBox/EmailBox";
import Footer from "../../Components/Footer/Footer";
import MainHeader from "../../Components/Header/Header";
import ResourseBlogs from "../../Components/ResourseBlogs/ResourseBlogs";

const Home = ({ Data }) => {
  return (
    <>
      <MainHeader Data={Data} />
      <Blogs Data={Data} />
      <ResourseBlogs Data={Data} />
      <EmailBox />
      <Footer />
    </>
  );
};

export default Home;
