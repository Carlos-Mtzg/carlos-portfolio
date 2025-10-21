import { useState, useEffect } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = [
  { label: "Inicio", href: "#hero", id: "hero" },
  { label: "Proyectos", href: "#projects", id: "projects" },
  { label: "Experiencia", href: "#experience", id: "experience" },
  { label: "Habilidades", href: "#skills", id: "skills" },
  { label: "Contacto", href: "#contact", id: "contact" },
];

export function PillTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = pillTabs.map((tab) => tab.id);
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.3 && rect.bottom > 0) {
            setActiveIndex(i);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveIndex(0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabsComponents = pillTabs.map((text, i) => (
    <a
      key={text.label}
      href={text.href}
      className="cursor-target relative px-5 py-2 border-none rounded-full cursor-pointer flex items-center"
    >
      {activeIndex === i && (
        <MagicTabSelect
          id="pillTabs"
          transition={{ type: "spring", bounce: 0.35 }}
        >
          <span className="rounded-full absolute top-0 left-0 right-0 bottom-0 z-25 bg-secondary-600/50" />
        </MagicTabSelect>
      )}
      <p className="text-white text-[1.2rem]">{text.label}</p>
    </a>
  ));

  return (
    <div className="hidden md:flex flex-2 items-center justify-evenly">
      {tabsComponents}
    </div>
  );
}
