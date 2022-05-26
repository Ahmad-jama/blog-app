import React from "react";
import Button from "../../GlobalStyles/Button";
import { HiArrowRight } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import {
  ImageContainer,
  Image,
  Rating,
  Text,
  Heading,
  Post,
} from "./SinglePostStyle";
const SingleBlog = ({ description, title, img, date, id }) => {
  return (
    <>
      <Post>
        <div>
          <ImageContainer>
            <Image src={img} />
          </ImageContainer>
          <Heading>
            {title} <span>{date}</span>{" "}
          </Heading>{" "}
          <Text>{description}</Text>
        </div>
        <Rating>
          <div>
            <BsStarFill color="#e5e423" />
            <BsStarFill color="#e5e423" />
            <BsStarFill color="#e5e423" />
            <BsStarFill color="#e5e423" />
            <BsStarFill color="#e5e423" />
          </div>

          <Button color="white" back="#5f5aed">
            <Link to={`/singleblog/${id}`}>read more</Link>
            <HiArrowRight fontWeight="bold" />
          </Button>
        </Rating>
      </Post>
    </>
  );
};

export default SingleBlog;
