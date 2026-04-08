import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextyze | About",
};

export default function AboutPage() {
  return (
    <main className="content container">
      <section className="page-hero">
        <p className="kicker">About</p>
        <h3 className="headline">A focused studio for premium static experiences.</h3>
        <p className="description">
          Nextyze builds high-end static sites for firms and creators with momentum.
          We keep the process lean and the output refined.
        </p>
        <div className="badge-row">
          <span className="badge">Static-first delivery</span>
          <span className="badge">White-glove updates</span>
        </div>
      </section>

      <section className="section split">
        <div className="card">
          <h3 className="section-title">Biography</h3>
          <p className="bio">
            Nextyze is a small studio led by a founder who has shipped hundreds of
            fast, focused sites for busy teams. We specialize in clear messaging,
            refined design, and dependable hosting.
          </p>
        </div>
        <div className="card">
          <h3 className="section-title">Why static</h3>
          <p className="bio">
            Static sites are fast, secure, and easy to maintain. They keep your
            message front and center without the overhead of a complex app.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3 className="section-title">How we work</h3>
          <p className="section-subtitle">
            A simple process that keeps your site consistent and easy to manage.
          </p>
        </div>
        <div className="split">
          <div className="card">
            <h4 className="card-title">Process</h4>
            <ol className="steps">
              <li>Kickoff call to map your content and goals.</li>
              <li>Design and build the static site with brand polish.</li>
              <li>Launch with domain, hosting, and unlimited edits 24/7.</li>
            </ol>
          </div>
          <div className="card">
            <h4 className="card-title">What you send</h4>
            <ul className="feature-list">
              <li>Logo, colors, and fonts (or references).</li>
              <li>Key links, bios, and services.</li>
              <li>Photos, press, or portfolio items.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h3 className="section-title">At a glance</h3>
          <p className="section-subtitle">Proven delivery for brands with momentum.</p>
        </div>
        <div className="stats">
          <div className="stat-card">
            <span className="stat-number">1000+</span>
            <span className="stat-label">customers served</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">7 days</span>
            <span className="stat-label">avg launch</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">hosting uptime</span>
          </div>
        </div>
      </section>
    </main>
  );
}
