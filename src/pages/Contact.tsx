import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact Veloura Events | Start Your Celebration</title>
        <meta
          name="description"
          content="Get in touch with Veloura Events to begin planning your luxury wedding or private celebration in Lahore, Pakistan."
        />
      </Helmet>

      <main className="contact-page">
        <section className="contact-intro">
          <div className="contact-intro-top">
            <p>GET IN TOUCH</p>
            <span>06</span>
          </div>

          <div className="contact-intro-content">
            <h1>
              Let's create
              <span>something beautiful.</span>
            </h1>

            <p>
              Tell us a little about your celebration and
              what you have in mind. We'd love to hear your story.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-info">
            <p className="contact-label">START A CONVERSATION</p>

            <h2>
              Your celebration
              <span>starts here.</span>
            </h2>

            <p className="contact-description">
              Whether you're planning an intimate gathering or
              a grand celebration, we're here to bring your vision
              to life with intention and care.
            </p>

            <div className="contact-details">
              <div>
                <span>EMAIL</span>
                <p>hello@velouraevents.com</p>
              </div>

              <div>
                <span>LOCATION</span>
                <p>Lahore · Pakistan</p>
              </div>
            </div>
          </div>

          {submitted && (
            <p className="form-success">
              Thank you. Your inquiry has been received.
            </p>
          )}

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              e.currentTarget.reset();
            }}
          >
            <div className="form-group">
              <label htmlFor="name">YOUR NAME</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="event">EVENT TYPE</label>
              <select id="event" defaultValue="" required>
                <option value="" disabled>
                  Select an event
                </option>
                <option value="wedding">Wedding</option>
                <option value="event">Private Event</option>
                <option value="destination">Destination Event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">TELL US ABOUT IT</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your celebration..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Inquiry
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;