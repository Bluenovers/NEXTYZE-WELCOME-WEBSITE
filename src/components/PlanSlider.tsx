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

// "auto" defers to the CSS scroll-behavior (smooth on .plan-slider-window),
// so "instant" is what actually suppresses the animation.
const getScrollBehavior = () => {
  if (typeof window === "undefined") {
    return "instant" as ScrollBehavior;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth";
};

const defaultIndex = Math.max(
  plans.findIndex((plan) => plan.id === "starter"),
  0,
);

export default function PlanSlider() {
  const [activeId, setActiveId] = useState(plans[defaultIndex].id);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(defaultIndex);

  // Scroll the slider's own horizontal viewport. Never scrollIntoView: that
  // walks every scrollable ancestor and drags the whole page down on mount.
  const centerSlide = (index: number, behavior: ScrollBehavior) => {
    const container = windowRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) {
      return;
    }
    const offset =
      slide.getBoundingClientRect().left - container.getBoundingClientRect().left;
    const left =
      container.scrollLeft +
      offset -
      (container.clientWidth - slide.clientWidth) / 2;
    container.scrollTo({ left, behavior });
  };

  useEffect(() => {
    const container = windowRef.current;
    let cancelled = false;

    // The track only overflows once the webfonts land, so an early centering
    // attempt clamps to 0. Re-run whenever the slider's measurements change.
    const recenter = () => {
      if (!cancelled) {
        centerSlide(activeIndexRef.current, "instant");
      }
    };

    const frame = requestAnimationFrame(recenter);
    document.fonts?.ready.then(recenter);

    const observer = new ResizeObserver(recenter);
    if (container) {
      observer.observe(container);
      if (container.firstElementChild) {
        observer.observe(container.firstElementChild);
      }
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const handleSelect = (index: number) => {
    activeIndexRef.current = index;
    setActiveId(plans[index].id);
    centerSlide(index, getScrollBehavior());
  };

  return (
    <div className="card plan-slider" id="plan-options">
      <div className="plan-slider-head">
        <p className="card-eyebrow">Plan options</p>
      </div>
      <div
        className="plan-slider-window"
        aria-label="Plan options slider"
        ref={windowRef}
      >
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
