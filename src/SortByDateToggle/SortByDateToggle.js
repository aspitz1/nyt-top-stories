import { useState } from "react";
import { sortDatesAscending, sortDatesDescending } from "../utility";
import "./SortByDateToggle.css";

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
    <label className="SortByDateToggle-container">
      Updated:
      <button
        className={
          isCurrentlyDescending
            ? "SortByDateToggle-active"
            : "SortByDateToggle-inactive"
        }
        title={
          isCurrentlyDescending
            ? "Sorted by Most Recent"
            : "Sort by Most Recent"
        }
        disabled={isCurrentlyDescending}
        onClick={sortDateByDescendingHandler}
      >
        Most Recent
      </button>
      <button
        className={
          !isCurrentlyDescending
            ? "SortByDateToggle-active"
            : "SortByDateToggle-inactive"
        }
        title={!isCurrentlyDescending ? "Sorted by Oldest First" : "Sort by Oldest First"}
        disabled={!isCurrentlyDescending}
        onClick={sortDateByAscendingHandler}
      >
        Oldest First
      </button>
    </label>
  );
};

export default SortByDateToggle;
