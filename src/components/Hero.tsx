
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Arun Pandian
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-delay">
                Software Developer & Technology Enthusiast
              </p>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl animate-fade-in-delay-2">
                Passionate about creating innovative solutions and building scalable applications 
                that make a difference in people's lives. Let's build something amazing together.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-fade-in-delay-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/arun-pandian-p-2a6b202a9', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => window.open('https://github.com/Arunpandian-AISION2030', '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  onClick={() => window.open('tel:+918248960558', '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +91 8248960558
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-200 bg-white shadow-2xl animate-fade-in">
                  <img 
                    src="/lovable-uploads/cc3ba234-f191-4cff-bbad-4eb999d9af4f.png"
                    alt="Arun Pandian - Software Developer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
