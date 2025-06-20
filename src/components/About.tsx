
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Hello, I'm Arun Pandian P
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate software developer with a deep love for technology and innovation. 
                My journey in the tech world has been driven by curiosity and a relentless pursuit 
                of excellence in creating solutions that matter.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With expertise spanning modern web technologies, I specialize in building scalable 
                applications that deliver exceptional user experiences. I believe in writing clean, 
                maintainable code and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring fellow developers. I'm always excited about 
                the next challenge and opportunity to grow.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">What Drives Me</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Building innovative solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Continuous learning & growth</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Creating impactful user experiences</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Collaborating with amazing teams</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-600 italic">
                  "Code is poetry written in logic, and I strive to make every line count."
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
