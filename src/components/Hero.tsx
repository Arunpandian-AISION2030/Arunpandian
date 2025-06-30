
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/2fd3d84a-e098-4f16-8d8e-18186e71a5db.png')`,
          }}
        />
        {/* Navy overlay with new color scheme */}
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/60 to-navy/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-light mb-6 animate-fade-in drop-shadow-2xl">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-electric-blue to-coral bg-clip-text text-transparent">
                Arun Pandian
              </span>
            </h1>
            
            {/* Updated Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-light mb-8 animate-fade-in-delay drop-shadow-lg">
              Graphic Designer & Technology Enthusiast
            </p>
            
            {/* Description */}
            <p className="text-lg text-neutral-light/90 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2 drop-shadow-lg">
              Passionate about creating stunning visual designs and innovative digital solutions. 
              I blend creativity with technology to bring ideas to life through compelling graphics and modern web applications.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/90 border-electric-blue text-neutral-light hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://www.linkedin.com/in/arun-pandian-p-2a6b202a9', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-neutral-light hover:bg-neutral-light/90 border-neutral-light text-neutral-dark hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('https://github.com/Arunpandian-AISION2030', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-coral hover:bg-coral/90 border-coral text-neutral-light hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.open('tel:+918248960558', '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                +91 8248960558
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-neutral-light hover:bg-neutral-light/90 border-neutral-light text-neutral-dark hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-electric-blue drop-shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
