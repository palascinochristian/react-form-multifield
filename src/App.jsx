import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "FrontEnd",
    published: false,
  });

  const [articleList, setArticleList] = useState([
    {
      title: "Vita Fuorisede",
      content: "",
      author: "",
      category: "",
      published: false,
    },
    {
      title: "Pixel & Codice",
      content: "",
      author: "",
      category: "",
      published: true,
    },
    {
      title: "Torino Walk",
      content: "",
      author: "",
      category: "",
      published: false,
    },
  ]);

  const handleFormField = (fieldName, value) => {
    setFormData((current) => ({
      ...current,
      [fieldName]: value,
    }));
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    setArticleList((current) => [...current, formData]);
    setFormData({
      title: "",
      content: "",
      author: "",
      category: "FrontEnd",
      published: false,
    });
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
              <>
                <div className="article">
                  <h2 className="article-title">{article.title}</h2>
                  <button onClick={() => deleteArticle(article)}>🗑️</button>
                </div>
                {article.content ? (
                  <div className="article-content">
                    {article.content}
                    <div className="article-author">
                      Scritto da: {article.author}
                    </div>
                    <div className="article-category">
                      Categoria: {article.category}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="article-published">
                  {article.published ? "Articolo pubblico" : "Articolo privato"}
                </div>
              </>
            );
          })}
          <form onSubmit={addNewArticle}>
            <label for="title">Titolo:</label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => {
                handleFormField("title", e.target.value);
              }}
            />
            <label for="content">Descrizione</label>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => {
                handleFormField("content", e.target.value);
              }}
            />
            <label for="author">Autore:</label>
            <input
              id="author"
              type="text"
              value={formData.author}
              onChange={(e) => {
                handleFormField("author", e.target.value);
              }}
            />
            <label for="category">Scegli categoria:</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={(e) => handleFormField("category", e.target.value)}
            >
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="UI/UX">UI/UX</option>
            </select>
            <label for="checkbox">Pubblica:</label>
            <input
              type="checkbox"
              published={formData.published}
              defaultChecked={false}
              onChange={(e) => handleFormField("published", e.target.checked)}
            ></input>
            <button type="submit">Aggiungi</button>
          </form>
        </div>
      </div>
    </>
  );
}
