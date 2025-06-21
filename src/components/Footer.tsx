
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">ArunX Studio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional Creative Design & Development Solutions for Modern Digital Experiences and Visual Communication
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Poster Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  About Me
                </a>
              </li>
              <li>
                <a href="#works" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  My Works
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <a 
                  href="mailto:arunpandi47777@gmail.com"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  arunpandi47777@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © 2025 Copyright by{" "}
              <a 
                href="https://arunx.studio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
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
