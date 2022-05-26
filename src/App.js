import React from "react";
import Home from "./Pages/Home/Home";
import "./index.css";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateArticale from "./Pages/CreateArticale/CreateArticale";
import { db } from "./firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Loading from "./Components/Loading/Loading";
function App() {
  const [Data, SetData] = React.useState([]);
  const postsCollectionRed = collection(db, "posts");

  React.useEffect(() => {
    const getPosts = async () => {
      const postsData = await getDocs(postsCollectionRed);

      SetData(postsData.docs.map((post) => post.data()));
    };
    getPosts();
  }, []);
  if (Data == false) {
    return <Loading />;
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home Data={Data} />} />
          <Route path="/singleblog/:id" element={<SingleBlog Data={Data} />} />
          <Route path="/create-article" element={<CreateArticale />} />
          <Route path="*" element="" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
