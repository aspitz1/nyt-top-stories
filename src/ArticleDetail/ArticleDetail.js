const ArticleDetail = ({ setModalIsOpen, selectedArticle }) => {
  const {
    title,
    abstract,
    url,
    byline,
    publishedDate,
    updatedDate,
    largeImage,
  } = selectedArticle;

  const closeHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <section>
      <h2>{title}</h2>
      <p>{byline}</p>
      <p>
        Published: {publishedDate}, Updated: {updatedDate}
      </p>
      <figure>
        <img src={largeImage.url} />
        <figcaption>{largeImage.caption}</figcaption>
      </figure>
      <p>{abstract}</p>
      <p>
        Read more on <a href={url}>The New York Times</a>
      </p>
      <button onClick={closeHandler}>Close</button>
    </section>
  );
};

export default ArticleDetail;
