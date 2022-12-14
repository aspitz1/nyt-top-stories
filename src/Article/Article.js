import "./Article.css";

const Article = ({ article, setModalIsOpen, setSelectedArticle }) => {
  const { title, byline, updatedDate, thumbnailImage } = article;

  const clickHandler = () => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  return (
    <article className="Article-container">
      <button title="Article Details" onClick={clickHandler}>
        <img src={thumbnailImage.url} alt={thumbnailImage.copyright} style={{width: 150, height: 150}} />
      </button>
      <h2>{title}</h2>
      <p>{byline}</p>
      <p>Updated: {updatedDate}</p>
    </article>
  );
};

export default Article;
