import { useEffect, useState } from "react";
import API from "../services/api";

function CitizenFeedback() {
  const [departmentId, setDepartmentId] = useState("");
  const [serviceQuality, setServiceQuality] = useState(3);
  const [transparency, setTransparency] = useState(3);
  const [responsiveness, setResponsiveness] = useState(3);
  const [comment, setComment] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState("");

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    API.get("/departments").then((res) => setDepartments(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitFeedback({
        departmentId,
        ratings: {
          serviceQuality,
          transparency,
          responsiveness,
        },
        comment,
        isAnonymous,
      });

      setMessage("Feedback submitted successfully!");
      setDepartmentId("");
      setComment("");
    } catch (error) {
      setMessage("Error submitting feedback");
    }
  };

  return (
    <div className="container center-box">
      <div className="feedback-box" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 style={{ textAlign: "center" }}>Citizen Feedback Form</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          We value your feedback to improve government services.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Department */}
          <div className="form-group">
            <label>Select Department</label>
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              required
            >
              <option value="">-- Choose a Department --</option>
              {departments.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          {/* Ratings */}
          <div className="form-group">
            <label>Service Quality: {serviceQuality}/5</label>
            <input
              type="range"
              min="1"
              max="5"
              value={serviceQuality}
              onChange={(e) => setServiceQuality(Number(e.target.value))}
              style={{ width: "100%", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <label>Transparency: {transparency}/5</label>
            <input
              type="range"
              min="1"
              max="5"
              value={transparency}
              onChange={(e) => setTransparency(Number(e.target.value))}
              style={{ width: "100%", cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <label>Responsiveness: {responsiveness}/5</label>
            <input
              type="range"
              min="1"
              max="5"
              value={responsiveness}
              onChange={(e) => setResponsiveness(Number(e.target.value))}
              style={{ width: "100%", cursor: "pointer" }}
            />
          </div>

          {/* Comment */}
          <div className="form-group">
            <label>Comments</label>
            <textarea
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience details here..."
            />
          </div>

          {/* Anonymous */}
          <div className="form-group" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
              style={{ width: "auto" }}
            />
            <label style={{ margin: 0 }}>Submit anonymously</label>
          </div>

          <button type="submit" style={{ width: "100%" }}>
            Submit Feedback
          </button>
        </form>

        {message && (
          <div style={{ 
            marginTop: "1rem", 
            padding: "1rem", 
            borderRadius: "6px", 
            backgroundColor: message.includes("Error") ? "#fee2e2" : "#dcfce7",
            color: message.includes("Error") ? "#b91c1c" : "#15803d",
            textAlign: "center"
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default CitizenFeedback;
