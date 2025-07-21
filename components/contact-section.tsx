'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, FileText } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <Mail className='w-6 h-6' />,
      label: 'Email',
      value: 'dawoodshahid67@gmail.com',
      href: 'mailto:dawoodshahid67@gmail.com',
    },
    {
      icon: <Phone className='w-6 h-6' />,
      label: 'Phone',
      value: '+92 3352 411546',
      href: 'tel:03352411546',
    },
    {
      icon: <Linkedin className='w-6 h-6' />,
      label: 'LinkedIn',
      value: 'dev-dawood-shahid',
      href: 'https://www.linkedin.com/in/dev-dawood-shahid',
    },
  ];

  const openResume = () => {
    window.open('/Dawood-Shahid-Resume-II.pdf', '_blank');
  };

  return (
    <section id='contact' className='py-20 px-6 bg-secondary-alpha'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 gradient-text'>
            Let's Connect
          </h2>
          <p className='text-xl text-secondary'>
            Ready to bring your ideas to life
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.label === 'LinkedIn' ? '_blank' : undefined}
              rel={
                contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined
              }
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='rounded-xl p-6 border border-secondary hover:border-accent-alpha transition-all duration-300 hover:transform hover:scale-105 text-center group'
              style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)' }}
            >
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary-alpha rounded-full text-accent group-hover:opacity-80 transition-opacity duration-300'>
                  {contact.icon}
                </div>
              </div>
              <h3 className='text-lg font-semibold text-secondary mb-2'>
                {contact.label}
              </h3>
              <p className='text-accent group-hover:opacity-80 transition-opacity duration-300'>
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center'
        >
          <button
            onClick={openResume}
            className='inline-flex items-center gap-3 btn-primary px-8 py-4 rounded-xl transition-all duration-300 text-lg font-semibold hover:transform hover:scale-105'
          >
            <FileText className='w-5 h-5' />
            View Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center mt-16 pt-8 border-t border-secondary'
        >
          <p className='text-muted'>
            © 2024 Dawood Shahid. Built with React, Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
