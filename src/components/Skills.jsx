import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProgressBar = ({ name, proficiency }) => {
  const accentColor = "bg-gradient-to-r from-blue-500 to-cyan-500 dark:bg-blue-400";

  return (
    <motion.div 
      className="mb-5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{proficiency}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${accentColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: proficiency }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const skillsList = [
  { name: "React / Zustand", proficiency: "80%" },
  { name: "Responsive Design & Accessibility", proficiency: "95%" },
  { name: "UI Animations (Framer Motion)", proficiency: "82%" },
  { name: "UI/UX Design", proficiency: "80%" },
  { name: "Visual Storytelling & Layout", proficiency: "90%" },
];

const toolsList = [
  "JavaScript (ES6+)", 
  "HTML5 / CSS3", 
  "Tailwind CSS", 
  "Git / GitHub", 
  "Figma (Wireframing & Prototyping)",
  "Jest (Unit Testing)",
  "Vercel"
];

const learningList = [
  { name: "Next.js (App Router & Server Components)" },
  { name: "TypeScript for scalable React apps" },
  { name: "Performance optimization & accessibility audits" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-16 md:py-24 bg-[#F2F4F7] dark:bg-[#242424] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-8">
                My Technical Competencies
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto dark:text-gray-100">
                A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life.
            </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-8 border-b-2 border-blue-500/50 pb-2">
              Core Competencies
            </h3>
            
            {skillsList.map((skill) => (
              <ProgressBar 
                key={skill.name}
                name={skill.name} 
                proficiency={skill.proficiency} 
              />
            ))}
          </motion.div>

          {/* RIGHT COLUMN */}
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-8 border-b-2 border-blue-500/50 pb-2">
              Development Toolkit
            </h3>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
              {toolsList.map((tool, i) => (
                <motion.div 
                  key={tool}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full shadow-md text-sm sm:text-base font-medium 
                             dark:bg-gray-700 dark:text-gray-100 hover:shadow-lg transition duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="mr-2 text-blue-500 dark:text-blue-300">🛠️</span>
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- CURRENTLY LEARNING --- */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Currently Learning
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {learningList.map((item, i) => (
              <motion.div
                key={item.name}
                className="px-5 py-3 bg-blue-100 text-blue-700 rounded-full font-medium shadow-sm dark:bg-blue-900 dark:text-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                🚀 {item.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
