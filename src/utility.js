import { format, compareAsc, compareDesc } from "date-fns";

const dateFormatter = (dateString) => {
  return format(new Date(dateString), "Pp");
};

const sortDatesAscending = (articles) => {
  return articles.sort((a, b) =>
    compareAsc(new Date(a.updatedDate), new Date(b.updatedDate))
  );
};

const sortDatesDescending = (articles) => {
  return articles.sort((a, b) =>
    compareDesc(new Date(b.updatedDate), new Date(a.updatedDate))
  );
};

export { dateFormatter, sortDatesAscending, sortDatesDescending };
