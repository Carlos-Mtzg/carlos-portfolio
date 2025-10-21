import {
  FaHtml5,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitlab,
  FaGit,
  FaGithub,
  FaPhp,
  FaSymfony,
  FaDocker,
  FaFigma,
  FaNpm,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiSonarqube,
  SiVite,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

import TitleText from "@components/TitleText";
import SkillCard from "@components/SkillCard";

const Skills = () => {
  const SKILLS = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJs },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Spring", icon: SiSpringboot },
    { name: "React", icon: FaReact },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "GitLab", icon: FaGitlab },
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: FaGithub },
    { name: "Symfony", icon: FaSymfony },
    { name: "PHP", icon: FaPhp },
    { name: "MySQL", icon: SiMysql },
    { name: "SonarQube", icon: SiSonarqube },
    { name: "Figma", icon: FaFigma },
    { name: "Vite", icon: SiVite },
    { name: "Postman", icon: SiPostman },
    { name: "JWT", icon: SiJsonwebtokens },
    { name: "Docker", icon: FaDocker },
  ];

  return (
    <section id="skills" className="md:py-36">
      <TitleText title={"Habilidades"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full mt-10">
        {SKILLS.map(({ name, icon: Icon }, idx) => (
          <SkillCard key={idx} name={name} icon={Icon} custom={idx} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
