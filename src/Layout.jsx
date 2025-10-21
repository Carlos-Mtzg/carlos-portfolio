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

function Layout() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-black">
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
