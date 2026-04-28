import { useEffect, useState } from "react";

type QuizModalProps = {
  open: boolean;
  onClose: () => void;
};

const steps = [
  {
    eyebrow: "Assessment · Step 1 of 5 — Your goal",
    question: "What's your primary health goal?",
    options: [
      "Body composition, sleep & recovery — Foundation.ME",
      "Skin, collagen & body recomposition — Radiance.ME",
      "Injury recovery & tissue repair — Repair.ME",
      "Fat loss & metabolism — Lean.ME",
      "Energy, drive & performance — Vital.ME",
      "Immune support & longevity — Shield.ME",
    ],
  },
  {
    eyebrow: "Assessment · Step 2 of 5 — Your age",
    question: "How old are you?",
    options: ["25–34", "35–44", "45–54", "55–64", "65+"],
  },
  {
    eyebrow: "Assessment · Step 3 of 5 — Medical history",
    question: "Do you have any of the following?",
    options: [
      "Active cancer or cancer treatment",
      "Uncontrolled diabetes",
      "Severe cardiovascular condition",
      "None of the above",
    ],
  },
  {
    eyebrow: "Assessment · Step 4 of 5 — Location",
    question: "Where are you based?",
    options: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia / Other",
    ],
  },
  {
    eyebrow: "Assessment · Step 5 of 5 — Consent",
    question: "One last thing — do you agree to a telehealth consultation with an AHPRA-registered doctor?",
    options: [
      "Yes — I understand this is a clinical service",
      "No — I'm just exploring for now",
    ],
  },
];

const QuizModal = ({ open, onClose }: QuizModalProps) => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<(number | null)[]>([null, null, null, null, null]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setSelected([null, null, null, null, null]);
      setShowResult(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const select = (i: number) => {
    const next = [...selected];
    next[step] = i;
    setSelected(next);
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  const isLast = step === steps.length - 1;
  const canProceed = selected[step] !== null;

  return (
    <div className={`quiz-overlay ${open ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="quiz-modal">
        <button className="quiz-close" onClick={onClose}>✕</button>

        <div className="quiz-progress">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`quiz-progress-bar ${showResult || i < step ? "done" : ""}`}
            />
          ))}
        </div>

        {!showResult ? (
          <div className="quiz-step active">
            <div className="quiz-eyebrow">{steps[step].eyebrow}</div>
            <div className="quiz-question">{steps[step].question}</div>
            <div className="quiz-options">
              {steps[step].options.map((opt, i) => (
                <button
                  key={i}
                  className={`quiz-option ${selected[step] === i ? "selected" : ""}`}
                  onClick={() => select(i)}
                >
                  <div className="quiz-option-dot"></div>
                  {opt}
                </button>
              ))}
            </div>
            <button className="quiz-next" onClick={handleNext} disabled={!canProceed}>
              {isLast ? "See my result →" : "Continue →"}
            </button>
          </div>
        ) : (
          <div className="quiz-step active">
            <div className="quiz-result">
              <div className="quiz-result-icon">✓</div>
              <h3>You're eligible<em> for Meora.</em></h3>
              <p>Based on your answers, you're a strong candidate for a Meora protocol. The next step is a short blood panel — we'll send you the exact markers to request, matched to your goal.</p>
              <input className="quiz-input" type="text" placeholder="Your first name" />
              <input className="quiz-input" type="email" placeholder="Email address" />
              <input className="quiz-input" type="tel" placeholder="Mobile number (for SMS reminders)" />
              <button className="quiz-next" style={{ marginTop: 8 }}>Book my consultation →</button>
              <div style={{ fontSize: 11, color: "var(--text-dimmer)", marginTop: 16, lineHeight: 1.6, fontFamily: "'DM Mono', monospace" }}>
                Your details are used only to facilitate your clinical assessment. All information is handled in accordance with Australian Privacy Law and AHPRA guidelines.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
