import { useEffect, useState } from "react";
import profile from "@images/profile.webp";
import { CheckBadgeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PillTabs } from "@components/PillTabs";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-20 px-6 md:px-36 animate-slide-in-top">
      <nav
        className={`flex justify-between gap-24 rounded-full text-white p-5 shadow
          bg-secondary-950/70
          ${scrolled ? "backdrop-blur-[2px]" : ""}
        `}
      >
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full w-12 h-12"
            src={profile}
            alt="Carlos-Mtzg on github"
          />
          <span className="font-extrabold text-[1.2rem] flex items-center gap-2">
            Carlos Mtzg
            <CheckBadgeIcon className="size-[1.5rem] text-secondary-600 " />
          </span>
        </div>
        <PillTabs />
        <a
          href="/carlos-portfolio/documents/CarlosMartinezGomez.pdf"
          className="cursor-target flex gap-2 items-center rounded-full px-5 py-2 bg-secondary-600/50 cursor-pointer shadow"
          download={true}
        >
          <span>CV</span>
          <ArrowDownTrayIcon className="size-[1.2rem] text-[#B196FE]" />
        </a>
      </nav>
    </div>
  );
};

export default Header;
