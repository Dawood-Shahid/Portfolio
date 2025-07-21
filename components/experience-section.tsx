'use client';

import { getCurrentYear } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const currentYear = getCurrentYear();

  // Calculate total experience in years
  const startYear = 2021; // Starting year of experience
  const totalExperience = currentYear - startYear;

  const experiences = [
    {
      company: 'IOMechs',
      role: 'Software Engineer',
      period: 'February 2022 - Present (3 years 6 months)',
      location: 'Karāchi, Sindh, Pakistan',
      achievements: [
        'Built and maintained a mental health app with therapist search, booking, chat, video calls, and in-app payments',
        'Improved app performance by 20% by optimizing components',
        'Integrated Agora and Zoom SDKs to enable high-quality video calling',
        'Developed real-time chat using Socket.IO for therapist-user communication',
        'Integrated HyperPay and Tabby with save card support for secure in-app payments',
        'Set up OneSignal push notifications, increasing user re-engagement by 15%',
        'Used AppsFlyer and Firebase Analytics for user behavior tracking and insights',
        'Automated builds and deployments with Fastlane to reduce release time',
      ],
    },
    {
      company: 'IOMechs',
      role: 'Associate Software Engineer',
      period: 'July 2021 - February 2022 (8 months)',
      location: 'Karāchi, Sindh, Pakistan',
      achievements: [
        'Translated Figma designs into responsive, pixel-perfect UI using React Native',
        'Reused and modularized UI components to accelerate development and ensure consistent design patterns',
        'Wrote clean, maintainable code aligned with design specs and user requirements',
        'Participated in code reviews, Agile sprint planning, and daily team standups',
      ],
    },
  ];

  return (
    <section
      id='experience'
      className='py-16 sm:py-20 px-4 sm:px-6 bg-secondary-alpha'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12 sm:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Experience
          </h2>
          <p className='text-lg sm:text-xl text-secondary'>
            {totalExperience}+ years of building scalable applications
          </p>
        </motion.div>

        <div className='space-y-8 sm:space-y-12'>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='bg-card rounded-xl p-4 sm:p-8 border border-secondary hover:border-accent-alpha transition-colors duration-300'
              style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}
            >
              <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6'>
                <div>
                  <h3 className='text-xl sm:text-2xl font-bold text-accent mb-2'>
                    {exp.role}
                  </h3>
                  <h4 className='text-lg sm:text-xl text-secondary mb-2'>
                    {exp.company}
                  </h4>
                  <p className='text-muted'>{exp.location}</p>
                </div>
                <div className='mt-4 md:mt-0'>
                  <span className='bg-primary-alpha text-accent px-4 py-2 rounded-full text-xs sm:text-sm'>
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className='space-y-2 sm:space-y-3'>
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className='flex items-start'>
                    <span className='text-accent mr-3 mt-1'>•</span>
                    <span className='text-secondary leading-relaxed'>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
