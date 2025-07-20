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
      title: 'Estenarh - Online Therapy App',
      description:
        'A comprehensive mental health platform with therapist search, session booking, secure chat and video calls, and in-app payments. Built with React Native, featuring real-time communication and payment integration.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: [
        'React Native',
        'Socket.IO',
        'Agora SDK',
        'HyperPay',
        'Firebase',
      ],
      playStoreLink: '#',
      appStoreLink: '#',
    },
    {
      title: 'Estenarh - Consultant',
      description:
        'Extended version of the Estenarh therapy platform with additional consultant features. Enhanced therapist management system with advanced booking capabilities and specialized consultation tools.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: [
        'React Native',
        'Socket.IO',
        'Agora SDK',
        'HyperPay',
        'Firebase',
        'Redux',
      ],
      playStoreLink: '#',
      appStoreLink: '#',
    },
    {
      title: 'Pure CSS Loaders',
      description:
        'An open-source extension of loading.io with dynamic sizes and colors for different loaders. Provides developers with customizable loading animations for web applications.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['CSS3', 'JavaScript', 'HTML5'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Career Connect - Counselling & Education App',
      description:
        'An educational counselling platform connecting students with career advisors. Features include appointment scheduling, resource sharing, and progress tracking.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React Native', 'Firebase', 'Redux', 'REST APIs'],
      playStoreLink: '#',
      appStoreLink: '#',
    },
    {
      title: 'Contact Manager',
      description:
        'A full-stack contact management application with secure user authentication and personalized contact storage. Features real-time CRUD operations with Firebase integration.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: [
        'React',
        'Firebase',
        'Authentication',
        'Realtime Database',
      ],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Todo App',
      description:
        'A modern task management application built with React hooks. Features state management, lifecycle handling, and CRUD functionalities with clean, maintainable code architecture.',
      image: '/placeholder.svg?height=300&width=500',
      technologies: ['React', 'Hooks', 'Local Storage', 'CSS3'],
      githubLink: '#',
      demoLink: '#',
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

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='rounded-lg overflow-hidden border border-secondary hover:border-accent-alpha transition-all duration-300 hover:transform hover:scale-105'
              style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-48 object-cover transition-transform duration-300 hover:scale-110'
                />
                <div className='absolute inset-0 gradient-overlay' />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-accent mb-3'>
                  {project.title}
                </h3>
                <p className='text-secondary mb-4 leading-relaxed'>
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
