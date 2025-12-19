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
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Citizen Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Department */}
        <label>Department</label>
        <br />
        {departments.map((d) => (
          <option key={d._id} value={d._id}>
            {d.name}
          </option>
        ))}

        <br />
        <br />

        {/* Ratings */}
        <label>Service Quality: {serviceQuality}</label>
        <br />
        <input
          type="range"
          min="1"
          max="5"
          value={serviceQuality}
          onChange={(e) => setServiceQuality(Number(e.target.value))}
        />

        <br />

        <label>Transparency: {transparency}</label>
        <br />
        <input
          type="range"
          min="1"
          max="5"
          value={transparency}
          onChange={(e) => setTransparency(Number(e.target.value))}
        />

        <br />

        <label>Responsiveness: {responsiveness}</label>
        <br />
        <input
          type="range"
          min="1"
          max="5"
          value={responsiveness}
          onChange={(e) => setResponsiveness(Number(e.target.value))}
        />

        <br />
        <br />

        {/* Comment */}
        <label>Comments</label>
        <br />
        <textarea
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your feedback..."
        />

        <br />
        <br />

        {/* Anonymous */}
        <label>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          Submit anonymously
        </label>

        <br />
        <br />

        <button type="submit">Submit Feedback</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CitizenFeedback;
