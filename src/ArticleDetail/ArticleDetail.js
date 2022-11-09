import "./ArticleDetail.css";

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
    <section className="ArticleDetail-container">
      <figure>
        <img className="modal-img" src={largeImage.url} alt={largeImage.copyright}/>
        <figcaption>{largeImage.caption}</figcaption>
      </figure>
      <h2>{title}</h2>
      <p>{byline}</p>
      <p>
        Published: {publishedDate}, Updated: {updatedDate}
      </p>
      <p>{abstract}</p>
      <p>
        Read more on <a href={url}>The New York Times</a>
      </p>
      <button className="ArticleDetail-btn" onClick={closeHandler}>Close</button>
    </section>
  );
};

export default ArticleDetail;
