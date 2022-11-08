import { useEffect, useState } from "react";
import Modal from "react-modal";
import getArticlesBySection from "./api-calls";
import ArticleList from "./ArticleList/ArticleList";
import ArticleDetail from "./ArticleDetail/ArticleDetail";

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [selectedSection, setSelectedSection] = useState("home");
  const [currentArticles, setCurrentArticles] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getArticlesBySection("home")
      .then((articles) => setCurrentArticles(articles))
      .catch((err) => setError(err));
  }, [selectedSection]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Article Detail"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ArticleDetail
          selectedArticle={selectedArticle}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
      <ArticleList
        currentArticles={currentArticles}
        setModalIsOpen={setModalIsOpen}
        setSelectedArticle={setSelectedArticle}
      />
    </>
  );
}

export default App;
