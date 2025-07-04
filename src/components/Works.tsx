
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const Works = () => {
  const projects = [
    {
      title: "Dashboard Application",
      category: "Web Development",
      description: "A comprehensive dashboard application built with modern web technologies, featuring data visualization, user management, and real-time analytics.",
      image: "/lovable-uploads/0598bbcf-4be9-44ff-853d-7fb2348e82d3.png",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://dashboard-arunpandi47777-gmailcoms-projects.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Mediq System Website",
      category: "Web Development",
      description: "A professional healthcare management system website with patient management, appointment scheduling, and medical records functionality.",
      image: "/lovable-uploads/725b95a3-b5e7-43ea-bd5d-86368c867862.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://mediq-app-3.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "GrowUp Journal",
      category: "Web Development",
      description: "A personal growth and mindfulness platform featuring daily inspirational quotes, mood tracking, and journaling capabilities for personal development.",
      image: "/lovable-uploads/ed3291db-1f2d-4300-8408-d9e21b6c4ed6.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      liveUrl: "https://growup-journel.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Poster Design Collection",
      category: "Graphic Design",
      description: "A curated collection of poster designs created for various clients and personal projects, showcasing creativity in visual communication.",
      image: "/lovable-uploads/1f521ce4-c8bd-4627-85aa-7dfc104a8840.png",
      technologies: ["Adobe Photoshop", "Illustrator", "InDesign", "Figma"],
      liveUrl: "https://poster-collection.vercel.app/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="works" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-neutral-light to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              My Works
            </h2>
            <p className="text-lg sm:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
              A showcase of my creative projects spanning web development, graphic design, 
              and digital solutions that bring ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-electric-blue/30">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-electric-blue hover:bg-electric-blue/90 text-neutral-light text-xs sm:text-sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Live
                      </Button>
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-coral hover:bg-coral/90 text-neutral-light text-xs sm:text-sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 sm:px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-xs sm:text-sm font-medium border border-electric-blue/30">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-3 group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-neutral-dark/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-neutral-light text-neutral-dark rounded text-xs sm:text-sm border border-neutral-dark/20"
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
              variant="outline"
              className="border-coral text-coral hover:bg-coral hover:text-neutral-light px-6 sm:px-8 py-3 text-sm sm:text-base"
              onClick={() => window.open('https://github.com/Arunpandian-AISION2030', '_blank')}
            >
              <FolderOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
