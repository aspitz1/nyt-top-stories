import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Modal from "react-modal";
import getArticlesBySection from "./api-calls";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import ArticleList from "./ArticleList/ArticleList";
import ArticleDetail from "./ArticleDetail/ArticleDetail";
import SortByDateToggle from "./SortByDateToggle/SortByDateToggle";

const customStyles = {
  content: {
    top: "10%",
    left: "10%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-10%, -10%)",
  },
};

function App() {
  const [currentArticles, setCurrentArticles] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (error) {
    return <p>Something has gone wrong: {error}</p>;
  }

  return (
    <>
      <Header />
      <NavBar />
      <SortByDateToggle
        currentArticles={currentArticles}
        setCurrentArticles={setCurrentArticles}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              currentArticles={currentArticles}
              setModalIsOpen={setModalIsOpen}
              setSelectedArticle={setSelectedArticle}
              setCurrentArticles={setCurrentArticles}
              setError={setError}
            />
          }
        />
        <Route
          path="/:section"
          element={
            <ArticleList
              currentArticles={currentArticles}
              setModalIsOpen={setModalIsOpen}
              setSelectedArticle={setSelectedArticle}
              setCurrentArticles={setCurrentArticles}
              setError={setError}
            />
          }
        />
      </Routes>
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
