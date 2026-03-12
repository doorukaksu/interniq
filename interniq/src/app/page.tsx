export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">Early Access for Students</div>

        <h1>
          Land competitive internships
          <span> smarter with AI</span>
        </h1>

        <p className="subtext">
          InternIQ helps students optimise their CV, prepare for interviews,
          and target the right companies with more confidence.
        </p>

        <form
          className="waitlistForm"
          action="https://formspree.io/f/xpqyryjj"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>

        <p className="smallText">
          Join the waitlist for beta access and launch updates.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h3>AI CV Optimisation</h3>
          <p>
            Get sharper, more role specific feedback for internship
            applications.
          </p>
        </div>

        <div className="card">
          <h3>Internship Intelligence</h3>
          <p>
            Understand hiring expectations, timelines, and what top firms
            actually look for.
          </p>
        </div>

        <div className="card">
          <h3>Interview Preparation</h3>
          <p>
            Practise smarter with focused support for competitive internship
            pathways.
          </p>
        </div>
      </section>

      <section className="problem">
        <h2>The internship process is fragmented</h2>
        <p>
          Students juggle resume checkers, random advice, scattered interview
          prep, and unclear expectations. InternIQ brings it together in one
          focused platform.
        </p>
      </section>

      <section className="cta">
        <h2>Be first in line</h2>
        <p>
          We are building InternIQ for ambitious students in maths, CS,
          engineering, and finance.
        </p>
        <a href="#top" className="ctaButton">
          Get Early Access
        </a>
      </section>
    </main>
  );
}