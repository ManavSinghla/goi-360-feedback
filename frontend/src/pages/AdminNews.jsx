import { useEffect, useState } from "react";
import { getNews, createNews, deleteNews } from "../services/newsApi";

function AdminNews() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    region: "",
    language: "",
    category: "",
    source: ""
  });

  const loadNews = async () => {
    const res = await getNews();
    setNews(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await createNews(form);
    setForm({
      title: "",
      description: "",
      region: "",
      language: "",
      category: "",
      source: ""
    });
    loadNews();
  };

  const handleDelete = async (id) => {
    await deleteNews(id);
    loadNews();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage News</h2>

      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="region" placeholder="Region" value={form.region} onChange={handleChange} />
      <input name="language" placeholder="Language" value={form.language} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="source" placeholder="Source" value={form.source} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

      <br />
      <button onClick={handleSubmit}>Add News</button>

      <ul>
        {news.map((n) => (
          <li key={n._id}>
            <b>{n.title}</b> ({n.region}, {n.language})
            <button onClick={() => handleDelete(n._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNews;
