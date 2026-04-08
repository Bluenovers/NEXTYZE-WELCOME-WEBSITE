import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nextyze | Contact",
};

export default function ContactPage() {
  return (
    <main className="content container">
      <section className="page-hero">
        <p className="kicker">Contact</p>
        <h3 className="headline">Launch a premium website in days.</h3>
        <p className="description">
          Send your brand assets and goals. We build and host the site under a
          simple monthly plan.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="mailto:hello@nextyze.com">
            Email us
          </a>
          <Link className="btn ghost" href="/plans">
            See plans
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="card">
            <h4 className="card-title">Email</h4>
            <p className="description">hello@nextyze.com</p>
            <p className="note">We reply within 1 business day.</p>
          </div>
          <div className="card">
            <h4 className="card-title">Start a plan</h4>
            <p className="description">
              Tell us your business, audience size, and desired pages.
            </p>
            <Link className="text-link" href="/plans">
              Compare plans
            </Link>
          </div>
          <div className="card">
            <h4 className="card-title">What to share</h4>
            <ul className="feature-list">
              <li>Logo, brand colors, and fonts</li>
              <li>Services, bio, and key links</li>
              <li>Photos, press, or social handles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card cta-card">
          <h3 className="card-title">Prefer a call?</h3>
          <p className="description">
            Send a few time slots and your time zone. We will confirm by email.
          </p>
          <a className="btn primary" href="mailto:hello@nextyze.com">
            Book by email
          </a>
        </div>
      </section>
    </main>
  );
}
