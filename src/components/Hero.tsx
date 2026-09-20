function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">LUXURY WEDDING & EVENT PLANNING</p>

        <h1>
          Moments made
          <span> unforgettable.</span>
        </h1>

        <p className="hero-description">
          Thoughtfully designed celebrations, beautifully planned
          and effortlessly brought to life.
        </p>

        <div className="hero-buttons">
          <a href="/contact" className="primary-button">
            Plan Your Event
          </a>

          <a href="/gallery" className="secondary-button">
            Explore Our Work
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.openai.com/static-rsc-4/jJpDhbqm44thwKJ44gnuddjA6xvCg2d6p39g9JA6gHnX_or39lTVZ287ZBCC3y4oXQonKXSpHOldVsWWTJ6OjZIp9zFFrh2awN-w50mqN8RkZW6R3AtFJEwvJ9mVbsAfRNI4C13HLt25PRJhtLKf1o3EZmRQFgY3j1Y1dfbtyXIfbKt49qmrLXZcGIj5mgfF?purpose=fullsize"
          alt="Luxury wedding reception"
        />
      </div>
    </section>
  );
}

export default Hero;