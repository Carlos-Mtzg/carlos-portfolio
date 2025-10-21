import TitleText from "@components/TitleText";
import Carousel from "@components/Carousel";

import { motion } from "framer-motion";
import { FaJava, FaSymfony, FaBootstrap, FaPhp } from "react-icons/fa";
import { SiSpringboot, SiReact, SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";

// A3E Page
import a3e_1 from "@images/projects/a3e-page/1.webp";
import a3e_2 from "@images/projects/a3e-page/2.webp";
import a3e_3 from "@images/projects/a3e-page/3.webp";
import a3e_4 from "@images/projects/a3e-page/4.webp";
import a3e_5 from "@images/projects/a3e-page/5.webp";
import a3e_6 from "@images/projects/a3e-page/6.webp";
import a3e_7 from "@images/projects/a3e-page/7.webp";
import a3e_8 from "@images/projects/a3e-page/8.webp";

// GECOM
import gecom_1 from "@images/projects/gecom/1.webp";
import gecom_2 from "@images/projects/gecom/2.webp";
import gecom_3 from "@images/projects/gecom/3.webp";
import gecom_4 from "@images/projects/gecom/4.webp";
import gecom_5 from "@images/projects/gecom/5.webp";
import gecom_6 from "@images/projects/gecom/6.webp";
import gecom_7 from "@images/projects/gecom/7.webp";

// GEVENSI
import gevensi_1 from "@images/projects/gevensi/1.webp";
import gevensi_2 from "@images/projects/gevensi/2.webp";
import gevensi_3 from "@images/projects/gevensi/3.webp";
import gevensi_4 from "@images/projects/gevensi/4.webp";
import gevensi_5 from "@images/projects/gevensi/5.webp";

// Monitor Landing
import monitor_landing_1 from "@images/projects/monitor-landing/1.webp";
import monitor_landing_2 from "@images/projects/monitor-landing/2.webp";
import monitor_landing_3 from "@images/projects/monitor-landing/3.webp";
import monitor_landing_4 from "@images/projects/monitor-landing/4.webp";

// Sismedia Landing
import sismedia_landing_1 from "@images/projects/sismedia-landing/1.webp";
import sismedia_landing_2 from "@images/projects/sismedia-landing/2.webp";
import sismedia_landing_3 from "@images/projects/sismedia-landing/3.webp";
import sismedia_landing_4 from "@images/projects/sismedia-landing/4.webp";
import sismedia_landing_5 from "@images/projects/sismedia-landing/5.webp";
import sismedia_landing_6 from "@images/projects/sismedia-landing/6.webp";
import sismedia_landing_7 from "@images/projects/sismedia-landing/7.webp";
import sismedia_landing_8 from "@images/projects/sismedia-landing/8.webp";

// Gevensi Landing
import gevensi_landing_1 from "@images/projects/gevensi-landing/1.webp";
import gevensi_landing_2 from "@images/projects/gevensi-landing/2.webp";
import gevensi_landing_3 from "@images/projects/gevensi-landing/3.webp";
import gevensi_landing_4 from "@images/projects/gevensi-landing/4.webp";
import gevensi_landing_5 from "@images/projects/gevensi-landing/5.webp";

const projects = [
  {
    title: "GECOM | Sistema de Gestión de Compras",
    description:
      "GECOM es un sistema integral de gestión de compras desarrollado para A3E Ingenieros. Permite administrar proyectos, requisiciones, usuarios y roles, facilitando el flujo de trabajo entre usuarios y administradores. Incluye autenticación JWT, notificaciones por correo, panel de administración, generación de reportes en Excel y una interfaz web moderna construida con React y Vite, respaldada por un backend robusto en Spring Boot y MySQL.",
    tech: [FaJava, SiSpringboot, SiReact, SiTailwindcss, DiMysql],
    images: [
      { image: gecom_1, alt: "GECOM página 1" },
      { image: gecom_2, alt: "GECOM página 2" },
      { image: gecom_3, alt: "GECOM página 3" },
      { image: gecom_4, alt: "GECOM página 4" },
      { image: gecom_5, alt: "GECOM página 5" },
      { image: gecom_6, alt: "GECOM página 6" },
      { image: gecom_7, alt: "GECOM página 7" },
    ],
  },
  {
    title: "GEVENSI | Sistema de Gestión de Energía",
    description:
      "Sistema web desarrollado para A3E Ingenieros que permite la gestión y análisis energético de instalaciones. Construido con Symfony (PHP) en el backend y Bootstrap en el frontend, integra módulos para auditorías, indicadores energéticos, gestión de usuarios y generación de reportes en PDF y Excel.",
    tech: [FaPhp, FaSymfony, FaBootstrap, DiMysql],
    images: [
      { image: gevensi_1, alt: "GEVENSI página 1" },
      { image: gevensi_2, alt: "GEVENSI página 2" },
      { image: gevensi_3, alt: "GEVENSI página 3" },
      { image: gevensi_4, alt: "GEVENSI página 4" },
      { image: gevensi_5, alt: "GEVENSI página 5" },
    ],
  },
  {
    title: "Sitio Web | A3E Ingenieros",
    description:
      "Aplicación web desarrollada en React y Vite para A3E Ingenieros, enfocada en presentar sus servicios, productos y valores empresariales de manera profesional. Utiliza React Router para la navegación, Tailwind CSS para el diseño responsive y moderno, y Framer Motion para animaciones. El sitio cuenta con secciones dinámicas como galería de noticias, formularios de contacto y reclutamiento, e integración con APIs para la gestión de datos.",
    tech: [SiReact, SiTailwindcss],
    images: [
      { image: a3e_1, alt: "A3E Ingenieros página 1" },
      { image: a3e_2, alt: "A3E Ingenieros página 2" },
      { image: a3e_3, alt: "A3E Ingenieros página 3" },
      { image: a3e_4, alt: "A3E Ingenieros página 4" },
      { image: a3e_5, alt: "A3E Ingenieros página 5" },
      { image: a3e_6, alt: "A3E Ingenieros página 6" },
      { image: a3e_7, alt: "A3E Ingenieros página 7" },
      { image: a3e_8, alt: "A3E Ingenieros página 8" },
    ],
    url: "https://www.a3e.com.mx/",
  },
  {
    title: "Landing | Monitor I3",
    description:
      "Aplicación web desarrollada para A3E Ingenieros. Landing page moderna y responsiva creada con React y Vite, utilizando TailwindCSS para estilos y Swiper para carruseles interactivos. Incluye validación de formularios, integración de analíticas y componentes reutilizables para una experiencia de usuario optimizada.",
    tech: [SiReact, SiTailwindcss],
    images: [
      { image: monitor_landing_1, alt: "Monitor I3 Landing página 1" },
      { image: monitor_landing_2, alt: "Monitor I3 Landing página 2" },
      { image: monitor_landing_3, alt: "Monitor I3 Landing página 3" },
      { image: monitor_landing_4, alt: "Monitor I3 Landing página 4" },
    ],
    url: "https://a3e-monitori3.com.mx/",
  },
  {
    title: "Landing | Sismedia RT",
    description:
      "La landing page de SISMEDIA RT fue desarrollada para A3E Ingenieros utilizando React, Vite, TailwindCSS y Swiper.js. Presenta información sobre soluciones de submedición eléctrica, con diseño responsivo, animaciones modernas y componentes reutilizables para una experiencia ágil y profesional.",
    tech: [SiReact, SiTailwindcss],
    images: [
      { image: sismedia_landing_1, alt: "Sismedia RT Landing página 1" },
      { image: sismedia_landing_2, alt: "Sismedia RT Landing página 2" },
      { image: sismedia_landing_3, alt: "Sismedia RT Landing página 3" },
      { image: sismedia_landing_4, alt: "Sismedia RT Landing página 4" },
      { image: sismedia_landing_5, alt: "Sismedia RT Landing página 5" },
      { image: sismedia_landing_6, alt: "Sismedia RT Landing página 6" },
      { image: sismedia_landing_7, alt: "Sismedia RT Landing página 7" },
      { image: sismedia_landing_8, alt: "Sismedia RT Landing página 8" },
    ],
    url: "https://a3e-sismedia.com.mx/",
  },
  {
    title: "Landing | Gevensi",
    description:
      "La landing page de Gevensi es una aplicación web desarrollada para A3E Ingenieros, enfocada en la gestión y evaluación energética. Utiliza React para la interfaz, Tailwind CSS para los estilos, y Heroicons para los íconos. Incluye integración con formularios y servicios API, garantizando una experiencia moderna, rápida y responsiva.",
    tech: [SiReact, SiTailwindcss],
    images: [
      { image: gevensi_landing_1, alt: "Gevensi Landing página 1" },
      { image: gevensi_landing_2, alt: "Gevensi Landing página 2" },
      { image: gevensi_landing_3, alt: "Gevensi Landing página 3" },
      { image: gevensi_landing_4, alt: "Gevensi Landing página 4" },
      { image: gevensi_landing_5, alt: "Gevensi Landing página 5" },
    ],
    url: "https://a3e-gevensi.com.mx/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="md:pt-36">
      <TitleText title={"Proyectos"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
            className="bg-white/10 border border-secondary-600 cursor-target rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] hover:border-secondary-400 transition-all duration-300"
          >
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
              items={
                project.images
                  ? project.images
                  : [{ image: project.image, alt: project.title }]
              }
            />
            <div className="p-5 flex-1 flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white/80 text-base mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 mt-auto">
                {project.tech.map((Icon, i) => (
                  <div
                    key={i}
                    className="group relative flex items-center justify-center"
                  >
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black/80 text-white text-xs rounded px-2 py-1 pointer-events-none z-10 whitespace-nowrap">
                      {Icon.displayName || Icon.name}
                    </span>
                    <span className="bg-white/60 rounded-full shadow-md p-2 flex items-center justify-center">
                      <Icon className="text-3xl text-secondary-600" />
                    </span>
                  </div>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-target mt-6 self-start px-5 py-2 rounded-full bg-secondary-600/70 text-white font-semibold shadow transition-all duration-200 hover:bg-secondary-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  aria-label={`Ver página de ${project.title}`}
                >
                  Ver página
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
