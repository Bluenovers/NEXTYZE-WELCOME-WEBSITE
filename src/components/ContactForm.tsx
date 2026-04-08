"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const ENDPOINT_URL = "https://nextyzedono-gs4fe1793bwg.bluenovers.deno.net";

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter (static) — $25" },
  { value: "growth", label: "Growth — $49" },
  { value: "authority", label: "Authority — $120" },
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "1-2 weeks",
  "2-4 weeks",
  "Flexible",
];

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const planParam = (searchParams.get("plan") ?? "").toLowerCase();

  const planMap = useMemo(() => {
    return PLAN_OPTIONS.reduce<Record<string, string>>((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {});
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    plan: "starter",
    timeline: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (planMap[planParam]) {
      setForm((current) => ({ ...current, plan: planParam }));
    }
  }, [planMap, planParam]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name || !form.email) {
      setStatus("error");
      setError("Please add your name and email so we can reply.");
      return;
    }

    setStatus("sending");

    const planLabel = planMap[form.plan] ?? form.plan;
    const details = [
      `Plan: ${planLabel}`,
      `Company: ${form.company || "N/A"}`,
      `Timeline: ${form.timeline || "N/A"}`,
      "",
      form.message || "No message provided.",
    ];

    const payload = {
      name: form.name,
      email: form.email,
      plan: form.plan,
      subject: `New ${planLabel} inquiry`,
      message: details.join("\n"),
    };

    try {
      const response = await fetch(ENDPOINT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const detail = await response.text();
        let message = "Send failed. Please try again.";

        try {
          const parsed = JSON.parse(detail);
          if (parsed?.error) {
            message = String(parsed.error);
          }
        } catch {
          if (detail) {
            message = detail;
          }
        }

        throw new Error(message);
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        company: "",
        plan: form.plan,
        timeline: "",
        message: "",
      });
    } catch (sendError) {
      const fallback = "Something went wrong. Please try again or email us directly.";
      let message = fallback;

      if (sendError instanceof Error) {
        message = sendError.message || fallback;
        if (message.toLowerCase().includes("failed to fetch")) {
          message = "Network error. Please try again or email us directly.";
        }
      }

      setStatus("error");
      setError(message);
    }
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Full name</span>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Company</span>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={form.company}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Plan</span>
          <select name="plan" value={form.plan} onChange={handleChange}>
            {PLAN_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-field">
          <span>Timeline</span>
          <select name="timeline" value={form.timeline} onChange={handleChange}>
            <option value="">Select timeline</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>Project summary</span>
        <textarea
          name="message"
          placeholder="What do you want the site to achieve?"
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <div className="form-actions">
        <button className="btn primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send request"}
        </button>
        <span className={`form-status ${status === "error" ? "is-error" : ""} ${status === "sent" ? "is-success" : ""}`}>
          {status === "sent" && "Thanks! We will reply within 1 business day."}
          {status === "error" && error}
        </span>
      </div>
    </form>
  );
}
