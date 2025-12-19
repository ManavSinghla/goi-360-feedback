import { useEffect, useState } from "react";
import API from "../services/api";

function FeedbackHistory() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await API.get("/feedback/my");
        setFeedbacks(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <p>Loading feedback history...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Feedback History</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Department</th>
              <th>Service</th>
              <th>Transparency</th>
              <th>Responsiveness</th>
              <th>Comment</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((f) => (
              <tr key={f._id}>
                <td>{f.departmentId?.name}</td>
                <td>{f.ratings.serviceQuality}</td>
                <td>{f.ratings.transparency}</td>
                <td>{f.ratings.responsiveness}</td>
                <td>{f.comment || "—"}</td>
                <td>{new Date(f.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FeedbackHistory;
