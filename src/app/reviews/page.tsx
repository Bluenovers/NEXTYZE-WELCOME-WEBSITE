import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextyze | Reviews",
};

export default function ReviewsPage() {
  return (
    <main className="content container">
      <section className="page-hero">
        <p className="kicker">Reviews</p>
        <h3 className="headline">Client notes from teams and creators.</h3>
        <p className="description">
          These are placeholders for layout until your real testimonials are ready.
        </p>
      </section>

      <section className="section">
        <div className="reviews-grid">
          <div className="review-item">
            <p className="review-text">
              "Our launch page went live in a week and looked premium right away."
            </p>
            <span className="review-name">- Lena M., agency owner</span>
          </div>
          <div className="review-item">
            <p className="review-text">
              "The site loads fast and the monthly plan keeps it updated without any hassle."
            </p>
            <span className="review-name">- Aaron P., creator</span>
          </div>
          <div className="review-item">
            <p className="review-text">
              "Clean design, clear messaging, and simple maintenance. Exactly what we needed."
            </p>
            <span className="review-name">- Priya S., operations lead</span>
          </div>
          <div className="review-item">
            <p className="review-text">
              "Responsive on every screen size and the static build stays lightweight."
            </p>
            <span className="review-name">- Mark J., studio founder</span>
          </div>
          <div className="review-item">
            <p className="review-text">
              "They kept our brand voice intact and delivered fast updates each month."
            </p>
            <span className="review-name">- Dina K., marketing lead</span>
          </div>
          <div className="review-item">
            <p className="review-text">
              "Simple process, clear communication, and a site that feels premium."
            </p>
            <span className="review-name">- Victor T., creator</span>
          </div>
        </div>
      </section>
    </main>
  );
}
