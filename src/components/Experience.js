const experiences = [
  {
    title: 'Data Center Technician',
    company: 'Google (via Tezerakt)',
    type: 'Contract',
    period: '2025 - Present',
    location: 'Mountain View, CA',
    highlights: [
      'Managed Google\'s on-site device lab supporting testing infrastructure for Android, ChromeOS, Android Auto, and wearable platforms',
      'Deployed and configured Linux-based test hosts using shell scripts and YAML automation to initialize networked devices at scale',
      'Diagnosed and resolved device connectivity, flashing, and power issues using ROM recovery and system-level debugging tools',
      'Collaborated cross-functionally with engineers to troubleshoot test failures and optimize test throughput'
    ]
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'RDesk Services',
    type: 'Contract',
    period: '2024 - 2025',
    location: 'Remote',
    highlights: [
      'Built and deployed a responsive full-stack website using React and Node.js to showcase RDesk\'s IT services startup',
      'Integrated PostgreSQL via AWS RDS for secure user data storage and deployed on Render.io',
      'Executed a cloud migration of ~2TB of business data to Azure Blob Storage using AzCopy and shell scripting',
      'Collaborated with founders to design intuitive, brand-aligned UI components and translate business goals into functional web features'
    ]
  },
  {
    title: 'Coding Instructor',
    company: 'Brains and Motion',
    type: 'Contract',
    period: '2024',
    location: 'Bay Area, CA',
    highlights: [
      'Developed and delivered project-based coding curriculum for groups of 5–10 middle school students',
      'Taught foundational programming concepts using MakeCode, Scratch, and Python',
      'Focused on interactive lessons emphasizing logic, problem-solving, and creativity'
    ]
  }
];

const Experience = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
        Work Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={`${exp.company}-${exp.title}`}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600">
                    {exp.type} • {exp.location}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li 
                    key={highlightIndex}
                    className="flex items-start text-gray-700 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;