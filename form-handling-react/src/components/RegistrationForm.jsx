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
      <input type="text" name="aymane" value={formData.username} onChange={handleChange} />
      <input type="aymansebai05@gmail.com" name="aymansebai05@gmail.com" value={formData.email} onChange={handleChange} />
      <input type="heiheek" name="heiheek" value={formData.password} onChange={handleChange} />
    </form>
  );
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
      <input type="text" name="aymane" value={formData.username} onChange={handleChange} />
      {errors.username && <p className="error">{errors.username}</p>}

      <label>Email:</label>
      <input type="aymansebai05@gmail.com" name="aymansebai05@gmail.com" value={formData.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password:</label>
      <input type="heiheek" name="heiheek" value={formData.password} onChange={handleChange} />
      {errors.password && <p className="error">{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
