import { useState, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  source: "hero" | "cta" | "footer";
  variant?: "dark" | "light";
}

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const WaitlistForm = ({ source, variant = "dark" }: Props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const trimmedName = firstName.trim();
    if (!trimmedName || trimmedName.length > 100) {
      setError("Please enter your first name.");
      setStatus("error");
      return;
    }
    if (!emailRegex.test(trimmed) || trimmed.length > 255) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setError("Please agree to receive updates.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    const { error: dbErr } = await supabase
      .from("waitlist_signups")
      .insert({
        email: trimmed,
        source,
        consent_timestamp: new Date().toISOString(),
      });
    if (dbErr && dbErr.code !== "23505") {
      console.error("Error:", dbErr);
      setError("Something went wrong. Please try again.");
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setFirstName("");
  };

  if (status === "success") {
    return (
      <div className={`waitlist-success waitlist-success--${variant}`}>
        You're on the list. We'll be in touch soon.
      </div>
    );
  }

  return (
    <form className={`waitlist-form-stack waitlist-form-stack--${variant}`} onSubmit={onSubmit} noValidate>
      <input
        type="text"
        required
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        maxLength={100}
        aria-label="First name"
        disabled={status === "loading"}
      />
      <input
        id={`waitlist-email-${source}`}
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        maxLength={255}
        aria-label="Email address"
        disabled={status === "loading"}
      />
      <div className="waitlist-consent">
        <input
          type="checkbox"
          id={`consent-${source}`}
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <label htmlFor={`consent-${source}`}>
          I agree to receive updates from Meora. View our{" "}
          <a href="/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      <button type="submit" disabled={status === "loading" || !consent}>
        {status === "loading" ? "..." : "Join the waitlist →"}
      </button>
      {status === "error" && <span className="waitlist-error-stack">{error}</span>}
    </form>
  );
};

export default WaitlistForm;
