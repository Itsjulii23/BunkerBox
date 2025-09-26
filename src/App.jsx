import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Crossfit from "./components/Crossfit";
import Prices from "./components/Prices";
import VideoCrossfit from "./components/VideoCrossfit";
import Team from "./components/Team";
import Ubication from "./components/Ubication";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  const homeRef = useRef(null);
  const tarifasRef = useRef(null);
  const crossfitRef = useRef(null);
  const teamRef = useRef(null);
  const ubicationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTarifas = () => {
    tarifasRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCrossfit = () => {
    crossfitRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToUbication = () => {
    ubicationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        <section ref={homeRef} className="scroll-mt-20">
          <Navbar
            onScrollToHome={scrollToHome}
            onScrollToTarifas={scrollToTarifas}
            onScrollToCrossfit={scrollToCrossfit}
            onScrollToTeam={scrollToTeam}
            onScrollToUbication={scrollToUbication}
            onScrollToContact={scrollToContact}
          />
        </section>

        <section ref={crossfitRef} className="scroll-mt-20">
          <Crossfit />
        </section>

        <section>
          <VideoCrossfit />
        </section>

        <section ref={teamRef} className="scroll-mt-20">
          <Team />
        </section>

        <section ref={ubicationRef} className="scroll-mt-20">
          <Ubication />
        </section>

        <section ref={tarifasRef} className="scroll-mt-20">
          <Prices />
        </section>

        <section ref={contactRef} className="scroll-mt-20">
          <Contact />
        </section>

        <section className="scroll-mt-20">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
