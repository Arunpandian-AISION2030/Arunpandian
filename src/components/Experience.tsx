
const Experience = () => {
  const experiences = [
    {
      title: "Graphic Design Intern",
      company: "Lovely Offset Printers Private Limited",
      period: "Jan 2025 - Feb 2025",
      description: "Worked with a crew of students on 3 real-time projects, connecting with customers during the internship period. Gained hands-on experience in graphic design software and web design.",
      technologies: ["Graphic Design Software", "Web Design", "Customer Relations", "Real-time Projects"]
    },
    {
      title: "B.Tech Student",
      company: "EASA College of Engineering & Technology",
      period: "Present",
      description: "Pursuing Bachelor's degree in Artificial Intelligence & Data Science, focusing on cutting-edge AI technologies and software development practices.",
      technologies: ["Artificial Intelligence", "Data Science", "Machine Learning", "Python"]
    },
    {
      title: "Personal Projects & Learning",
      company: "Self-Directed",
      period: "Ongoing",
      description: "Continuously building personal projects and exploring new technologies to expand knowledge and skills in software development and AI.",
      technologies: ["React", "TypeScript", "Node.js", "AI/ML"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Education & Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl flex-1 hover:shadow-lg transition-all duration-300 border border-amber-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-amber-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium border border-amber-200"
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
