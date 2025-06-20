
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Let's Do This
                </h2>
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/2fd3d84a-e098-4f16-8d8e-18186e71a5db.png"
                    alt="Arun Pandian"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Hey there! Ready to embark on an exciting journey together?
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm thrilled to connect and explore the possibilities of collaborating with you. 
                  Whether it's a brilliant business idea, a job opportunity, a community project, 
                  or just a friendly chat about design and technology - I'm all ears!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-lg transition-all">
                  <Mail className="h-6 w-6 text-amber-600 mb-2" />
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-xs text-gray-600">Available on LinkedIn</p>
                </Card>
                
                <Card className="p-4 bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-lg transition-all">
                  <Phone className="h-6 w-6 text-amber-600 mb-2" />
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-xs text-gray-600">+91 8248960558</p>
                </Card>
                
                <Card className="p-4 bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-lg transition-all">
                  <Linkedin className="h-6 w-6 text-amber-600 mb-2" />
                  <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                  <p className="text-xs text-gray-600">Professional Network</p>
                </Card>
                
                <Card className="p-4 bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-lg transition-all">
                  <MapPin className="h-6 w-6 text-amber-600 mb-2" />
                  <p className="text-sm font-medium text-gray-900">Location</p>
                  <p className="text-xs text-gray-600">Coimbatore, India</p>
                </Card>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-medium mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border-gray-300 focus:border-amber-500 focus:ring-amber-500 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
