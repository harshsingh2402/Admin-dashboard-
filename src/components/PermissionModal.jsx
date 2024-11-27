import React, { useState, useEffect } from "react";
const PermissionsModal = ({ role, availablePermissions, onSave, onClose }) => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (role) {
      setPermissions(role.permissions || []);
    }
  }, [role]);

  const handleTogglePermission = (permission) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSave = () => {
    onSave(role.id, permissions);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded p-4 w-96">
        <h2 className="text-xl font-bold mb-4">
          Manage Permissions for Role: {role?.name}
        </h2>
        <div className="space-y-2">
          {availablePermissions.map((permission) => (
            <div key={permission} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={permission}
                checked={permissions.includes(permission)}
                onChange={() => handleTogglePermission(permission)}
              />
              <label htmlFor={permission} className="text-sm">
                {permission}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;
