// src/api/mockApi.js
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ];
  
  const roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const mockApi = {
    getUsers: () => Promise.resolve(users),
    getRoles: () => Promise.resolve(roles),
    addUser: (user) => Promise.resolve([...users, user]),
    updateUser: (id, updatedUser) =>
      Promise.resolve(users.map((user) => (user.id === id ? updatedUser : user))),
    deleteUser: (id) => Promise.resolve(users.filter((user) => user.id !== id)),
  };
  