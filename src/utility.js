const dateFormatter = (dateString) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(dateString));
};

const sortDatesAscending = (articles) => {
  return articles.sort(
    (a, b) => new Date(a.updatedDate) - new Date(b.updatedDate)
  );
};

const sortDatesDescending = (articles) => {
  return articles.sort(
    (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate)
  );
};

export { dateFormatter, sortDatesAscending, sortDatesDescending };
