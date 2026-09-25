"use client";

import { useState } from "react";

// Same "demo form" behavior as the static site's js/main.js
// data-demo-form handler: prevents real submission and shows a success
// message. Swap the onSubmit body for a real submission (fetch to a
// backend/API route, a form service, etc.) before this goes live — see
// the form-note text below, which is preserved from the original.
export default function CateringForm() {
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
          <label htmlFor="event-name">Full Name</label>
          <input type="text" id="event-name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="event-email">Email</label>
          <input type="email" id="event-email" name="email" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="event-phone">Phone</label>
          <input type="tel" id="event-phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="event-date">Event Date</label>
          <input type="date" id="event-date" name="date" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="event-type">Event Type &amp; Guest Count</label>
        <input
          type="text"
          id="event-type"
          name="event-type"
          placeholder="e.g. Birthday party, ~30 guests"
        />
      </div>
      <div className="form-group">
        <label htmlFor="event-notes">Tell us about your event</label>
        <textarea
          id="event-notes"
          name="notes"
          placeholder="What you're planning, dishes you're interested in, dietary needs, etc."
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Request Catering Info
      </button>
      <p
        className={`form-success${submitted ? " visible" : ""}`}
        role="status"
      >
        Thank you! We&apos;ll be in touch about your event soon.
      </p>
      <p className="form-note">
        This is a demo form — no data is sent yet. Connect it to a real
        inbox before the site goes live. You can also call (509) 398-5530
        directly.
      </p>
    </form>
  );
}
