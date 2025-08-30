const About = () => (
  <section 
    id="about" 
    className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8 mt-16"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 tracking-tight">
        About Me
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light hover:text-gray-900 transition-colors duration-300">
          I'm a <span className="font-semibold text-gray-900">Full Stack Software Engineer</span> with experience building scalable applications using React, Node.js, PostgreSQL, and AWS with an AWS Cloud Practitioner certificate.
        </p>
        
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light hover:text-gray-900 transition-colors duration-300">
          I've worked at <span className="font-semibold text-gray-900">Google</span> (via Tezerakt) managing a high-concurrency testing lab. I have developed secure, responsive web tools at <span className="font-semibold text-gray-900">RDesk</span> and managed DevOps projects for RDesk clients.
        </p>
        
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light hover:text-gray-900 transition-colors duration-300">
          I hold a <span className="font-semibold text-gray-900">B.A. in Computer Science from UC Berkeley</span> and enjoy tackling infrastructure, API, and debugging challenges.
        </p>
      </div>
    </div>
  </section>
);

export default About;
