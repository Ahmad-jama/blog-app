import styled from "styled-components";

const Article = styled.div`
  > div > button {
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    margin: 1rem auto;
    background: #6734df;
    color: white;
    border: none;
  }

  .button {
    display: none;
    margin: 5rem 0;
    @media (max-width: 822px) {
      display: block;
    }
  }
`;

const MarkdownContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  height: 600px;
  position: relative;
`;

const MarkdownPreviwe = styled.div`
  background-color: #fff;
  color: black;
  -webkit-flex: 1;
  padding: 1rem;
  flex: 1;
  border: 1px solid #222;
  margin-left: 2px;
  border-radius: 10px;
  overflow-y: scroll;
  max-height: 100%;
  @media (max-width: 822px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    margin-left: 0;
  }
`;

const MarkdownEditor = styled.textarea`
  background-color: #444;
  border-radius: 10px;

  color: white;
  -webkit-flex: 1;
  padding: 1rem;
  font-size: 1.5rem;
  flex: 1;
  resize: none;
  @media (max-width: 822px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${(props) => props.index || 1};
  }
`;

export { Article, MarkdownEditor, MarkdownPreviwe, MarkdownContainer };
