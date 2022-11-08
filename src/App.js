import { useEffect, useState } from "react";
import getArticlesBySection from "./api-calls";
import ArticleList from "./ArticleList/ArticleList";

function App() {
  const [selectedSection, setSelectedSection] = useState("home");
  const [currentArticles, setCurrentArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesBySection("home")
      .then((articles) => setCurrentArticles(articles))
      .catch((err) => setError(err));
  }, [selectedSection]);

  return (
    <>
      <ArticleList currentArticles={currentArticles} />
    </>
  );
}

export default App;
