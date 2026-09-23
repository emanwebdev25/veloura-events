import { Helmet } from 'react-helmet-async';

import gallery01 from '../assets/gallery-01.jpg';
import gallery02 from '../assets/gallery-02.jpg';
import gallery03 from '../assets/gallery-03.jpg';
import gallery04 from '../assets/gallery-04.jpg';
import gallery05 from '../assets/gallery-05.jpg';
import gallery06 from '../assets/gallery-06.jpg';
import gallery07 from '../assets/gallery-07.jpg';
import gallery08 from '../assets/gallery-08.jpg';

function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | Veloura Events</title>
        <meta
          name="description"
          content="Explore beautifully composed wedding and event celebrations by Veloura Events."
        />
      </Helmet>

      <main className="gallery-page">
        <section className="gallery-intro">
          <div className="gallery-intro-top">
            <p>THE VELOURA GALLERY</p>
            <span>04</span>
          </div>

          <div className="gallery-intro-content">
            <h1>
              Celebrations,
              <span>beautifully composed.</span>
            </h1>

            <p>
              A glimpse into the celebrations we create,
              from intimate gatherings to unforgettable
              wedding experiences.
            </p>
          </div>
        </section>

        <section className="gallery-featured">
          <img
            src={gallery01}
            alt="Luxury Pakistani wedding reception"
          />

          <div className="gallery-featured-caption">
            <span>01</span>
            <p>THE MAROON EDIT · PRIVATE CELEBRATION</p>
          </div>
        </section>

        <section className="gallery-grid">
          <div className="gallery-item gallery-large">
            <img
              src={gallery02}
              alt="Pakistani bridal editorial"
              
            />
            <span>02 · BRIDAL EDITORIAL</span>
          </div>

          <div className="gallery-item gallery-small">
            <img
              src={gallery03}
              alt="Pakistani wedding tablescape"
              
            />
            <span>03 · TABLESCAPE</span>
          </div>

          <div className="gallery-item gallery-wide">
            <img
              src={gallery04}
              alt="Luxury Pakistani mehndi celebration"
             
            />
            <span>04 · MEHNDI CELEBRATION</span>
          </div>

          <div className="gallery-item gallery-small">
            <img
              src={gallery05}
              alt="Pakistani bridal details"
             
            />
            <span>05 · BRIDAL DETAILS</span>
          </div>

          <div className="gallery-item gallery-large">
            <img
              src={gallery06}
              alt="Luxury wedding venue"
             
            />
            <span>06 · VENUE</span>
          </div>

          <div className="gallery-item gallery-wide">
            <img
              src={gallery07}
              alt="Pakistani destination wedding"
              
            />
            <span>07 · DESTINATION WEDDING</span>
          </div>

          <div className="gallery-item gallery-final">
            <img
              src={gallery08}
              alt="Elegant Pakistani wedding reception details"
              
            />
            <span>08 · EVENING DETAILS</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Gallery;