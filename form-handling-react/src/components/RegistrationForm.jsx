import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
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
