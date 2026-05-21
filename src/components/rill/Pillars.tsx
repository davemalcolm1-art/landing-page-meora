const pillars = [
  {
    n: "01",
    title: "Clinical Protocols",
    body: "Doctor-prescribed protocols developed by AHPRA-registered doctors and guided by your individual health assessment.",
  },
  {
    n: "02",
    title: "Telehealth, Nationwide",
    body: "Consult from anywhere in Australia. Full clinical assessment and ongoing doctor support — no waiting rooms, no referrals required.",
  },
  {
    n: "03",
    title: "Compounded & Delivered",
    body: "All compounds prepared by a registered compounding pharmacy and dispensed only on lawful prescription.",
  },
];

const Pillars = () => (
  <section className="pillars-section">
    <div className="pillars-header reveal">
      <div className="section-eyebrow">
        <div className="section-eyebrow-line"></div>
        <span>WHAT WE OFFER</span>
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
