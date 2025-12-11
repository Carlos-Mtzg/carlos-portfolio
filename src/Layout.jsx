// Background
import DotGrid from "@components/DotGrid";

// Sections
import Hero from "@sections/Hero";
import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import Experience from "@sections/Experience";
import Contact from "@sections/Contact";

// Components
import Header from "@components/layout/Header";
import UpButton from "@components/layout/UpButton";
import { useEffect, useState } from "react";

function Layout() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (mobile) setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-6 max-w-xs w-full text-center flex flex-col gap-4">
            <span className="text-2xl font-semibold text-secondary-600">
              ¡Mejor en escritorio!
            </span>
            <p className="text-neutral-700 dark:text-neutral-200 text-base">
              Para apreciar mejor el rendimiento y el diseño de este portafolio,
              te recomendamos abrirlo en un dispositivo de escritorio.
            </p>
            <button
              className="mt-2 px-4 py-2 rounded-full bg-secondary-600 text-white font-medium hover:bg-secondary-700 transition"
              onClick={() => setShowModal(false)}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
      <div className="min-h-screen w-full relative bg-black">
        {!isMobile ? (
          <div className="absolute inset-0 min-h-full z-0">
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#271E37"
              activeColor="#5327FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        ) : (
          <div className="absolute inset-0 min-h-full z-0 bg-black" />
        )}
        <Header />
        <div className="relative z-10 flex flex-col justify-between min-h-screen px-12 md:px-36">
          <div className="flex flex-col gap-10 md:gap-0">
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </div>
          <UpButton />
        </div>
      </div>
    </>
  );
}

export default Layout;
