import React, { useEffect, useState } from "react";
import elemnts from "../JSXROUTES";
const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [availablePermissions] = useState(["Read", "Write", "Delete", "Update"]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch roles from the mock API
  useEffect(() => {
    elemnts.mockApi.getRoles().then(setRoles);
  }, []);

  // Open the permissions modal for a specific role
  const handleOpenModal = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  // Save updated permissions for a role
  const handleSavePermissions = (roleId, updatedPermissions) => {
    const updatedRoles = roles.map((role) =>
      role.id === roleId ? { ...role, permissions: updatedPermissions } : role
    );
    setRoles(updatedRoles);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>
      <elemnts.RolesTable roles={roles} onEditPermissions={handleOpenModal} />

      {/* Permissions Modal */}
      {showModal && selectedRole && (
        <elemnts.PermissionsModal
          role={selectedRole}
          availablePermissions={availablePermissions}
          onSave={handleSavePermissions}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default RolesPage;
