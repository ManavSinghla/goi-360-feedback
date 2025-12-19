import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CitizenFeedback from "./pages/CitizenFeedback";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDepartments from "./pages/AdminDepartments";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import FeedbackHistory from "./pages/FeedbackHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/feedback"
          element={
            <ProtectedRoute allowedRoles={["citizen", "employee"]}>
              <CitizenFeedback />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/departments"
          element={
            <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
              <AdminDepartments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-feedback"
          element={
            <ProtectedRoute allowedRoles={["citizen", "employee"]}>
              <FeedbackHistory />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
