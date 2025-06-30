
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "bg-electric-blue"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Java", "RESTful APIs"],
      color: "bg-coral"
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Docker", "AWS", "Firebase"],
      color: "bg-navy"
    },
    {
      title: "Other Skills",
      skills: ["Problem Solving", "Team Collaboration", "Agile/Scrum", "Code Review"],
      color: "bg-neutral-dark"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-neutral-dark mb-16">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-neutral-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-electric-blue/20"
              >
                <div className={`w-12 h-12 rounded-lg ${category.color} mb-4 flex items-center justify-center`}>
                  <span className="text-neutral-light font-bold text-lg">{category.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-neutral-dark flex items-center">
                      <span className="w-1.5 h-1.5 bg-coral rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
