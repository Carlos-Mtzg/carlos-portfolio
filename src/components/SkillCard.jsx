import { motion } from "framer-motion";

const SkillCard = ({ name, icon: Icon, custom }) => {
  return (
    <motion.div
      className="cursor-target flex flex-col items-center justify-center border border-transparent transition-all hover:border-secondary-600 hover:scale-[1.1] bg-white/10 rounded-xl shadow-md p-6 cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: custom * 0.05 }}
    >
      <Icon className="text-4xl md:text-5xl text-neutral-800 dark:text-white mb-2 transition-colors duration-200 group-hover:text-secondary-600" />
      <span className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-200 transition-colors duration-200 group-hover:text-secondary-700">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
