import { useEffect, useState } from "react";
import { getNews } from "../services/newsApi";
import { Link } from "react-router-dom";

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((res) => setNews(res.data));
  }, []);

  return (
    <div className="container">
      <h2>GOI News Stories</h2>

      {news.map((n) => (
        <div className="news-card" key={n._id}>
          <h3>{n.title}</h3>
          <p>{n.description.substring(0, 150)}...</p>
          <span className="tag">{n.region}</span>
          <span className="tag">{n.language}</span>
          <span className="tag">{n.category}</span>
          <br />
          <Link to={`/news/${n._id}`}>Read & Give Feedback</Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
