import { useState } from "react";
import { loginUser } from "../services/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin" || res.data.role === "superadmin") {
        navigate("/admin");
      } else {
        navigate("/feedback");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="center-box">
      <div className="auth-container">
        <h2>Login</h2>
        <p>Welcome back! Please access your account.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </form>

        {error && (
          <p style={{ color: "#ef4444", marginTop: "10px", fontSize: "0.9rem" }}>
            {error}
          </p>
        )}

        <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>
          <p style={{ display: "inline" }}>Don’t have an account? </p>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
