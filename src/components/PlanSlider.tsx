'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "growth",
    name: "Growth",
    price: "$49",
    note: "Multi-page site with business email.",
    features: [
      "Up to 5 pages",
      "Custom domain email",
      "SEO setup + analytics",
      "Unlimited edits",
      "Mobile-friendly design",
      "Fast loading speeds",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "$25",
    note: "Static one-page site with domain + hosting.",
    features: [
      "Static one-page website",
      "Custom typography",
      "SEO basics",
      "Unlimited edits",
      "Mobile-friendly design",
      "Fast loading speeds",
    ],
  },
  {
    id: "authority",
    name: "Authority",
    price: "$120",
    note: "Full-scale site with priority support.",
    features: [
      "Unlimited pages",
      "Custom domain email suite",
      "Priority support",
      "Ongoing optimization",
      "Mobile-friendly design",
      "Fast loading speeds",
    ],
  },
];

const getScrollBehavior = () => {
  if (typeof window === "undefined") {
    return "auto" as ScrollBehavior;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
};

export default function PlanSlider() {
  const [activeId, setActiveId] = useState("starter");
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const starterIndex = plans.findIndex((plan) => plan.id === "starter");
    const slide = slideRefs.current[starterIndex];
    if (slide) {
      slide.scrollIntoView({
        behavior: "auto",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  const handleSelect = (index: number) => {
    setActiveId(plans[index].id);
    const slide = slideRefs.current[index];
    if (slide) {
      slide.scrollIntoView({
        behavior: getScrollBehavior(),
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="card plan-slider">
      <div className="plan-slider-head">
        <p className="card-eyebrow">Plan options</p>
      </div>
      <div className="plan-slider-window" aria-label="Plan options slider">
        <div className="plan-slider-track">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`plan-slide${activeId === plan.id ? " is-active" : ""}`}
              data-plan={plan.id}
              tabIndex={0}
              role="button"
              aria-pressed={activeId === plan.id}
              onClick={() => handleSelect(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleSelect(index);
                }
              }}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
            >
              <p className="plan-name">{plan.name}</p>
              <div className="plan">
                <span className="price">{plan.price}</span>
                <span className="per">per month</span>
              </div>
              <p className="plan-note">{plan.note}</p>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="btn ghost small plan-cta" href={`/contact?plan=${plan.id}`}>
                Continue
              </Link>
            </div>
          ))}
        </div>
      </div>
      <p className="plan-note">
        Starter is a static one-page site. Growth and Authority include email +
        expanded support.
      </p>
    </div>
  );
}
