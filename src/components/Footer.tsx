
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-electric-blue rounded-lg flex items-center justify-center">
                <span className="text-neutral-light font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">ArunX Studio</span>
            </div>
            <p className="text-neutral-light/80 text-sm leading-relaxed">
              Professional Creative Design & Development Solutions for Modern Digital Experiences and Visual Communication
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-light">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  Poster Design
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-light">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="#works" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  My Works
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-light/80 hover:text-coral transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-light">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Linkedin className="h-4 w-4 text-electric-blue flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/arun-pandian-p-2a6b202a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light/80 hover:text-coral transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-electric-blue flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/arunx.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light/80 hover:text-coral transition-colors text-sm"
                >
                  @arunx.studio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-electric-blue/30 pt-8">
          <div className="text-center text-neutral-light/80">
            <p className="text-sm">
              © 2025 Copyright by{" "}
              <a 
                href="https://arunx.studio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-electric-blue hover:text-coral font-medium transition-colors"
              >
                arunx.studio.com
              </a>
              {" "}| Revolutionizing Creative Design & Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
