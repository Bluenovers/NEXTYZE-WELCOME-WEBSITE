import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextyze | Plans",
};

export default function PlansPage() {
  return (
    <main className="content container">
      <section className="page-hero">
        <p className="kicker">Plans</p>
        <h3 className="headline">Static website subscriptions that scale with your brand.</h3>
        <p className="description">
          Every plan includes domain, hosting, and a static build. Choose the tier
          based on page count and support depth.
        </p>
        <div className="badge-row">
          <span className="badge">Static website thats it</span>
          <span className="badge">Domain + hosting included</span>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="plan-grid">
          <div className="plan-card">
            <p className="plan-name">Starter</p>
            <div className="plan">
              <span className="price">$25</span>
              <span className="per">per month</span>
            </div>
            <p className="plan-note">Static website thats it. Domain + hosting + SSL included.</p>
            <ul className="plan-features">
              <li>Static website thats it (no email suite)</li>
              <li>One-page layout: hero, services, about, contact</li>
              <li>Custom typography, colors, and spacing system</li>
              <li>SEO basics: titles, meta descriptions, OG image</li>
              <li>Performance pass: image compression + fast load</li>
              <li>Unlimited edits 24/7</li>
            </ul>
          </div>
          <div className="plan-card">
            <p className="plan-name">Growth</p>
            <div className="plan">
              <span className="price">$79</span>
              <span className="per">per month</span>
            </div>
            <p className="plan-note">Includes custom domain email + business tools.</p>
            <ul className="plan-features">
              <li>Up to 5 pages plus a focused landing section</li>
              <li>Navigation structure + internal linking</li>
              <li>Custom domain email (example@yourdomain.com)</li>
              <li>Mailbox setup + aliases + forwarding</li>
              <li>SEO setup + analytics + performance checks</li>
              <li>Unlimited edits 24/7</li>
            </ul>
          </div>
          <div className="plan-card">
            <p className="plan-name">Authority</p>
            <div className="plan">
              <span className="price">$149</span>
              <span className="per">per month</span>
            </div>
            <p className="plan-note">Includes custom domain email + advanced support.</p>
            <ul className="plan-features">
              <li>Unlimited pages + campaign landing pages</li>
              <li>Custom domain email suite (example@yourdomain.com)</li>
              <li>Multiple mailboxes + aliases + forwarding</li>
              <li>Copy polish, brand refresh, and layout upgrades</li>
              <li>Priority support with fast turnarounds</li>
              <li>Ongoing performance review + optimization</li>
              <li>Unlimited edits 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section split">
        <div className="card">
          <h3 className="section-title">Included in every plan</h3>
          <ul className="feature-list">
            <li>Custom design aligned to your brand</li>
            <li>Mobile-first layout for all screen sizes</li>
            <li>Domain + hosting + SSL management</li>
            <li>Unlimited edits 24/7</li>
            <li>Security and performance checks</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="section-title">Upgrade options</h3>
          <ul className="feature-list">
            <li>Custom domain email addresses (example@domain.com)</li>
            <li>Additional pages and landing pages</li>
            <li>Campaign launches and seasonal refreshes</li>
            <li>SEO setup and analytics</li>
            <li>Priority support and faster turnaround</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
