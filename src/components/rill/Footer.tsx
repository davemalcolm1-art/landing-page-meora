import { Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="rill-footer">
    <div className="footer-top">
      <div className="footer-brand">
        <div className="footer-logo">MEORA</div>
        <div className="footer-tagline">Built by science.<br />Made for ME.</div>
        <div className="footer-socials" aria-label="Social links">
          <a href="https://www.instagram.com/meora.health/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h5>Protocols</h5>
        <ul>
          <li><a href="#">Foundation.ME</a></li>
          <li><a href="#">Radiance.ME</a></li>
          <li><a href="#">Repair.ME</a></li>
          <li><a href="#">Lean.ME</a></li>
          <li><a href="#">Vital.ME</a></li>
          <li><a href="#">Shield.ME</a></li>
          <li><a href="#">Peak.ME</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="#">About Meora</a></li>
          <li><a href="#">Our doctors</a></li>
          <li><a href="#">Our standards</a></li>
          <li><a href="#">Journal</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Support</h5>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Telehealth Disclaimer</a></li>
          <li><a href="#">Product Disclaimer</a></li>
          <li><a href="#">My Account</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-legal">
        All peptide programs are prescribed by AHPRA-registered Australian doctors following a thorough clinical assessment. Meora is not a pharmacy. All products are compounded and dispensed by TGA-licensed compounding pharmacies. Individual results vary. This website does not constitute medical advice. Always consult a qualified healthcare professional before commencing any treatment.
      </div>
      <div className="footer-copy">© 2026 Meora Health Pty Ltd</div>
    </div>
  </footer>
);

export default Footer;
