import React, { useEffect, useState } from "react";
import elemnts from "../JSXROUTES";
const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    elemnts.mockApi.getUsers().then(setUsers);
    elemnts.mockApi.getRoles().then(setRoles);
  }, []);

  const handleDelete = (id) => {
    elemnts.mockApi.deleteUser(id).then(setUsers);
  };

  const handleSubmit = (data) => {
    if (editUser) {
      elemnts.mockApi.updateUser(editUser.id, data).then(setUsers);
    } else {
      elemnts.mockApi.addUser(data).then(setUsers);
    }
    setShowForm(false);
    setEditUser(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <button
        onClick={() => {
          setShowForm(true);
          setEditUser(null);
        }}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>
      <table className="min-w-full bg-white border border-gray-200 shadow-sm">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setEditUser(user);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded p-4">
            <h2 className="text-xl font-bold mb-4">
              {editUser ? "Edit User" : "Add User"}
            </h2>
            <elemnts.UserForm
              onSubmit={handleSubmit}
              initialData={editUser}
              roles={roles}
            />
            <button
              onClick={() => setShowForm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
