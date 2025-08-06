import { motion } from 'framer-motion';
import BackgroundWithBlur from './background-with-blur';

// Technology logos component with continuous scroll
const TechnologyLogos = () => {
  const technologies = [
    'logo-js.png',
    'logo-ts.png',
    'logo-react.png',
    'logo-redux.png',
    'logo-next.png',
    'logo-tailwind.png',
    'logo-firebase.png',
    'logo-git.png',
    'logo-github.png',
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-background via-muted/20 to-background">
      <div className="flex animate-scroll md:max-w-[612px] max-sm:max-w-[272px]">
        {/* First set of logos */}
        <div className="flex items-center space-x-5 pr-5">
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center min-w-[48px]"
            >
              <img
                src={`/${tech}`}
                alt={tech}
                className='rounded-[10px] w-12 h-12'
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-5 pr-5">
          {technologies.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center min-w-[48px]"
            >
              <img
                src={`/${tech}`}
                alt={tech}
                className='rounded-[10px] w-12 h-12'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id='about'>
    <BackgroundWithBlur
      imagePath="/background.jpg"
      // imagePath="/background.webp"
      blurIntensity="md"
      overlayColor="bg-black"
      overlayOpacity={80}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24"
    >
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-6 max-sm:mb-3'
        >
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold md:mb-6 max-sm:mb-3 gradient-text'>
            Dawood Shahid
          </h1>
          <p className='text-xl md:text-2xl text-secondary mb-6 max-sm:mb-3 italic'>
            Frontend Engineer
          </p>
        </motion.div>

        <div className='min-h-[100px] flex items-center justify-center'>
          <div
            className='text-center'
          >
            <p className='md:text-xl max-sm:text-xs'>
              Helping You Build Scalable Web & Mobile Apps.
            </p>
            <p className='md:text-xl max-sm:text-xs'>
              Let's turn your <span className='font-bold gradient-text'>IDEA</span> into a fast, scalable, and user-friendly solution.
            </p>
          </div>
        </div>

        {/* Technology Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='mt-6 max-sm:mt-3'
        >
          <TechnologyLogos />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='mt-12 max-sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='btn-primary px-8 py-3 rounded-xl transition-colors duration-200 text-base sm:text-lg w-full sm:w-auto'
          >
            Explore My Work
          </button>
        </motion.div>
      </div>
    </BackgroundWithBlur>
    </section>
  );
}
