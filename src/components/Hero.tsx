
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Arun Pandian P
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
            Software Developer & Technology Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about creating innovative solutions and building scalable applications 
            that make a difference in people's lives.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
            <Button 
              variant="outline" 
              size="lg" 
              className="hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/arun-pandian-p-2a6b202a9', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-green-600 hover:text-white transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
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
