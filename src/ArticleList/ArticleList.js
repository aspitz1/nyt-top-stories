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

  if (!currentArticles) {
    return <p>Loading...</p>;
  }
  return <main>{makeArticles()}</main>;
};

export default ArticleList;
