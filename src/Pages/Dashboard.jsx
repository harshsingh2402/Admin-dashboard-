import React, { useEffect, useState } from "react";
import elemnts from "../JSXROUTES";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    elemnts.mockApi.getUsers().then(setUsers);
    elemnts.mockApi.getRoles().then(setRoles);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Total Users</h2>
          <p className="text-2xl">{users.length}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Total Roles</h2>
          <p className="text-2xl">{roles.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
