import { useEffect, useState } from "react";
import Modal from "react-modal";
import getArticlesBySection from "./api-calls";
import NavBar from "./NavBar/NavBar";
import ArticleList from "./ArticleList/ArticleList";
import ArticleDetail from "./ArticleDetail/ArticleDetail";
import SortByDateToggle from "./SortByDateToggle/SortByDateToggle";

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
  const [selectedArticle, setSelectedArticle] = useState({});
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setCurrentArticles(null);
    getArticlesBySection(selectedSection)
      .then((articles) => setCurrentArticles(articles))
      .catch((err) => {
        setError(err.message);
      });
  }, [selectedSection]);

  if (error) {
    return <p>Something has gone wrong: {error}</p>;
  }

  return (
    <>
      <NavBar setSelectedSection={setSelectedSection} />
      <SortByDateToggle
        currentArticles={currentArticles}
        setCurrentArticles={setCurrentArticles}
      />
      <ArticleList
        currentArticles={currentArticles}
        setModalIsOpen={setModalIsOpen}
        setSelectedArticle={setSelectedArticle}
      />
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
    </>
  );
}

export default App;
