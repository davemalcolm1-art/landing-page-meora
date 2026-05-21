import Cursor from "@/components/rill/Cursor";
import Nav from "@/components/rill/Nav";
import Hero from "@/components/rill/Hero";
import Marquee from "@/components/rill/Marquee";
import Pillars from "@/components/rill/Pillars";
import MaskSection from "@/components/rill/MaskSection";
import Footer from "@/components/rill/Footer";
import useReveal from "@/components/rill/useReveal";

const Index = () => {
  useReveal();
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <MaskSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
