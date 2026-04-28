import { useState } from "react";
import { useQuiz } from "./quizContext";

type Hero = {
  tag: string;
  name: string;
  desc: string;
  badge: string;
  img: string;
  pills: string[];
};

type Small = {
  tag: string;
  name: string;
  img: string;
  detailImg: string;
  desc: string;
  pills: string[];
  badge: string;
};

const heroes: Hero[] = [
  {
    tag: "BODY COMPOSITION · SLEEP · RECOVERY",
    name: "Foundation.ME",
    desc: "Wake up restored. Train harder. Recover faster. The GH axis protocol that addresses the decline most people mistake for ageing.",
    badge: "MOST PRESCRIBED",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    pills: ["Lean out", "Sleep deeper", "Recover faster"],
  },
  {
    tag: "SKIN · COLLAGEN · BODY RECOMPOSITION",
    name: "Radiance.ME",
    desc: "Renewed skin, improved tone, and body recomposition — without a single injection. The protocol designed specifically for women.",
    badge: "INJECTION-FREE OPTION",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80",
    pills: ["Glow", "Tone", "Renew"],
  },
];

const smalls: Small[] = [
  {
    name: "Repair.ME",
    badge: "INJURY RECOVERY",
    tag: "INJURY RECOVERY · TISSUE REPAIR · MOBILITY",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    detailImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    desc: "For the injuries that won't fully heal. Tendons, ligaments, joints — targeted repair at the cellular level. Prescribed following blood panel review and clinical assessment.",
    pills: ["Tendons", "Ligaments", "Mobility", "Gut health"],
  },
  {
    name: "Lean.ME",
    badge: "BODY RECOMPOSITION",
    tag: "FAT LOSS · METABOLISM · BODY RECOMPOSITION",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
    detailImg: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
    desc: "Targets fat metabolism directly. The Australian-developed protocol for visible body recomposition — available in injectable and oral formats.",
    pills: ["Fat loss", "Lean mass", "Oral option"],
  },
  {
    name: "Vital.ME",
    badge: "ENERGY & DRIVE",
    tag: "ENERGY · DRIVE · PERFORMANCE",
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&q=80",
    detailImg: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800&q=80",
    desc: "Restore the drive, energy, and vitality that made you feel unstoppable. For men and women seeking to reclaim physical and mental performance.",
    pills: ["Energy", "Drive", "Confidence"],
  },
  {
    name: "Shield.ME",
    badge: "IMMUNE SUPPORT",
    tag: "IMMUNE SUPPORT · LONGEVITY · CELLULAR HEALTH",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    detailImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    desc: "Immune resilience and cellular optimisation. The protocol for those playing a long game — post-viral recovery, longevity stacks, and ongoing immune support.",
    pills: ["Immunity", "Longevity", "Cellular"],
  },
  {
    name: "Peak.ME",
    badge: "FLAGSHIP PROTOCOL",
    tag: "COMPREHENSIVE · FULL SPECTRUM · LONGEVITY",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    detailImg: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    desc: "The complete Meora stack. Multiple biological systems addressed in one flagship protocol. For those who want everything optimised simultaneously.",
    pills: ["Full spectrum", "Longevity", "Flagship"],
  },
];

const Protocols = () => {
  const { open } = useQuiz();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active = activeIdx !== null ? smalls[activeIdx] : null;

  const toggle = (i: number) => {
    setActiveIdx((cur) => (cur === i ? null : i));
  };

  return (
    <section className="protocols-section" id="protocols">
      <div className="protocols-header">
        <div className="protocols-header-left">
          <div className="protocols-eyebrow">OUR PROTOCOLS</div>
          <h2 className="protocols-heading">
            Clinician-curated.<br />
            <em>Goal-specific.</em>
          </h2>
        </div>
        <p className="protocols-header-right">
          Each protocol is prescribed by an AHPRA-registered doctor following blood panel review. Select by goal — not by guesswork.
        </p>
      </div>

      <div className="protocols-hero-row">
        {heroes.map((h) => (
          <div className="protocol-hero-card" key={h.name} onClick={open}>
            <img className="protocol-hero-img" src={h.img} alt={h.name} />
            <div className="protocol-hero-overlay" />
            <div className="protocol-hero-glass">
              <div className="protocol-hero-badge">{h.badge}</div>
              <div className="protocol-hero-name">{h.name}</div>
              <div className="protocol-hero-tag">{h.tag}</div>
              <div className="protocol-hero-desc">{h.desc}</div>
              <div className="protocol-hero-pills">
                {h.pills.map((p) => (
                  <span className="protocol-hero-pill" key={p}>{p}</span>
                ))}
              </div>
              <span className="protocol-hero-cta">Start your assessment →</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`protocol-detail-panel ${active ? "open" : ""}`}>
        {active && (
          <div className="protocol-detail-inner">
            <button
              className="protocol-detail-close"
              onClick={() => setActiveIdx(null)}
              aria-label="Close detail"
            >
              ×
            </button>
            <div className="protocol-detail-image">
              <img src={active.detailImg} alt={active.name} />
            </div>
            <div className="protocol-detail-content">
              <div className="protocol-detail-badge">{active.badge}</div>
              <div className="protocol-detail-eyebrow">{active.tag}</div>
              <h3 className="protocol-detail-name">{active.name}</h3>
              <p className="protocol-detail-desc">{active.desc}</p>
              <div className="protocol-detail-pills">
                {active.pills.map((p) => (
                  <span className="protocol-detail-pill" key={p}>{p}</span>
                ))}
              </div>
              <button className="protocol-detail-cta" onClick={open}>
                Start your assessment →
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="protocols-small-row">
        {smalls.map((s, i) => (
          <div
            className={`protocol-small-card ${activeIdx === i ? "active" : ""} ${activeIdx !== null && activeIdx !== i ? "dim" : ""}`}
            key={s.name}
            onClick={() => toggle(i)}
          >
            <img className="protocol-small-img" src={s.img} alt={s.name} />
            <div className="protocol-small-overlay" />
            <div className="protocol-small-content">
              <div className="protocol-small-tag">{s.tag}</div>
              <div className="protocol-small-name">{s.name}</div>
              <span className="protocol-small-cta">
                {activeIdx === i ? "Close ×" : "View details →"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="protocols-compliance">
        All protocols are prescribed by AHPRA-registered Australian doctors following blood panel review and clinical assessment. No protocol is dispensed without a valid prescription.
      </p>
    </section>
  );
};

export default Protocols;
