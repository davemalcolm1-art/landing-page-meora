import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav className={`rill-nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">MEORA<span>·</span></a>
      <button className="nav-cta nav-cta--pill" onClick={scrollToWaitlist}>
        Join the Waitlist
      </button>
    </nav>
  );
};

export default Nav;
