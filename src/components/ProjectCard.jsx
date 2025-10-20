import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import Button from './ui/Button';

export function ProjectCard({ title, description, image, tags, demoLink, githubLink, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group h-full flex flex-col bg-background">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            {demoLink && (
              <Button
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubLink && (
              <Button
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
