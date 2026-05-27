const pillars = [
  {
    n: "01",
    title: "Clinician-Guided Pathways",
    body: "Your pathway starts with an individual health assessment and a consultation with a registered Australian medical practitioner.",
  },
  {
    n: "02",
    title: "Telehealth, Nationwide",
    body: "Meora supports remote consultations with registered Australian medical practitioners for eligible adults across Australia.",
  },
  {
    n: "03",
    title: "Prescription Fulfilment",
    body: "Where treatment is prescribed after consultation, Meora helps coordinate fulfilment through an Australian pharmacy partner.",
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
        Personalised longevity, clinically guided.
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
