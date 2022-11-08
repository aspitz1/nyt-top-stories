import Article from "../Article/Article";

const ArticleList = ({ currentArticles }) => {
  const makeArticles = () => {
    if (currentArticles) {
      return currentArticles.map(article => {
        return <Article key={article.title} article={article} />
      });
    }
  };

  return (
    <>
      {currentArticles? makeArticles() : <p>Loading...</p>}
    </>
  )
};

export default ArticleList;