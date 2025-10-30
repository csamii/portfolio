import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './ui/Button';

export function About() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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
        id="about" 
        ref={ref}
        className="py-16 md:py-24 bg-[#F7F7F7] dark:bg-[#1E1E1E] transition-colors duration-500">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">
                About Me
            </h2>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center md:space-x-12 relative"
            >
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:w-3/5 text-gray-700 dark:text-gray-300 space-y-6 max-sm:text-sm relative">
                    
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 max-sm:text-sm">
                        Building seamless digital experiences from idea to execution.
                    </h3>
                    <p>
                        I'm Chidi Onwumere, a front-end developer passionate about building user-focused, 
                        scalable web experiences that inspire learning and creativity. 
                        I enjoy transforming ideas into visually engaging and functional products that 
                        solve real problems using clean design thinking and modern web technologies.
                    </p>
                    <p>
                        Beyond the code, I'm driven by a desire to create solutions that make technology 
                        more inclusive especially for learners in underrepresented communities. 
                        My goal is to use design and code as tools to open new doors of opportunity
                    </p>
                    <p>
                        I'm currently exploring Next.js, TypeScript, and Native React to push the 
                        limits of user interactivity and performance
                    </p>
                    
                    <Button
                        className='bg-black text-white dark:bg-blue-600 dark:text-white'
                        onClick={() => scrollToSection('projects')}>
                        View My Projects
                    </Button>
                </motion.div>
                
                <div className="md:w-2/5 mt-10 md:mt-0 flex flex-col items-center max-md:mb-8">
                    <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500/50 dark:ring-blue-400/50 mb-8">
                        <img 
                            src="/path-to-your-photo.jpg" 
                            alt="Your Professional Headshot" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <ul className="text-sm font-medium space-y-2 text-center text-gray-700 dark:text-gray-300">
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className="text-blue-500 mr-2">📍</span> Location: Port Harcourt, Nigeria
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className="text-blue-500 mr-2">💼</span> Specialty: Front-End / UI Design
                        </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className="text-blue-500 mr-2">🚀</span> Status: Open to New Roles
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    </section>
  );
}
