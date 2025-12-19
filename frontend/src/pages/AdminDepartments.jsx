import { useEffect, useState } from "react";
import {
  getDepartments,
  createDepartment,
  deleteDepartment
} from "../services/departmentApi";

function AdminDepartments() {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState("");

  const loadDepartments = async () => {
    const res = await getDepartments();
    setDepartments(res.data);
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const handleAdd = async () => {
    if (!name) return;
    await createDepartment({ name });
    setName("");
    loadDepartments();
  };

  const handleDelete = async (id) => {
    await deleteDepartment(id);
    loadDepartments();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Departments</h2>

      <input
        placeholder="Department Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {departments.map((dept) => (
          <li key={dept._id}>
            {dept.name}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(dept._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDepartments;
