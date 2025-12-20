import { useEffect, useState } from "react";
import {
  getSentiment,
  getRegionStats,
  getCategoryStats,
  getRecentFeedback
} from "../services/analyticsApi";

import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

function AdminAnalytics() {
  const [sentiment, setSentiment] = useState([]);
  const [region, setRegion] = useState([]);
  const [category, setCategory] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    getSentiment().then(res => setSentiment(res.data));
    getRegionStats().then(res => setRegion(res.data));
    getCategoryStats().then(res => setCategory(res.data));
    getRecentFeedback().then(res => setRecent(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Sentiment Analytics Dashboard</h2>

      {/* Sentiment Pie */}
      <h3>Sentiment Distribution</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={sentiment}
          dataKey="count"
          nameKey="_id"
          outerRadius={100}
          label
        >
          {sentiment.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Region Bar */}
      <h3>Feedback by Region</h3>
      <BarChart width={500} height={300} data={region}>
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#3b82f6" />
      </BarChart>

      {/* Category Bar */}
      <h3>Feedback by Category</h3>
      <BarChart width={500} height={300} data={category}>
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8b5cf6" />
      </BarChart>

      {/* Recent Feedback */}
      <h3>Recent Feedback</h3>
      <ul>
        {recent.map(f => (
          <li key={f._id}>
            <b>{f.newsId?.title}</b> – {f.sentimentLabel} – {f.userId?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminAnalytics;
