import WaitlistForm from "./WaitlistForm";

const Hero = () => {
  return (
    <section className="hero hero--waitlist" id="top">
      <div className="hero-waitlist-inner">
        <div className="hero-eyebrow hero-eyebrow--center reveal">
          <div className="hero-eyebrow-line"></div>
          <span>AUSTRALIAN LONGEVITY MEDICINE · DOCTOR-PRESCRIBED</span>
          <div className="hero-eyebrow-line"></div>
        </div>

        <h2 className="hero-tagline reveal reveal-delay-1">
          It starts with<br /><em>ME.</em>
        </h2>

        <p className="hero-sub hero-sub--center reveal reveal-delay-2">
          Doctor-prescribed peptide protocols for energy, recovery and long-term health. Available anywhere in Australia.
        </p>

        <div className="hero-waitlist reveal reveal-delay-3" id="waitlist">
          <div className="waitlist-label">JOIN THE WAITLIST</div>
          <WaitlistForm source="hero" variant="dark" />
        </div>
      </div>

      <div className="hero-bottom" aria-hidden="true">
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
