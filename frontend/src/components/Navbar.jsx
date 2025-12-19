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
    <nav style={styles.nav}>
      <h3>GOI 360° Feedback</h3>

      <div style={styles.links}>
        {(role === "citizen" || role === "employee") && (
          <>
            <Link to="/feedback">Feedback</Link>
            <Link to="/my-feedback">My Feedback</Link>
          </>
        )}

        {(role === "admin" || role === "superadmin") && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/departments">Departments</Link>
          </>
        )}

        <button onClick={handleLogout} style={styles.logout}>
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
