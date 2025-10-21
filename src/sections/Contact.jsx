import TitleText from "@components/TitleText";
import TextType from "@components/TextType";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "carlos.mtzg2004@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/carlos-mtzg";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="min-h-[100vh] flex flex-col justify-center items-center md:py-36"
      ref={ref}
    >
      <TitleText title={"Contacto"} className={"text-4xl md:text-6xl"} />
      <div className="mt-12 max-w-xl text-center flex flex-col items-center gap-8">
        {inView && (
          <TextType
            text={"¿Tienes una idea de proyecto y quieres desarrollarla?"}
            typingSpeed={50}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="_"
            initialDelay={0}
            className={"text-3xl md:text-4xl font-bold text-white mb-2"}
          />
        )}
        <p className="text-lg text-white/80 mb-6">
          ¡Me encantaría ayudarte a convertir tu idea en realidad! <br />
          Ponte en contacto conmigo y trabajemos juntos en tu próximo proyecto.
        </p>
        <div className="flex gap-6 mt-4">
          <motion.a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target flex items-center gap-2 px-6 py-3 rounded-full bg-secondary-600/80 hover:bg-secondary-600 transition-all shadow-lg text-white font-semibold text-lg"
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FaLinkedin className="w-6 h-6" />
            LinkedIn
          </motion.a>
          <motion.a
            href={`mailto:${CONTACT_EMAIL}?subject=Hola%20Carlos&body=Me%20gustaría%20contactarte%20sobre%20un%20proyecto.`}
            className="cursor-target flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all shadow-lg text-white font-semibold text-lg duration-300"
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <EnvelopeIcon className="w-6 h-6" />
            Email
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
