const items = [
  "Telehealth Consultations",
  "Registered Practitioners",
  "Clinical Guidance",
  "Secure Intake",
  "Individual Assessments",
  "Australia Wide",
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
