import { Helmet } from 'react-helmet-async';

function Process() {
  return (
    <>
      <Helmet>
        <title>Our Process | Veloura Events</title>
        <meta
          name="description"
          content="Discover the thoughtful process Veloura Events follows to plan and create beautifully considered celebrations."
        />
      </Helmet>

      <main className="process-page">
        <section className="process-intro">
          <div className="process-intro-top">
            <p>THE VELOURA PROCESS</p>
            <span>05</span>
          </div>

          <div className="process-intro-content">
            <h1>
              From vision
              <span>to celebration.</span>
            </h1>

            <p>
              A thoughtful process designed to make every stage
              of planning feel clear, personal and effortless.
            </p>
          </div>
        </section>

        <section className="process-steps">
          <div className="process-step">
            <div className="process-step-number">01</div>

            <div className="process-step-content">
              <p>THE BEGINNING</p>
              <h2>Discover</h2>
              <p>
                We start by understanding your vision, your story
                and what you want your celebration to feel like.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">02</div>

            <div className="process-step-content">
              <p>THE DIRECTION</p>
              <h2>Design</h2>
              <p>
                We shape the aesthetic, atmosphere and details
                into a cohesive creative direction.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">03</div>

            <div className="process-step-content">
              <p>THE PLANNING</p>
              <h2>Curate</h2>
              <p>
                From venues and vendors to timelines and finishing
                touches, every element is thoughtfully coordinated.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-step-number">04</div>

            <div className="process-step-content">
              <p>THE CELEBRATION</p>
              <h2>Celebrate</h2>
              <p>
                On the day itself, we take care of the details
                so you can be fully present for every moment.
              </p>
            </div>
          </div>
        </section>

        <section className="process-closing">
          <p>THE VELOURA PROMISE</p>

          <h2>
            Every detail, considered.
            <span>Every moment, yours.</span>
          </h2>
        </section>
      </main>
    </>
  );
}

export default Process;