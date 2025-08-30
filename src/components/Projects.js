import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Cloud-Powered Portfolio',
    image: '/images/awsservices.png',
    description: 'Personal portfolio site hosted with AWS infrastructure (this very webpage)',
    tech: ['React', 'Node.js', 'AWS', 'AWS S3', 'DevOps', 'AWS CloudFront', 'AWS API Gateway', 'AWS Lambda', 'Serverless Architecture'],
    link: 'https://github.com/yusuf-quddus/yusuf-portfolio',
    liveUrl: 'https://d3lnymsmiws1n8.cloudfront.net/',
  },
  {
    title: 'RDesk Services',
    image: '/images/rdesklogo.png',
    description: 'Website for RDesk Services, an IT services company',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'AWS RDS'],
    link: 'https://github.com/yusuf-quddus/RDESK',
    liveUrl: 'https://rdeskservices.com/',
  },
  {
    title: 'RPGShowcase',
    image: '/images/rpgimage.webp',
    description: 'Web app for posting TTRPG characters with auth and S3 storage',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Express', 'JWT Authentication', 'Material-UI'],
    link: 'https://github.com/yusuf-quddus/RPG-Showcase',
    liveUrl: 'https://rpg-showcase.onrender.com/',
  },
  {
    title: 'Gitlet',
    image: '/images/git-logo.png',
    description: 'Clone of git version control system',
    tech: ['Java', 'Data Structures', 'File Management', 'Hashing'],
    link: 'https://github.com/yusuf-quddus/Gitlet',
  },
];

const ProjectCard = ({ proj, index }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img 
            src={proj.image} 
            alt={proj.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
            {proj.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {proj.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {(showAllTech ? proj.tech : proj.tech.slice(0, 4)).map((tech, techIndex) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm font-medium rounded-full border transition-colors ${
                  techIndex % 3 === 0
                    ? 'text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100'
                    : techIndex % 3 === 1
                    ? 'text-purple-700 bg-purple-50 border-purple-200 hover:bg-purple-100'
                    : 'text-gray-700 bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {tech}
              </span>
            ))}
            {proj.tech.length > 4 && !showAllTech && (
              <button
                onClick={() => setShowAllTech(true)}
                className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
              >
                +{proj.tech.length - 4} more
              </button>
            )}
            {showAllTech && proj.tech.length > 4 && (
              <button
                onClick={() => setShowAllTech(false)}
                className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
              >
                Show less
              </button>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
              >
                Live Demo →
              </a>
            )}
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((proj, index) => (
          <ProjectCard key={proj.title} proj={proj} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
