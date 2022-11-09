import { useEffect } from "react";
import { useParams } from "react-router";
import Article from "../Article/Article";
import getArticlesBySection from "../api-calls";
import "./ArticleList.css";

const ArticleList = ({
  currentArticles,
  setModalIsOpen,
  setSelectedArticle,
  setCurrentArticles,
  setError,
}) => {
  const { section } = useParams();

  useEffect(() => {
    const currentSelection = section ? section : "home";
    if (section) {
      setCurrentArticles(null);
    }

    getArticlesBySection(currentSelection)
      .then((articles) => setCurrentArticles(articles))
      .catch((err) => {
        setError(err.message);
      });
  }, [section]);

  const makeArticles = () => {
    if (currentArticles) {
      return currentArticles.map((article, i) => {
        return (
          <Article
            key={i}
            article={article}
            setSelectedArticle={setSelectedArticle}
            setModalIsOpen={setModalIsOpen}
          />
        );
      });
    }
  };

  if (!currentArticles) {
    return <p className="loading">Loading...</p>;
  }
  return <main className="ArticleList-container">{makeArticles()}</main>;
};

export default ArticleList;
