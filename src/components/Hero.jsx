import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowDown, Mail, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  const scrollToSection = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="hero"
      className="dark:bg-gray-800 dark:text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="text-5xl">👨‍💻</span>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-primary">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={itemVariants} className="mb-4">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Your Name
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2 variants={itemVariants} className="text-muted-foreground mb-6">
          Full Stack Developer & Creative Problem Solver
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I craft elegant digital experiences that blend aesthetics with functionality.
          Passionate about turning complex problems into simple, beautiful solutions
          that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white"
          >
            View My Work
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
          <Button
            className='bg-slate-500 text-white'
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </Button>
          <Button 
          className='flex bg-slate-500 text-white'
          >
            <a href="#" download className='flex'>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: 'https://github.com', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="icon">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          variants={itemVariants}
          onClick={() => scrollToSection('about')}
          className="mt-16 inline-block hover:opacity-70 transition-opacity"
          aria-label="Scroll to about section"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
}
