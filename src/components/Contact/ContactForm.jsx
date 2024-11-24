import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="contact-form-title">Contact Us</h1>
      {success && <p className="contact-form-success">Message sent successfully!</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="contact-form-input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="contact-form-input"
          required
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="contact-form-textarea"
          required
        ></textarea>
        <button type="submit" className="contact-form-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
