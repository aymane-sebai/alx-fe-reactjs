import { useState } from "react";

const RegistrationForm = () => {
  // State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Registered:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}  // ✅ Controlled component
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <i
