import { format } from "date-fns";

const dateFormatter = (dateString) => {
  return format(new Date(dateString), "Pp");
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
