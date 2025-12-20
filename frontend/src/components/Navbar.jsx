import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  if (!role) return null; // hide navbar if not logged in

  return (
    <nav className="navbar">
      <h3>GOI 360° Feedback</h3>

      <div className="nav-links">
        {(role === "citizen" || role === "employee") && (
          <>
            {/* <Link to="/feedback">Feedback</Link> */}
            <Link to="/my-feedback">My Feedback</Link>
            <Link to="/news">News</Link>
          </>
        )}

        {(role === "admin" || role === "superadmin") && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/departments">Departments</Link>
            <Link to="/admin/news">Manage News</Link>
            <Link to="/news">News</Link>
            <Link to="/admin/analytics">Analytics</Link>
          </>
        )}

        <button className="danger" onClick={handleLogout} style={styles.logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#1e293b",
    color: "#fff",
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  logout: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
