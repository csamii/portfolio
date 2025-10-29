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
        className="py-16 md:py-24 bg-[#F7F7F7] transition-colors duration-500">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">
            About Me
            </h2>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center md:space-x-12 relative"
            >
                <div className="md:w-2/5 mt-10 md:mt-0 flex flex-col items-center max-md:mb-8">
                    <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-500/50 dark:ring-blue-400/50 mb-8">
                        <img 
                            src="/path-to-your-photo.jpg" 
                            alt="Your Professional Headshot" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                    <ul className="text-sm font-medium space-y-2 text-center">
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">📍</span> Location: PH, Nigeria
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">💼</span> Specialty: Front-End / UI Design
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">🚀</span> Status: Open to New Roles
                        </li>
                    </ul>
                </div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:w-3/5 text-gray-700 dark:text-gray-300 space-y-6 max-sm:text-sm relative">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 max-sm:text-lg">
                    Building seamless digital experiences from idea to execution.
                    </h3>
                    <p>
                    With **5+ years** in front-end development, I specialize in **React** and **TypeScript**, delivering robust, high-performance applications. I have a proven track record of collaborating with design teams to translate complex user needs into elegant, scalable code.
                    </p>
                    <p>
                    My philosophy is to prioritize **user-centric design** and clean, maintainable architecture. When I'm not coding, I enjoy rock climbing, which has taught me the importance of problem-solving and persistence—skills I bring to every project.
                    </p>
                    <Button
                        className='bg-black text-white'
                        onClick={() => scrollToSection('projects')}>
                        View My Projects
                    </Button>
                </motion.div>
            </motion.div>        
        </motion.div>
    </section>
    // <section
    //   id="about"
    //   ref={ref}
    //   className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]"
    // >
    //   <div className="max-w-6xl mx-auto">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-16"
    //     >
    //       <h2 className="text-3xl font-bold mb-4 max-sm:text-lg">
    //         About <span className="text-primary">Me</span>
    //       </h2>
    //       <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
    //     </motion.div>

    //     <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
    //         <motion.div
    //         initial={{ opacity: 0, x: 50 }}
    //         animate={isInView ? { opacity: 1, x: 0 } : {}}
    //         transition={{ duration: 0.6, delay: 0.4 }}
    //         className="relative"
    //       >
    //         <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
    //           <motion.div
    //             animate={{
    //               scale: [1, 1.05, 1],
    //             }}
    //             transition={{
    //               duration: 4,
    //               repeat: Infinity,
    //               ease: 'easeInOut',
    //             }}
    //             className="text-9xl"
    //           >
    //             💡
    //           </motion.div>
    //         </div>
            
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : {}}
    //           transition={{ duration: 0.6, delay: 0.6 }}
    //           className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg border"
    //         >
    //           <div className="text-center">
    //             <div className="text-primary mb-1">5+</div>
    //             <div className="text-sm text-muted-foreground">Years Experience</div>
    //           </div>
    //         </motion.div>
            
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : {}}
    //           transition={{ duration: 0.6, delay: 0.8 }}
    //           className="absolute -top-6 -left-6 bg-background p-6 rounded-xl shadow-lg border"
    //         >
    //           <div className="text-center">
    //             <div className="text-primary mb-1">50+</div>
    //             <div className="text-sm text-muted-foreground">Projects Completed</div>
    //           </div>
    //         </motion.div>
    //       </motion.div>
          
    //       <motion.div
    //         initial={{ opacity: 0, x: -50 }}
    //         animate={isInView ? { opacity: 1, x: 0 } : {}}
    //         transition={{ duration: 0.6, delay: 0.2 }}
    //       >
    //         <h3 className="mb-4 text-primary">My Journey</h3>
    //         <div className="space-y-4 text-muted-foreground">
    //           <p>
    //             My passion for web development started when I built my first website
    //             at the age of 15. What began as curiosity quickly evolved into a
    //             career dedicated to creating meaningful digital experiences.
    //           </p>
    //           <p>
    //             Over the years, I've had the privilege of working on diverse projects
    //             that have shaped my approach to development—always prioritizing user
    //             experience, clean code, and innovative solutions.
    //           </p>
    //           <p>
    //             Today, I specialize in building modern web applications using React,
    //             TypeScript, and other cutting-edge technologies. I'm constantly
    //             learning and exploring new ways to push the boundaries of what's
    //             possible on the web.
    //           </p>
    //         </div>
    //       </motion.div>
    //     </div>
    //   </div>
    // </section>
  );
}
