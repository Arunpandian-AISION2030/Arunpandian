
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Professional Summary
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Hello, I'm Arun Pandian P
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a passionate <strong>Graphic Designer & Technology Enthusiast</strong> with a deep love for 
                creating visually stunning designs and innovative digital solutions. Currently pursuing 
                B.Tech in Artificial Intelligence & Data Science at EASA College of Engineering and Technology, Coimbatore.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I recently completed my internship in Graphic Design at Lovely Offset Printers, 
                where I worked on real-time projects and gained valuable industry experience. 
                My expertise spans both creative design and modern web technologies, allowing me to bridge 
                the gap between aesthetics and functionality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not designing or coding, you'll find me exploring new design trends, 
                working on personal projects, or learning about the latest innovations in artificial intelligence 
                and web development. I believe in the power of combining creativity with technology to create 
                meaningful experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-amber-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">What Drives Me</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">Creating impactful visual designs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Building innovative web applications</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Continuous learning & growth</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-700 rounded-full mr-4"></div>
                  <span className="text-gray-700">Collaborating with amazing teams</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-gray-600 italic">
                  "Design is not just what it looks like and feels like. Design is how it works. 
                  I strive to create designs that are both beautiful and functional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
