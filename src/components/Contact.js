import { useState, useEffect } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus]     = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

   useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) =>
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(process.env.REACT_APP_CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error(await res.text());

      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      {status === 'success' && (
        <div className="notification success">
          Your message has been sent!
        </div>
      )}
      {status === 'error' && (
        <div className="notification error">
           Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input name="name"
          placeholder="Your Name"
          value={formData.name}            
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}           
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}         
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status==='sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
