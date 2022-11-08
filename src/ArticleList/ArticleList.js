import Article from "../Article/Article";

const ArticleList = ({
  currentArticles,
  setModalIsOpen,
  setSelectedArticle,
}) => {
  const makeArticles = () => {
    if (currentArticles) {
      return currentArticles.map((article) => {
        return (
          <Article
            key={article.title}
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
