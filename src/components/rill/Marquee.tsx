const items = [
  "AHPRA-Registered Physicians",
  "TGA-Licensed Pharmacy",
  "Peptide Therapy",
  "GH-Axis Optimisation",
  "Metabolic Health",
  "Cold-Chain Delivery",
  "Telehealth, Nationwide",
  "Personalised Blood Panels",
];

const Marquee = () => {
  const all = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {all.map((t, i) => (
          <div className="marquee-item" key={i}>
            {t}
            <div className="marquee-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
