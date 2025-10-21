import SplitText from "@components/SplitText";

const TitleText = ({ title, className }) => {
  return (
    <SplitText
      text={title}
      className={`text-3xl text-secondary-600 uppercase font-bold ${className}`}
      delay={100}
      duration={0.3}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
    />
  );
};

export default TitleText;
