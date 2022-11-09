import { useState } from "react";
import { sortDatesAscending, sortDatesDescending } from "../utility";

const SortByDateToggle = ({ currentArticles, setCurrentArticles }) => {
  const [isCurrentlyDescending, setIsCurrentlyDescending] = useState(true);

  const sortDateByAscendingHandler = () => {
    const articlesCopy = [...currentArticles];
    sortDatesAscending(articlesCopy);
    setCurrentArticles(articlesCopy);
    setIsCurrentlyDescending(false);
  };

  const sortDateByDescendingHandler = () => {
    const articlesCopy = [...currentArticles];
    sortDatesDescending(articlesCopy);
    setCurrentArticles(articlesCopy);
    setIsCurrentlyDescending(true);
  };

  return (
    <label>
      Updated:
      <button
        title="Sort by Most Recent"
        disabled={isCurrentlyDescending}
        onClick={sortDateByDescendingHandler}
      >
        Most Recent
      </button>
      <button
        title="Sort by Oldest First"
        disabled={!isCurrentlyDescending}
        onClick={sortDateByAscendingHandler}
      >
        Oldest First
      </button>
    </label>
  );
};

export default SortByDateToggle;
