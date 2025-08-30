const techStack = [
  'React', 'Node.js', 'PostgreSQL', 'AWS', 'Python', 'JavaScript', 'MongoDB', 'C',
  'C++', 'Golang', 'Networking', 'Shell Scripting', 'CI/CD', 'Express', 'Linux', 'DevOps', 'REST API',
  'Database Management', 'Teaching'
];

const Skills = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 tracking-tight">
        Technical Skills
      </h2>
      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {techStack.map((skill, index) => (
          <span
            key={skill}
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full border transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md ${
              index % 3 === 0
                ? 'text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-300'
                : index % 3 === 1
                ? 'text-purple-700 bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-300'
                : 'text-gray-700 bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
