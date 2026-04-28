const pillars = [
  {
    n: "01",
    title: "Clinical Protocols",
    body: "Evidence-based peptide therapy programs designed and overseen by AHPRA-registered physicians, personalised to your biology and health goals.",
  },
  {
    n: "02",
    title: "Telehealth, Nationwide",
    body: "Consult from anywhere in Australia. Full clinical assessment, blood panel review, and ongoing doctor support — no waiting rooms, no referrals.",
  },
  {
    n: "03",
    title: "Compounded & Delivered",
    body: "All compounds prepared by a TGA-licensed compounding pharmacy and dispatched directly to your door with full cold-chain integrity.",
  },
];

const Pillars = () => (
  <section className="pillars-section">
    <div className="pillars-header reveal">
      <div className="section-eyebrow">
        <div className="section-eyebrow-line"></div>
        <span>What we offer</span>
      </div>
      <h2 className="section-h2 pillars-h2">
        Clinical precision.<br /><em>Human scale.</em>
      </h2>
    </div>

    <div className="pillars-grid">
      {pillars.map((p, i) => (
        <article className="pillar-card reveal" style={{ transitionDelay: `${i * 100}ms` }} key={p.n}>
          <div className="pillar-num">{p.n}</div>
          <h3 className="pillar-title">{p.title}</h3>
          <p className="pillar-body">{p.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Pillars;
