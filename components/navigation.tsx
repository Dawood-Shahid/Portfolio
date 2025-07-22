'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = ['about', 'experience', 'projects', 'contact'] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (
    sectionId: (typeof sections)[number] // TypeScript type for the sections
  ) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/Dawood-Shahid-Resume.pdf', '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderBottomColor: 'var(--color-border-secondary)',
      }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-4'>
        <div className='flex justify-between items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='flex items-center'
          >
            <img
              src='/profile.png'
              alt='Dawood Shahid profile picture'
              className='w-10 h-10 rounded-full '
            />
          </motion.div>

          {/* Desktop nav */}
          <div className='hidden md:flex items-center space-x-8'>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 hover:text-accent ${
                  activeSection === section ? 'text-accent' : 'text-secondary'
                }`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={openResume}
              className='btn-primary px-4 py-2 rounded-xl transition-colors duration-200'
            >
              View Resume
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className='md:hidden p-2 rounded focus:outline-none text-secondary'
            onClick={() => setMenuOpen((v) => !v)}
            aria-label='Toggle menu'
          >
            {menuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className='md:hidden mt-4 flex flex-col space-y-4 bg-primary rounded-xl p-4 shadow-lg'>
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-left transition-colors duration-200 hover:text-accent ${
                  activeSection === section ? 'text-accent' : 'text-secondary'
                }`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={openResume}
              className='btn-primary px-4 py-2 rounded-xl transition-colors duration-200 w-full'
            >
              View Resume
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
