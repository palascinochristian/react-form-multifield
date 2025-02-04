import { useState } from "react";

export default function App() {
  const [articleName, setArticleName] = useState("");

  const [articleList, setArticleList] = useState([
    "Vita Fuorisede",
    "Pixel & Codice",
    "Torino Walk",
  ]);

  const addNewArticle = (e) => {
    e.preventDefault();
    setArticleList((current) => [...current, articleName]);
    setArticleName("");
  };

  const deleteArticle = (articleToDelete) => {
    setArticleList((current) =>
      current.filter((article) => article !== articleToDelete)
    );
  };

  return (
    <>
      <div className="container">
        <div className="articleList">
          {articleList.map((article, index) => {
            return (
              <div className="article">
                <h2 className="article-title">{article}</h2>
                <button onClick={() => deleteArticle(article)}>🗑️</button>
              </div>
            );
          })}
          <form onSubmit={addNewArticle}>
            <input
              type="text"
              value={articleName}
              onChange={(e) => {
                setArticleName(e.target.value);
              }}
            />
            <button type="submit">Aggiungi</button>
          </form>
        </div>
      </div>
    </>
  );
}
