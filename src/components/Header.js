import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => (
  <motion.div 
    initial={{ opacity: 0, y: -40 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <img 
          alt="Yusuf Quddus" 
          src="/images/profile-image.jpeg" 
          className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
        Yusuf Quddus
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
        Full Stack Software Engineer | Cloud & Systems Enthusiast
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/yusuf-quddus" 
            target="_blank" 
            rel="noopener" 
            aria-label="GitHub"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <GitHubIcon className="text-2xl" />
          </a>
          
          <a 
            href="https://linkedin.com/in/yusuf-quddus" 
            target="_blank" 
            rel="noopener" 
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <LinkedInIcon className="text-2xl" />
          </a>
        </div>
        
        <a 
          href="/Quddus_Yusuf_Res.pdf" 
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <DownloadIcon className="text-lg" />
          Download CV
        </a>
      </div>
    </div>

    <button
      onClick={scrollToAbout}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 transition-all duration-300 animate-bounce hover:scale-110 border border-gray-200"
      aria-label="Scroll to About section"
    >
      <KeyboardArrowDownIcon className="text-3xl" />
    </button>
  </motion.div>
);

export default Header;