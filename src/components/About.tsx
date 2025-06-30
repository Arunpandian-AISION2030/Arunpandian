
const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-neutral-dark mb-16">
            Professional Summary
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-dark mb-6">
                Hello, I'm Arun Pandian P
              </h3>
              <p className="text-neutral-dark mb-6 leading-relaxed">
                I'm a passionate <strong className="text-electric-blue">Graphic Designer & Technology Enthusiast</strong> with a deep love for 
                creating visually stunning designs and innovative digital solutions. Currently pursuing 
                B.Tech in Artificial Intelligence & Data Science at EASA College of Engineering and Technology, Coimbatore.
              </p>
              <p className="text-neutral-dark mb-6 leading-relaxed">
                I recently completed my internship in Graphic Design at Lovely Offset Printers, 
                where I worked on real-time projects and gained valuable industry experience. 
                My expertise spans both creative design and modern web technologies, allowing me to bridge 
                the gap between aesthetics and functionality.
              </p>
              <p className="text-neutral-dark leading-relaxed">
                When I'm not designing or coding, you'll find me exploring new design trends, 
                working on personal projects, or learning about the latest innovations in artificial intelligence 
                and web development. I believe in the power of combining <span className="text-coral font-semibold">creativity with technology</span> to create 
                meaningful experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-electric-blue">
              <h4 className="text-xl font-semibold text-neutral-dark mb-6">What Drives Me</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-4"></div>
                  <span className="text-neutral-dark">Creating impactful visual designs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-coral rounded-full mr-4"></div>
                  <span className="text-neutral-dark">Building innovative web applications</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-electric-blue rounded-full mr-4"></div>
                  <span className="text-neutral-dark">Continuous learning & growth</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-coral rounded-full mr-4"></div>
                  <span className="text-neutral-dark">Collaborating with amazing teams</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-neutral-light rounded-lg border border-electric-blue">
                <p className="text-sm text-neutral-dark italic">
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
