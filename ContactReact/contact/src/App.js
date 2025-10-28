import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", number: "" });
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const API_URL = "http://localhost:8080/contact/users";

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await axios.put(`${API_URL}/${editingUser.id}`, form);
      setEditingUser(null);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ name: "", email: "", number: "" });
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setForm({ name: user.name, email: user.email, number: user.number });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.number.includes(searchTerm)
  );

  return (
    <div className="container">
      <h2>Contact Manager</h2>
      <h3>Manage your contacts easily</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Enter Phone Number"
          value={form.number}
          onChange={(e) => setForm({ ...form, number: e.target.value })}
          required
        />
        <button type="submit">
          {editingUser ? "Update Contact" : "Add Contact"}
        </button>
        {editingUser && (
          <button
            type="button"
            className="cancel"
            onClick={() => {
              setEditingUser(null);
              setForm({ name: "", email: "", number: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <input
        type="text"
        className="search"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredUsers.map((u) => (
          <li key={u.id}>
            <span>
              <strong>{u.name}</strong> — {u.email} — {u.number}
            </span>
            <div>
              <button className="edit" onClick={() => handleEdit(u)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(u.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
