import { Helmet } from 'react-helmet-async';

function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Veloura Events</title>
        <meta
          name="description"
          content="Explore luxury wedding planning, event design, destination events and private celebrations by Veloura Events."
        />
      </Helmet>

      <main className="services-page">
        <section className="services-intro">
          <div className="services-intro-top">
            <p>VELOURA SERVICES</p>
            <span>03</span>
          </div>

          <div className="services-intro-title">
            <h1>
              Crafted around
              <span>your celebration.</span>
            </h1>

            <p>
              From the first idea to the final detail, our services
              are designed to make planning feel effortless and
              the experience distinctly yours.
            </p>
          </div>
        </section>

        <section className="services-list">
          <div className="service-item">
            <span>01</span>
            <h2>Wedding Planning</h2>
            <p>
              Full-service planning for celebrations where every
              detail deserves intention.
            </p>
          </div>

          <div className="service-item">
            <span>02</span>
            <h2>Event Design</h2>
            <p>
              A considered visual direction that brings atmosphere,
              styling and detail together.
            </p>
          </div>

          <div className="service-item">
            <span>03</span>
            <h2>Destination Events</h2>
            <p>
              Thoughtfully planned celebrations in extraordinary
              locations, near or far.
            </p>
          </div>

          <div className="service-item">
            <span>04</span>
            <h2>Private Celebrations</h2>
            <p>
              Intimate gatherings created around the people,
              moments and details that matter.
            </p>
          </div>
        </section>

        <section className="services-note">
          <div className="services-note-image">
            <img
              src="https://weddingwild.b-cdn.net/12-berry-wedding-table-decorations-with-velvet-linens-and-deep-tones/luxurious-maroon-velvet-wedding-tablescape-v9wlp__w672.webp"
              alt="Elegant wedding tablescape"
              loading="lazy"
            />
          </div>

          <div className="services-note-content">
            <p>BEYOND THE CHECKLIST</p>

            <h2>
              We don't just plan
              <span>events.</span>
            </h2>

            <p>
              We create an atmosphere, a feeling and an experience
              your guests will remember long after the celebration ends.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;