import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import Button from './ui/Button';
import recipeBoxImage from '../assets/recipe-box.png';
import quizQuest from '../assets/quizquest.png';

const allProjects = [
  {
    title: 'Recipe Sharing Platform',
    description:
      'RecipeBox is a modern recipe web app built with React, Tailwind, Framer Motion, etc. and deployed on vercel, designed to make discovering and saving recipes simple and fun. Users can explore curated dishes, view detailed ingredients, and enjoy smooth UI animations that bring each recipe to life.',
    image: recipeBoxImage,
    tags: ['React', 'Tailwind', 'motion-framer', 'Vercel'],
    demoLink: 'https://recipebox-delta.vercel.app/',
    githubLink: 'https://github.com/csamii/alx-fe-reactjs/tree/main/recipe-sharing-platform',
  },
  {
    title: 'Quiz App',
    description:
      'QuizQuest is a dynamic quiz app built with React, Zustand, Framer Motion, etc. It features smooth animations, real-time scoring, and a leaderboard for engaging, responsive gameplay across all devices.',
    image: quizQuest,
    tags: ['React', 'Zustand', 'Vercel', 'Motion-Framer', 'Luicide-React', 'opentdb API'],
    demoLink: 'https://alx-fe-reactjs-ubr8.vercel.app/',
    githubLink: 'https://github.com/csamii/alx-fe-reactjs/tree/main/quiz_app_0.1',
  },
//   {
//     title: 'AI Writing Assistant',
//     description:
//       'An intelligent writing tool that helps users create better content with AI-powered suggestions, grammar checking, and style improvements.',
//     image: 'https://images.unsplash.com/photo-1720962158858-fbe25b601c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MDU3NjY3NHww&ixlib=rb-4.1.0&q=80&w=1080',
//     tags: ['React', 'OpenAI', 'Express', 'Tailwind', 'Framer Motion'],
//     demoLink: 'https://example.com',
//     githubLink: 'https://github.com',
//   },
//   {
//     title: 'Social Media Dashboard',
//     description:
//       'Analytics dashboard for managing multiple social media accounts with insights, scheduling, and engagement tracking.',
//     image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NjA2MDc3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
//     tags: ['React', 'Chart.js', 'REST API', 'TypeScript', 'shadcn/ui'],
//     demoLink: 'https://example.com',
//     githubLink: 'https://github.com',
//   },
//   {
//     title: 'Weather Forecast App',
//     description:
//       'Beautiful weather application with hourly forecasts, location-based weather alerts, and detailed climate information.',
//     image: 'https://images.unsplash.com/photo-1558181445-eca4774b2a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDU4MzUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
//     tags: ['React', 'Weather API', 'Geolocation', 'Recharts'],
//     demoLink: 'https://example.com',
//   },
//   {
//     title: 'Portfolio Generator',
//     description:
//       'A SaaS platform that helps developers create stunning portfolio websites with customizable templates and easy deployment.',
//     image: 'https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMGFic3RyYWN0fGVufDF8fHx8MTc2MDYzMjEzNXww&ixlib=rb-4.1.0&q=80&w=1080',
//     tags: ['Next.js', 'React', 'Vercel', 'CMS', 'Tailwind'],
//     demoLink: 'https://example.com',
//     githubLink: 'https://github.com',
//   },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section
        id="projects"
        ref={ref}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-[#1E1E1E] transition-colors duration-500" 
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">
            Featured Projects
          </h2>
          
          <p className="mt-4 text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {allProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              className="group bg-black text-white dark:bg-white dark:text-black"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <motion.span
                className="ml-2 inline-block"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
