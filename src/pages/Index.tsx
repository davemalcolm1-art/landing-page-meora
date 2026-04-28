import Cursor from "@/components/rill/Cursor";
import Nav from "@/components/rill/Nav";
import Hero from "@/components/rill/Hero";
import Marquee from "@/components/rill/Marquee";
import Pillars from "@/components/rill/Pillars";
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
      </main>
      <Footer />
    </>
  );
};

export default Index;
