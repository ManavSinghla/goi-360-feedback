import { useState } from "react";
import { registerUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await registerUser({ name, email, password, role });
      setMessage("Registration successful! Please login.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="citizen">Citizen</option>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <br />
        <br />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
      <p>
        Already registered? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
