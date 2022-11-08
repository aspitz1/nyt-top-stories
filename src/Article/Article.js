const Article = ({ article, setModalIsOpen, setSelectedArticle }) => {
  const {
    title,
    byline,
    updatedDate,
    thumbnailImage,
  } = article;

  const clickHandler = () => {
    setSelectedArticle(article);
    setModalIsOpen(true);
  };

  return (
    <article onClick={clickHandler}>
      <img src={thumbnailImage.url} alt={thumbnailImage.caption} />
      <h2>{title}</h2>
      <p>{byline}</p>
      <p>Updated: {updatedDate}</p>
    </article>
  );
};

export default Article;
