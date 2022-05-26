import { useState } from "react";
import Container from "../../Components/GlobalStyles/Container";
import Markdown from "markdown-to-jsx";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import Button from "../../Components/GlobalStyles/Button";
import ArticleUpperContent from "../../Components/ArticleUpperContent/ArticleUpperContent";
import Alert from "../../Components/GlobalStyles/Alert";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

import {
  Article,
  MarkdownEditor,
  MarkdownPreviwe,
  MarkdownContainer,
} from "./ArticleStyle";
import { db, storage } from "../../firebase/firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const CreateArticale = () => {
  const [MarkDownText, setMarkDownText] = useState("");
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [MarkdonWriteOrPreviw, setMarkdonWriteOrPreviw] = useState(true);
  const [ImageUrl, setImageUrl] = useState("");
  const [ShowAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const postsCollectionRed = collection(db, "posts");
  const postData = async () => {
    // chacke if all inputs are written

    if (
      Title == false ||
      !ImageUrl ||
      Description == false ||
      MarkDownText == false
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
      return;
    }
    // random id
    var id = "id" + Math.random().toString(16).slice(2);

    // post image

    // post data to firebase firestore
    await addDoc(postsCollectionRed, {
      id: id,
      image: ImageUrl,
      title: Title,
      date: new Date().toDateString().split(" ").join(", "),
      description: Description,
      MarkDownText: MarkDownText,
    });
    navigate("/");
  };

  // Upload Image and change firebase storge

  const UploadImageFirebase = (file) => {
    if (!file) return;
    var id = "id" + Math.random().toString(16).slice(2);

    const storageRef = ref(storage, `/files${file.name + "-" + id}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
        });
      }
    );
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    UploadImageFirebase(file);
  };

  return (
    <Article>
      {ShowAlert ? <Alert setShowAlert={setShowAlert} /> : null}
      <Nav />
      <Container>
        <ArticleUpperContent
          onImageChange={onImageChange}
          ImageUrl={ImageUrl}
          Title={Title}
          Description={Description}
          setTitle={setTitle}
          setDescription={setDescription}
        />
        <Button
          className="button"
          onClick={(e) => setMarkdonWriteOrPreviw(!MarkdonWriteOrPreviw)}
        >
          {MarkdonWriteOrPreviw ? "Markdonw Previw" : "Type"}{" "}
        </Button>

        <MarkdownContainer>
          <MarkdownEditor
            index={MarkdonWriteOrPreviw ? 2 : 1}
            placeholder="Type Markdown"
            value={MarkDownText}
            onChange={(e) => setMarkDownText(e.target.value)}
          ></MarkdownEditor>

          <MarkdownPreviwe>
            <Markdown>{MarkDownText}</Markdown>
          </MarkdownPreviwe>
        </MarkdownContainer>

        <button onClick={() => postData()}>Create</button>
      </Container>
      <Footer />
    </Article>
  );
};

export default CreateArticale;
