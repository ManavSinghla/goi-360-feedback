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
      <div className="logo">GOI 360° Feedback</div>

      <div className="nav-links">
        {(role === "citizen" || role === "employee") && (
          <>
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

        <button className="danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
