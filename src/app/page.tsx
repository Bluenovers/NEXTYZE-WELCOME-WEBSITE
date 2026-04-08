import Link from "next/link";
import PlanSlider from "@/components/PlanSlider";

export default function Home() {
  return (
    <main className="content container">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="kicker">Static website studio</p>
            <h3 className="headline">
              Websites for established firms and influencers who want a clean,
              reliable online presence.
            </h3>
            <p className="description">
              We design fast, static sites for businesses with existing audiences.
              Simple, polished, and dependable month after month.
            </p>
          </div>

          <div className="hero-details">
            <div className="hero-actions">
              <Link className="btn primary" href="/plans">
                View plans
              </Link>
              <Link className="btn ghost" href="/contact">
                Start a site
              </Link>
            </div>
            <div className="badge-row">
              <span className="badge">Static website thats it</span>
              <span className="badge">Domain + hosting included</span>
            </div>
            <p className="note">Average launch time: 7 days. All plans stay static.</p>
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
          </div>
        </div>

        <PlanSlider />
      </section>

      <section className="section">
        <div className="section-head">
          <h3 className="section-title">Why Nextyze</h3>
          <p className="section-subtitle">
            Focused on clarity, speed, and on-demand edits.
          </p>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <h4 className="card-title">Static speed</h4>
            <p className="description">
              Fast load times with a clean layout that highlights your message
              and brand.
            </p>
          </div>
          <div className="info-card">
            <h4 className="card-title">Always-on care</h4>
            <p className="description">
              We handle updates, tweaks, and polish without moving you off a
              static stack.
            </p>
          </div>
          <div className="info-card">
            <h4 className="card-title">Audience-ready</h4>
            <p className="description">
              Designed for firms and influencers who already have momentum and
              need a solid home.
            </p>
          </div>
        </div>
      </section>

      <section className="section split">
        <div className="card">
          <h3 className="section-title">Biography</h3>
          <p className="bio">
            Nextyze is a small studio led by a founder who has shipped hundreds
            of fast, focused sites for busy teams. We specialize in clear
            messaging, clean design, and dependable hosting.
          </p>
          <Link className="text-link" href="/about">
            Read the full story
          </Link>
        </div>
        <div className="card">
          <h3 className="section-title">Reviews</h3>
          <p className="description">
            Sample feedback from clients who needed a clean static presence.
          </p>
          <Link className="text-link" href="/reviews">
            View review highlights
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="card cta-card">
          <h3 className="card-title">
            Ready for a static website that fits your brand?
          </h3>
          <p className="description">
            Pick a plan, share your assets, and we ship a polished site with
            domain and hosting included.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/contact">
              Start now
            </Link>
            <Link className="btn ghost" href="/plans">
              Compare plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
