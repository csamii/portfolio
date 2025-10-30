import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowDown, Mail, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id) => {
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
      className="
        text-white
        relative min-h-screen flex items-center justify-center 
        px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden bg-cover bg-center
        bg-[url('assets/hero.png')]
        dark:bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('assets/971.jpg')]"
    >
    <div className="absolute inset-0 bg-black/30 dark:bg-transparent"></div>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      {/* Blob */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ x: [0, 500, -500, 300, -200, 0], y: [0, -300, 200, -400, 100, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ x: [0, -600, 400, -300, 500, 0], y: [0, 400, -300, 200, -200, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ x: [0, 300, -500, 200, -400, 0], y: [0, -400, 300, -100, 200, 0], }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Square */}
      <motion.div
        className="absolute w-16 h-16 bg-yellow-300 opacity-20 rounded-md shadow-lg"
        style={{ top: "30%", left: "10%" }}
        animate={{
          y: [0, -30, 0, 30, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating Triangle */}
      <motion.svg
        className="absolute w-20 h-20 text-green-400 opacity-20"
        viewBox="0 0 100 100"
        style={{ bottom: "20%", left: "60%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </motion.svg>

      {/* Bouncing Cone (stylized with gradients) */}
      <motion.div
        className="absolute w-0 h-0 opacity-10"
        style={{
          top: "15%",
          right: "15%",
          borderLeft: "25px solid transparent",
          borderRight: "25px solid transparent",
          borderBottom: "50px solid #4F46E5",
          filter: "drop-shadow(0 0 8px rgba(79,70,229,0.3))",
        }}
        animate={{
          y: [0, -40, 0, 40, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Circle */}
      <motion.div
        className="absolute w-12 h-12 bg-red-400 rounded-full opacity-30 shadow-md"
        style={{ bottom: "10%", left: "15%" }}
        animate={{ y: [0, -50, 0, 20, 0], x: [0, 50, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

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
        className="dark:text-white text-black max-w-4xl mx-auto text-center relative z-10"
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
          <span className="text-3xl md:text-3xl font-bold mb-4">Hello, I'm Chidi,</span>
        </motion.div>

        {/* Title */}
        <motion.h2 variants={itemVariants} className="text-muted-foreground mb-6">
            A Frontend Developer & Designer who blends creativity and code to build clean, 
            modern, and meaningful web experiences.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          I love crafting elegant solutions that turn complex ideas into simple, 
          beautiful, and functional designs.
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
            <a 
                // href="/resume.pdf"
                // download="Chidi_Onwumere_Resume.pdf"
                className='flex'>
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
            { Icon: Github, href: 'https://github.com/csamii', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/chidi-onwumere-46a087105', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:chidisamuel16@gmail.com', label: 'Email' },
          ].map(({ Icon, label, href }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-full h-full"
                >
                    <Button
                        className='bg-black dark:bg-white'
                    >
                            <Icon className="w-5 h-5 text-white dark:text-black" />

                    </Button>
                </a>
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
          <ArrowDown className="w-6 h-6 text-black dark:text-white" />
        </motion.button>
      </motion.div>
    </section>
  );
}
