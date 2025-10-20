import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Motion/Framer', level: 75 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'REST APIs', level: 90 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'Docker', level: 65 },
      { name: 'Jest/Testing', level: 75 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

const otherSkills = [
  'Responsive Design',
  'UI/UX Design',
  'Accessibility',
  'Performance Optimization',
  'SEO',
  'Agile/Scrum',
  'CI/CD',
  'RESTful APIs',
  'GraphQL',
  'Webpack',
  'Vite',
  'Storybook',
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
            I use to bring ideas to life
          </p>
        </motion.div>

        {/* Main Skills with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Card className="p-6 h-full bg-background">
                <h3 className="mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills as Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center mb-6">Additional Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.7 + index * 0.05,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Badge className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative gradient orbs */}
        <div className="relative mt-16 h-40 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="relative z-10 h-full flex items-center justify-center">
            <p className="text-center text-muted-foreground max-w-2xl px-4">
              "The best way to predict the future is to create it."
              <br />
              <span className="text-sm mt-2 inline-block">
                — Always learning, always growing
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
