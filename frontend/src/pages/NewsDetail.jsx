import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsById } from "../services/newsApi";
import API from "../services/api";

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [ratings, setRatings] = useState({
    relevance: 3,
    accuracy: 3,
    sentiment: 3
  });
  const [comment, setComment] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getNewsById(id).then((res) => setNews(res.data));
  }, [id]);

  const submitFeedback = async () => {
    await API.post("/feedback", {
      newsId: id,
      ratings,
      comment
    });
    setMsg("Feedback submitted successfully");
    setComment("");
  };

  if (!news) return <p>Loading...</p>;

  return (
    <div className="feedback-box">
      <h2>{news.title}</h2>
      <p>{news.description}</p>

      <h3>Give Feedback</h3>

      {["relevance", "accuracy", "sentiment"].map((key) => (
        <div key={key}>
          <label>{key}: {ratings[key]}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={ratings[key]}
            onChange={(e) =>
              setRatings({ ...ratings, [key]: Number(e.target.value) })
            }
          />
        </div>
      ))}

      <textarea
        placeholder="Your opinion on this news"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <br />
      <button onClick={submitFeedback}>Submit Feedback</button>

      {msg && <p>{msg}</p>}
    </div>
  );
}

export default NewsDetail;
