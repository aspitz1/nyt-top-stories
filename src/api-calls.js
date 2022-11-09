import { dateFormatter, sortDatesDescending } from "./utility";

const getArticlesBySection = async (section) => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${"DuZumcVZhDy8NiAs8sFnAVqj1PpORVJW"}`
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
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
          largeImage: item.multimedia ? item.multimedia[1] : "#",
          thumbnailImage: item.multimedia ? item.multimedia[2] : "#",
        };
      });

      return sortDatesDescending(articles);
    }
  } catch (err) {
    throw err;
  }
};

export default getArticlesBySection;
