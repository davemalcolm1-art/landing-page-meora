import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const focusWaitlist = () => {
    const section = document.getElementById("waitlist");
    const input = document.getElementById("waitlist-email-hero") as HTMLInputElement | null;
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    // Focus after scroll begins so users get clear feedback
    window.setTimeout(() => {
      input?.focus({ preventScroll: true });
    }, 600);
  };

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#waitlist");
      // Wait for home to mount, then scroll + focus
      window.setTimeout(focusWaitlist, 250);
      return;
    }
    focusWaitlist();
  };

  return (
    <nav className={`rill-nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" style={{display:'flex', alignItems:'center', gap:'10px', textDecoration:'none'}}>
        <img
          src="/meora-mark.svg"
          alt=""
          style={{height:'1em', width:'1em', fontSize:'22px', display:'block'}}
        />
        <span style={{fontFamily:'"Fraunces",serif', fontWeight:700, color:'#FFFFFF', fontSize:'22px', letterSpacing:'0.08em', lineHeight:1, display:'block'}}>MEORA</span>
      </a>
      <button className="nav-cta nav-cta--pill" onClick={scrollToWaitlist}>
        Join the Waitlist
      </button>
    </nav>
  );
};

export default Nav;
