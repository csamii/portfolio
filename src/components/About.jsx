import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Heart, Lightbulb } from 'lucide-react';
import { Card } from './ui/Card';

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and elegant solutions',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technologies',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Designing experiences that users love and remember',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Turning complex challenges into simple solutions',
  },
];

export function About() {
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My passion for web development started when I built my first website
                at the age of 15. What began as curiosity quickly evolved into a
                career dedicated to creating meaningful digital experiences.
              </p>
              <p>
                Over the years, I've had the privilege of working on diverse projects
                that have shaped my approach to development—always prioritizing user
                experience, clean code, and innovative solutions.
              </p>
              <p>
                Today, I specialize in building modern web applications using React,
                TypeScript, and other cutting-edge technologies. I'm constantly
                learning and exploring new ways to push the boundaries of what's
                possible on the web.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-9xl"
              >
                💡
              </motion.div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-lg border"
            >
              <div className="text-center">
                <div className="text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -left-6 bg-background p-6 rounded-xl shadow-lg border"
            >
              <div className="text-center">
                <div className="text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div key={value.title} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-background">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <value.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
