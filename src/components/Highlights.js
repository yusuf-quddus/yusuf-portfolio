import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const highlights = [
  'Migrated 1.28TB of infrastructure from Synology + VM Manager to Azure Blob Storage',
  'Managed on-premise testing lab for Android/ChromeOS at Google',
  'Built RESTful web apps using React, Node, Express, and MongoDB',
  'Integrated PostgreSQL with AWS RDS and cloud-deployed apps on Render.io',
  'Taught and mentored middle schoolers in Python, Scratch, and MakeCode'
];

const Highlights = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 tracking-tight">
        Career Highlights
      </h2>
      
      <div className="space-y-4 text-left">
        {highlights.map((item, index) => (
          <div 
            key={item}
            className="flex items-start gap-3 hover:text-gray-900 transition-colors duration-200"
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircleIcon className="text-green-600 text-lg" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
