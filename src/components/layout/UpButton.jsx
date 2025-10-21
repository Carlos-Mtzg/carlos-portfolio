import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const UpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Ir arriba"
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 40 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-8 right-8 z-50 bg-secondary-600/60 backdrop-blur-md text-white rounded-full shadow-xl p-4 flex items-center justify-center
            border border-white/20
            transition-all duration-300 ease-out cursor-pointer cursor-target group"
          style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
        >
          <ArrowUpIcon className="w-7 h-7 transition-transform duration-300 ease-out group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default UpButton;
