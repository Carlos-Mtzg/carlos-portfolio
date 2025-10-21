import TitleText from "@components/TitleText";
import ExperienceCard from "@components/ExperienceCard";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const experiences = [
  {
    title: "TSU Desarrollo de Software Multiplataforma",
    date: "Septiembre 2022 – Agosto 2024",
    description: [
      {
        label: "Tecnologías principales",
        items: ["Java, Java Servlets, MySQL, MongoDB, Bootstrap, CSS"],
      },
      {
        label: "Frameworks y herramientas",
        items: ["Bootstrap, Spring Boot, MongoDB"],
      },
      {
        label: "Proyectos destacados",
        items: [
          "E-commerce desarrollado en Java Servlets y CSS.",
          "Sistema IoT para recolección de datos de botes de basura, visualización en dashboard web con React y Bootstrap.",
        ],
      },
      {
        label: "Metodologías",
        items: ["SCRUM"],
      },
      {
        label: "Habilidades blandas y gestión",
        items: ["Documentación (DFR, minutas, diagramas de casos de uso)."],
      },
      {
        label: "Logros",
        items: [
          "Integración de tecnologías y buenas prácticas para el desarrollo de proyectos escolares y crecimiento como Ingeniero de Software.",
        ],
      },
    ],
    icon: (
      <AcademicCapIcon className="h-8 w-8 text-white group-hover:scale-125 duration-300" />
    ),
  },
  {
    title: "Ingeniería en Desarrollo y Gestión de Software",
    date: "Septiembre 2024 – Mayo 2026 (En curso)",
    description: [
      {
        label: "Tecnologías principales",
        items: ["Java, MySQL, Python, CSS, Docker, SonarQube, Jenkins, AWS"],
      },
      {
        label: "Frameworks y herramientas",
        items: ["Spring Boot, TailwindCSS, Anaconda"],
      },
      {
        label: "Proyectos destacados",
        items: [
          "Sistema de gestión de solicitudes de documentos universitarios con Spring Boot, React, MySQL, Bootstrap y CSS, incluyendo simulación de pagos y notificaciones por correo.",
          "Sistema de gestión de almacenes con dashboard de stock y movimientos, desarrollado con Spring Boot, TailwindCSS, MySQL y React.",
          "Aplicación web para búsqueda de doctores y citas médicas en línea (Django, MySQL, Bootstrap).",
          "Análisis de datos con Python y Anaconda.",
        ],
      },
      {
        label: "Metodologías",
        items: ["SCRUM"],
      },
      {
        label: "Habilidades blandas y gestión",
        items: ["Documentación (DFR, minutas, diagramas de casos de uso)."],
      },
      {
        label: "Logros",
        items: [
          "Implementación de buenas prácticas, código limpio, seguridad y despliegue en contenedores Docker.",
        ],
      },
    ],
    icon: (
      <CodeBracketIcon className="h-8 w-8 text-white group-hover:scale-125 duration-300" />
    ),
  },
  {
    title: "Desarrollador de Software en A3E Ingenieros",
    date: "Abril 2024 – Actualidad",
    description: [
      {
        label: "Tecnologías principales",
        items: ["PHP, Java, Bootstrap, TailwindCSS, MongoDB, MySQL"],
      },
      {
        label: "Frameworks y herramientas",
        items: ["Symfony, Spring Boot, TailwindCSS, Bootstrap"],
      },
      {
        label: "Proyectos destacados",
        items: [
          "Sistema de gestión de energía en Symfony para certificación ISO 50001, con dashboards gráficos (Apache ECharts) y previsualización de PDFs.",
          "Sistema de gestión de compras con Spring Boot, React y TailwindCSS, automatizando solicitudes y exportaciones en Excel.",
          "Desarrollo de 4 páginas web en React y TailwindCSS (sitio principal y landing pages de servicios/productos).",
        ],
      },
      {
        label: "Metodologías",
        items: ["SCRUM"],
      },
      {
        label: "Habilidades blandas y gestión",
        items: [
          "Trabajo en equipo, organización de tareas por prioridades y tiempos.",
        ],
      },
      {
        label: "Logros",
        items: [
          "Certificación 'Hecho en México' en proyectos, implementación de buenas prácticas y código limpio en proyectos internos y páginas web.",
        ],
      },
    ],
    icon: (
      <BriefcaseIcon className="h-8 w-8 text-white group-hover:scale-125 duration-300" />
    ),
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-[100vh] md:py-36 bg-transparent">
      <TitleText title={"Experiencia"} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            title={exp.title}
            date={exp.date}
            description={exp.description}
            icon={exp.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
