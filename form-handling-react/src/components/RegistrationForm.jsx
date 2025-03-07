import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
    </form>
  );
};

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
   const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.username || !formData.email || !formData.password) {
    alert("All fields are required!");
    return;
  }
  console.log("Form submitted", formData);
};


  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      {errors.username && <p className="error">{errors.username}</p>}

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      {errors.password && <p className="error">{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
