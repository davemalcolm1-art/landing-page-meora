import { useState, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  source: "hero" | "cta" | "footer";
  variant?: "dark" | "light";
}

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const WaitlistForm = ({ source, variant = "dark" }: Props) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!emailRegex.test(trimmed) || trimmed.length > 255) {
      setError("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    const { error: dbErr } = await supabase
      .from("waitlist_signups")
      .insert({ email: trimmed, source });
    if (dbErr && dbErr.code !== "23505") {
      setError("Something went wrong. Please try again.");
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className={`waitlist-success waitlist-success--${variant}`}>
        ✦ You're on the list — we'll be in touch.
      </div>
    );
  }

  return (
    <form className={`waitlist-form waitlist-form--${variant}`} onSubmit={onSubmit} noValidate>
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
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "..." : "Join the Waitlist →"}
      </button>
      {status === "error" && <span className="waitlist-error">{error}</span>}
    </form>
  );
};

export default WaitlistForm;
