import React from "react";
import styled from "styled-components";
import { AiOutlineCloud } from "react-icons/ai";
const ArticleUpperContent = ({
  onImageChange,
  ImageUrl,
  setDescription,
  setTitle,
  Description,
  Title,
}) => {
  return (
    <UpperContetn>
      <input
        style={{ display: "none" }}
        id="upload-image"
        type="file"
        title="choose file"
        accept="image/*"
        onChange={onImageChange}
      />

      <div className="upload-image">
        {ImageUrl ? <img src={ImageUrl} /> : ""}
      </div>
      <div>
        <label
          style={{
            pointerEvents: `${ImageUrl ? "none" : ""}  `,
            opacity: `${ImageUrl ? "0.07" : "1"}  `,
          }}
          htmlFor="upload-image"
        >
          {" "}
          <AiOutlineCloud />
          Upload Image
        </label>
        <input
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Type Title"
        />
        <textarea
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          placeholder="Type Description"
        ></textarea>
      </div>
    </UpperContetn>
  );
};

export default ArticleUpperContent;

const UpperContetn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  @media (max-width: 992px) {
    display: block;
    > div:first-of-type {
      display: block;
      height: 300px;
      padding: 1rem;
    }
  }
  > div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
  }

  .upload-image {
    display: flex;
    border: 2px dotted;
    img {
      width: 100%;
      height: 100%;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid black;
    width: fit-content;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  input,
  textarea {
    border-radius: 10px;
    border: 1px solid #5b5b5b;
    width: 30rem;
    padding: 8px;
    margin: 1rem 0;
    font-size: 1rem;
    letter-spacing: 1px;
    resize: none;
  }
  @media (max-width: 572px) {
    input,
    textarea {
      width: 100%;
    }
  }
`;
