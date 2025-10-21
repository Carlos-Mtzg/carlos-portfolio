import { ChevronRightIcon } from "@heroicons/react/24/solid";

const ExperienceCard = ({ title, date, description, icon }) => {
  return (
    <div className="relative flex bg-white/5 hover:bg-white/10 hover:-translate-y-1 duration-300 transition-all border border-secondary-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl group cursor-target">
      <div className="w-2 bg-gradient-to-b from-secondary-600 to-secondary-400" />
      <div className="flex flex-col md:flex-row items-start w-full p-6 gap-4">
        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-secondary-900 border-2 border-secondary-600 transition-transform duration-500">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-secondary-200 mb-1">{title}</h3>
          <span className="text-sm text-secondary-400 mb-10 block uppercase">
            {date}
          </span>
          <div className="space-y-8">
            {Array.isArray(description) ? (
              description.map((section, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="flex items-center font-semibold text-secondary-400 uppercase">
                    <ChevronRightIcon className="h-4 w-4 mr-1 text-secondary-400" />
                    {section.label}:
                  </span>
                  <ul className="list-disc list-inside ml-6 mt-1 text-white/80">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-white/80">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
