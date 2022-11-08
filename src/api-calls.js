import { dateFormatter } from "./utility";

const getArticlesBySection = async (section) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      const articles = data.results.map((item) => {
        return {
          section: item.section,
          title: item.title,
          abstract: item.abstract,
          url: item.url,
          byline: item.byline,
          publishedDate: dateFormatter(item.published_date),
          updatedDate: dateFormatter(item.updated_date),
          largeImage: item.multimedia[1],
          thumbnailImage: item.multimedia[2]
        };
      });

      return articles;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    throw err;
  }
};

export default getArticlesBySection;
