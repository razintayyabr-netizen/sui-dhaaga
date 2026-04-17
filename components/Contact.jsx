'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name}. ${form.message} My phone: ${form.phone}`;
    window.open(`https://wa.me/919650557785?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact <span style={{ color: 'var(--rose)' }}>Us</span></h2>
          <div className="section-line" />
        </div>
        <div className="contact-grid">
          <div>
            <div className="contact-info-card" style={{ marginBottom: '16px' }}>
              <div className="contact-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>Anarkali, Delhi<br/>MCD Ward No. 108, Pole No. 622</p>
              </div>
            </div>
            <div className="contact-info-card" style={{ marginBottom: '16px' }}>
              <div className="contact-icon">📞</div>
              <div>
                <h4>Call / WhatsApp</h4>
                <p><a href="tel:+919650557785">9650557785</a><br/><a href="tel:+919999197911">9999197911</a></p>
              </div>
            </div>
            <div className="contact-info-card" style={{ marginBottom: '16px' }}>
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Opening Hours</h4>
                <p>Open Daily — Morning to Evening</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-icon">🏷️</div>
              <div>
                <h4>Toll Free</h4>
                <p>1800-203-8500</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3 style={{ marginBottom: '24px', fontFamily: 'Playfair Display, serif' }}>Send us a Message</h3>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <p style={{ color: 'var(--text)' }}>Message sent! We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="What are you looking for?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                </div>
                <button type="submit" className="form-submit">Send via WhatsApp →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}