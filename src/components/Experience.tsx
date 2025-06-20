
const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Current Role",
      period: "Present",
      description: "Developing innovative software solutions and working with modern technologies to create scalable applications.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      title: "Technology Enthusiast",
      company: "Personal Projects",
      period: "Ongoing",
      description: "Continuously learning new technologies and building personal projects to expand knowledge and skills.",
      technologies: ["Various Technologies", "Open Source", "Learning"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-gray-50 p-6 rounded-2xl flex-1 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
