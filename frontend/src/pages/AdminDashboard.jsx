import { useEffect, useState } from "react";
import API from "../services/api";
import AdminCharts from "../components/AdminCharts";

function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await API.get("/admin/dashboard");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <h3>Loading Dashboard...</h3>;

  return (
    <div className="container">
      <h2>Admin Analytics Dashboard</h2>
      <AdminCharts data={data} />
    </div>
  );
}

export default AdminDashboard;
