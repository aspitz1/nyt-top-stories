const Article = ({ article }) => {
  const {
    title,
    abstract,
    url,
    byline,
    publishedDate,
    updatedDate,
    largeImage,
    thumbnailImage,
  } = article;

  console.log(thumbnailImage);

  return (
    <article>
      <img src={thumbnailImage.url} alt={thumbnailImage.caption} />
      <p>{title}</p>
      <p>{byline}</p>
      <p>Updated At: {updatedDate}</p>
    </article>
  )
};

export default Article;
