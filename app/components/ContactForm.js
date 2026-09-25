"use client";

import { useState } from "react";

// Same "demo form" behavior as the static site's js/main.js
// data-demo-form handler — see the matching note in CateringForm.js.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Full Name</label>
          <input type="text" id="contact-name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input type="email" id="contact-email" name="email" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="contact-subject">Subject</label>
        <input type="text" id="contact-subject" name="subject" />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Send Message
      </button>
      <p
        className={`form-success${submitted ? " visible" : ""}`}
        role="status"
      >
        Thank you so much! We&apos;ll get back to you soon.
      </p>
      <p className="form-note">
        This is a demo form — no data is sent yet. Connect it to a real
        inbox before the site goes live.
      </p>
    </form>
  );
}
