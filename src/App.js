import { useEffect, setState, useState } from "react";
import getArticlesBySection from "./api-calls";

function App() {
  const [selectedSection, setSelectedSection] = useState("home");
  const [currentArticles, setCurrentArticles] = useState(null);

  useEffect(() => {
    getArticlesBySection("home");
  }, []);

  return (
    <>
      <h1>Hello, World.</h1>
    </>
  );
}

export default App;
