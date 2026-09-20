import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About Veloura Events | Luxury Wedding & Event Planning</title>
        <meta
          name="description"
          content="Discover the philosophy behind Veloura Events, a luxury wedding and event planning studio in Lahore, Pakistan."
        />
      </Helmet>

      <main className="about-page">
        <section className="about-hero">
          <div className="about-background-letter">
            V
          </div>

          <div className="about-top-label">
            ABOUT THE STUDIO
          </div>

          <div className="about-hero-title">
            <p>WE CREATE</p>
            <h1>
              Moments
              <span>that stay.</span>
            </h1>
          </div>

          <div className="about-hero-image">
            <img
              src="https://www.cvlinens.com/cdn/shop/files/Spandex-4-way-Stretch-Backdrop-Drape-Curtain-16ft-Hx60-W-Burgundy-lifestyle2.png?v=1775007993"
              alt="Luxury burgundy and gold wedding reception"
            />
          </div>

          <div className="about-hero-description">
            <p>
              Veloura Events is a luxury wedding and event planning studio
              creating celebrations that feel personal, refined and entirely
              unforgettable.
            </p>
          </div>
        </section>

        <section className="about-philosophy">
          <div className="philosophy-image">
            <img
              src="https://weddingwild.b-cdn.net/12-berry-wedding-table-decorations-with-velvet-linens-and-deep-tones/luxurious-maroon-velvet-wedding-tablescape-v9wlp__w672.webp"
              alt="Elegant wedding celebration"
              loading="lazy"
            />
          </div>

          <div className="philosophy-panel">
            <span className="philosophy-number">01</span>

            <p className="philosophy-label">
              OUR PHILOSOPHY
            </p>

            <h2>
              Beauty is
              <span>in the details.</span>
            </h2>

            <div className="philosophy-line"></div>

            <p className="philosophy-text">
              We believe unforgettable celebrations are built from the
              little things. The atmosphere, the details, the feeling
              you remember long after the last guest leaves.
            </p>
          </div>
        </section>

        <section className="about-approach">
          <div className="approach-header">
            <p>THE VELOURA APPROACH</p>
            <span>02</span>
          </div>

          <div className="approach-words">
            <div className="approach-item">
              <span>01</span>
              <h3>Imagine</h3>
              <p>
                We begin with your vision, your story and the feeling
                you want your celebration to create.
              </p>
            </div>

            <div className="approach-item">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Every element is thoughtfully curated to create a
                celebration that feels cohesive and distinctly yours.
              </p>
            </div>

            <div className="approach-item">
              <span>03</span>
              <h3>Celebrate</h3>
              <p>
                We handle the details behind the scenes so you can
                be completely present in the moment.
              </p>
            </div>
          </div>
        </section>

        <section className="about-details">
          <div className="details-content">
            <p className="details-label">
              THE DETAILS MATTER
            </p>

            <h2>
              Because the
              <span>little things</span>
              become the memories.
            </h2>

            <p className="details-text">
              From the texture of a linen to the glow of candlelight,
              we believe every detail contributes to how a celebration
              feels.
            </p>
          </div>

          <div className="details-accent">
            <span>V</span>
            <p>VELOURA EVENTS</p>
          </div>
        </section>

        <section className="about-closing">
          <p>READY TO CREATE SOMETHING BEAUTIFUL?</p>

          <h2>
            Let's make your moment unforgettable.
          </h2>

          <a href="/contact" className="closing-button">
            Start a Conversation
          </a>
        </section>
      </main>
    </>
  );
}

export default About;