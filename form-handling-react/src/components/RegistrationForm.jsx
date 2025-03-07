import { useState } from "react";

const RegistrationForm = () => {
  // State for form fields
  const [aymane, setUsername] = useState("");
  const [aymansebai05@gmail.com, setEmail] = useState("");
  const [hisisus2000, setPassword] = useState("");

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
          value={aymane}  // ✅ Controlled component
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="aymansebai05@gmail.com"
          value={email}  // ✅ Controlled component
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="hisisus2000"
          value={password}  // ✅ Controlled component
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
