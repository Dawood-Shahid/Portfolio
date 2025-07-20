'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Estenarh',
      subTitle: ' Online Therapy App',
      description:
        'A licensed mental health app approved by the Ministry of Health, offering private and affordable therapy with certified psychologists. Includes secure chat, voice/video calls, instant booking, and flexible payments.',
      image: '/estenarh.png',
      technologies: [
        'React Native',
        'RTK',
        'HyperPay',
        'Tabby',
        'AppsFlyer',
        'Fastlane',
      ],
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.estenarh.app',
      appStoreLink:
        'https://apps.apple.com/us/app/estenarh-online-therapy-app/id1529172019',
    },
    {
      title: 'Estenarh',
      subTitle: 'For Healthcare Practitioners',
      description:
        'A Ministry of Health-approved platform for therapists in Saudi Arabia to offer secure online therapy. Manage schedules, accept session requests, and connect with patients via chat, voice, or video with 24/7 technical support.',
      image: '/estenarh-consultant.png',
      technologies: [
        'React Native',
        'React Native Reanimated 2',
        'Socket.IO',
        'Zoom',
        'OneSignal',
      ],
      playStoreLink:
        'https://play.google.com/store/apps/details?id=com.consultant.estenarh.app',
      appStoreLink:
        'https://apps.apple.com/us/app/estenarh-consultant-app/id1663499493',
    },
    {
      title: 'Pure CSS Loaders Extended',
      subTitle: 'Open Source Contribution',
      description:
        'Pure CSS Loaders Extended is a collection of customizable loading animations built entirely with CSS. It offers a variety of lightweight, responsive loaders that can be easily integrated into any web project. No JavaScript required.',
      image: 'pure-css-loaders.png',
      technologies: ['React', 'TypeScript', 'Bootstrap'],
      githubLink: 'https://github.com/iomechs/pure-css-loaders-extended',
      demoLink: 'https://pure-css-loaders-extended.netlify.app/#/',
    },
    {
      title: 'Career Connect',
      subTitle: 'Counselling & Education App',
      description:
        'Providing career guidance and educational support for individuals of all age groups.',
      image: '/career-connect.png',
      technologies: [
        'React Native',
        'Native Base',
        'Reanimated',
        'Redux',
        'Redux Most',
      ],
      playStoreLink:
        'https://play.google.com/store/apps/details?id=club.careerconnect.app&hl=en&gl=US',
      // appStoreLink: '#',
    },
    {
      title: 'App Tracker',
      subTitle: 'Final Year Project',
      description:
        'App Tracker is a web application built to monitor and manage project progress, similar to tools like Jira. It enables users to create, assign, and track tasks, ensuring streamlined collaboration and efficient project management.',
      image: '/fyp.png',
      technologies: [
        'React',
        'Material UI',
        'Firebase',
        'Realtime Database',
        'Authentication',
      ],
      githubLink: 'https://github.com/AhmedAli125/app-tracker',
      demoLink: 'https://project-tracker-f4033.web.app/',
    },
    {
      title: 'Contact Manager',
      subTitle: 'Personal Project',
      description:
        'A full-stack contact management application with secure user authentication and personalized contact storage. Features real-time CRUD operations with Firebase integration.',
      image: '/contact-manager.png',
      technologies: [
        'React',
        'axios',
        'Firebase',
        'Realtime Database',
        'Authentication',
      ],
      githubLink: 'https://github.com/Dawood-Shahid/Contact-Manager',
      demoLink: 'https://dawood-shahid.github.io/Contact-Manager/login',
    },
  ];

  return (
    <section id='projects' className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Projects
          </h2>
          <p className='text-xl text-secondary'>
            Building solutions that matter
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='rounded-xl overflow-hidden border border-secondary hover:border-accent-alpha transition-all duration-300'
              style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-48 object-fill transition-transform duration-300'
                />
                <div className='absolute inset-0 gradient-overlay' />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-accent'>
                  {project.title}
                </h3>
                <h5 className=' font-bold text-accent mb-3'>
                  {project.subTitle}
                </h5>
                <p className='text-secondary mb-4 leading-relaxed line-clamp-4'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-primary-alpha text-accent px-3 py-1 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4'>
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-accent hover:opacity-80 transition-opacity duration-200'
                    >
                      <ExternalLink size={16} />
                      Play Store
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-accent hover:opacity-80 transition-opacity duration-200'
                    >
                      <ExternalLink size={16} />
                      App Store
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-accent hover:opacity-80 transition-opacity duration-200'
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-accent hover:opacity-80 transition-opacity duration-200'
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
