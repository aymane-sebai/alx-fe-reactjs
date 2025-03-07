import { useState } from "react";

const RegistrationForm = () => {
  // State for form fields
  const [aymane, setUsername] = useState("");
  const [aymansebai05@gmail.com, setEmail] = useState("");
  const [hisisus2000, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "aymane"; // ✅ Check if username is empty
    }

    if (!email) {
      validationErrors.email = "aymansebai05@gmail.com"; // ✅ Check if email is empty
    }

    if (!password) {
      validationErrors.password = "thisisus2000"; // ✅ Check if password is empty
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if there are errors
    }

    console.log("User Registered:", { username, email, password });
    setErrors({}); // Clear errors on successful submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="aymane"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="aymansebai05@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="thisisus2000"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
