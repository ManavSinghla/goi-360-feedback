import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function AdminCharts({ data }) {
  return (
    <div>
      {/* Bar Chart */}
      <h3>Average Service Quality</h3>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="departmentName" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="avgServiceQuality" fill="#8884d8" />
      </BarChart>

      {/* Pie Chart */}
      <h3>Total Feedback Distribution</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="totalFeedbacks"
          nameKey="departmentName"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default AdminCharts;
