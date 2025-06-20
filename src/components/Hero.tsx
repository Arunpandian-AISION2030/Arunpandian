
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Arun Pandian
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
                Software Developer & Technology Enthusiast
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl animate-fade-in-delay-2">
                Passionate about creating innovative solutions and building scalable applications 
                that make a difference in people's lives. Let's build something amazing together.
              </p>
              
              <div className="flex justify-center lg:justify-start space-x-6 mb-12 animate-fade-in-delay-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/arun-pandian-p-2a6b202a9', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black transition-all duration-300"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img 
                      src="/lovable-uploads/f9766984-e4d5-4a71-bfd7-d8c72f41c4c6.png"
                      alt="Arun Pandian - Software Developer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
