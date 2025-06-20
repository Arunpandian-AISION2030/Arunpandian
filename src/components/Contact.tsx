
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            or just having a conversation about technology.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
              <Mail className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">Available on LinkedIn</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
              <Linkedin className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Professional Network</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300 text-sm">Open to Remote</p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
              <Phone className="h-8 w-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-gray-300 text-sm">Open for Opportunities</p>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            onClick={() => window.open('https://www.linkedin.com/in/arun-pandian-p-2a6b202a9', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
