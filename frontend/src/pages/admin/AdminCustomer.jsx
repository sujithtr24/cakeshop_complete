import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const AdminCustomers = () => {

  const [users, setUsers] = useState([
    { id: 1, name: "John", email: "john@gmail.com", password: "123", phone: "9999999999" },
    { id: 2, name: "Jane", email: "jane@gmail.com", password: "456", phone: "8888888888" },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <AdminLayout>

      <h2>Customers</h2>

      <table className="table mt-3">
        <thead className="table-warning">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2">Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </AdminLayout>
  );
};

export default AdminCustomers;