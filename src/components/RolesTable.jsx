import React from "react";
const RolesTable = ({ roles, onEditPermissions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-sm">
        <thead>
          <tr>
            <th className="border p-2 text-left">Role Name</th>
            <th className="border p-2 text-left">Permissions</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.length > 0 ? (
            roles.map((role) => (
              <tr key={role.id}>
                <td className="border p-2">{role.name}</td>
                <td className="border p-2">
                  {role.permissions.length > 0
                    ? role.permissions.join(", ")
                    : "No permissions assigned"}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => onEditPermissions(role)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit Permissions
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border p-2 text-center" colSpan="3">
                No roles available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RolesTable;
