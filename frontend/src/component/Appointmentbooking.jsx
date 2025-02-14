import React, { useState } from 'react';
import './Appointmentbooking.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">TeleDentX</span>
          <span className="logo-icon">🦷</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/treatments">Treatments</a></li>
        </ul>
      </div>
    </nav>
  );
};

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Booked!\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}`);
    setFormData({ name: '', email: '', phone: '', date: '', time: '', treatment: '' });
  };

  return (
    <div className="book-appointment-container">
      <h1>Book Your Dental Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="treatment">Treatment:</label>
          <select id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} required>
            <option value="">Select a treatment</option>
            <option value="cleaning">Teeth Cleaning</option>
            <option value="whitening">Teeth Whitening</option>
            <option value="filling">Dental Filling</option>
            <option value="rootcanal">Root Canal</option>
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

const Appointmentbooking = () => {
  return (
    <div className="teledentx-app">
      <Navbar />
      <div className="book-appointment-page">
        <BookAppointment />
      </div>
    </div>
  );
};

export default Appointmentbooking;