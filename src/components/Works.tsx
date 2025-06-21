import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Works = () => {
  const projects = [
    {
      title: "Dashboard Application",
      category: "Web Development",
      description: "A comprehensive dashboard application built with modern web technologies, featuring data visualization, user management, and real-time analytics.",
      image: "/lovable-uploads/cc3ba234-f191-4cff-bbad-4eb999d9af4f.png",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://profile-replica-polished-project.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Mediq System Website",
      category: "Web Development",
      description: "A professional healthcare management system website with patient management, appointment scheduling, and medical records functionality.",
      image: "/lovable-uploads/f9766984-e4d5-4a71-bfd7-d8c72f41c4c6.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Blog Platform",
      category: "Web Development",
      description: "A dynamic blog platform where I share insights about technology, design trends, and personal experiences in the tech industry.",
      image: "/lovable-uploads/cc3ba234-f191-4cff-bbad-4eb999d9af4f.png",
      technologies: ["React", "Markdown", "CMS", "SEO Optimization"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Poster Design Collection",
      category: "Graphic Design",
      description: "A curated collection of poster designs created for various clients and personal projects, showcasing creativity in visual communication.",
      image: "/lovable-uploads/f9766984-e4d5-4a71-bfd7-d8c72f41c4c6.png",
      technologies: ["Adobe Photoshop", "Illustrator", "InDesign", "Figma"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              My Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my creative projects spanning web development, graphic design, 
              and digital solutions that bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/90 hover:bg-white"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/90 hover:bg-white"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
              onClick={() => window.open('https://github.com/Arunpandian-AISION2030', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
