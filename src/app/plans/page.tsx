import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextyze | Plans",
};

export default function PlansPage() {
  return (
    <main className="content container">
      <section className="page-hero">
        <p className="kicker">Plans</p>
        <h3 className="headline">Website subscriptions that scale with your brand.</h3>
        <p className="description">
          Every plan includes domain, hosting, and a full website build. Choose the
          tier based on page count and support depth.
        </p>
        <div className="badge-row">
          <span className="badge">Website build only</span>
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
            <p className="plan-note">Static one-page site with domain + hosting included.</p>
            <ul className="plan-features">
              <li>Static one-page website</li>
              <li>Custom typography + colors</li>
              <li>SEO basics + indexing</li>
              <li>Domain + hosting included</li>
              <li>Mobile-first build</li>
              <li>Unlimited edits</li>
            </ul>
          </div>
          <div className="plan-card">
            <p className="plan-name">Growth</p>
            <div className="plan">
              <span className="price">$49</span>
              <span className="per">per month</span>
            </div>
            <p className="plan-note">Multi-page site with business email + analytics.</p>
            <ul className="plan-features">
              <li>Up to 5 pages</li>
              <li>Custom domain email</li>
              <li>Navigation + internal links</li>
              <li>SEO + analytics setup</li>
              <li>Mobile-first build</li>
              <li>Unlimited edits</li>
            </ul>
          </div>
          <div className="plan-card">
            <p className="plan-name">Authority</p>
            <div className="plan">
              <span className="price">$120</span>
              <span className="per">per month</span>
            </div>
            <p className="plan-note">Full-scale site with priority support.</p>
            <ul className="plan-features">
              <li>Unlimited pages</li>
              <li>Email suite + aliases</li>
              <li>Brand refresh + copy polish</li>
              <li>Priority support</li>
              <li>Performance optimization</li>
              <li>Unlimited edits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section split">
        <div className="card">
          <h3 className="section-title">Included in every plan</h3>
          <ul className="feature-list">
            <li>Custom design aligned to your brand</li>
            <li>Domain + hosting + SSL management</li>
            <li>Mobile-first layout for all screens</li>
            <li>Security and performance checks</li>
            <li>Unlimited edits</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="section-title">Upgrade options</h3>
          <ul className="feature-list">
            <li>Custom domain email addresses</li>
            <li>Additional pages and landing pages</li>
            <li>Campaign launches and refreshes</li>
            <li>SEO setup and analytics</li>
            <li>Priority support and faster turnaround</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
