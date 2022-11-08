import { useEffect } from "react";
import Article from "../Article/Article";

const ArticleList = ({
  currentArticles,
  setModalIsOpen,
  setSelectedArticle,
}) => {

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

  return <>{currentArticles ? makeArticles() : <p>Loading...</p>}</>;
};

export default ArticleList;
