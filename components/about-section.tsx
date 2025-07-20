'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Helping You Build Scalable Web & Mobile Apps.',
    "Let's turn your IDEA into a fast, scalable, and user-friendly solution.",
    'Tech Stack: JavaScript, TypeScript, React.js, Next.js, React Native.',
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 30 : 50;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center px-6 pt-20'
    >
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6 gradient-text'>
            Dawood Shahid
          </h1>
          <p className='text-xl md:text-2xl text-secondary mb-8 italic'>
            Software Engineer @ IOMechs
          </p>
        </motion.div>

        <div className='min-h-[100px] flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-lg md:text-xl text-secondary text-center'
          >
            <span>
              {displayedText}
              <span className='animate-pulse text-accent'>|</span>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className='mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='btn-primary px-8 py-3 rounded-xl transition-colors duration-200 text-lg'
          >
            Explore My Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
