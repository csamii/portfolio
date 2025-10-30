import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Button from './ui/Button';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

const footerLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollToSection = (href) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
        className="bg-muted/30 dark:bg-[#1E1E1E] border-t dark:border-gray-700 transition-colors duration-500"
    >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-primary dark:text-blue-400 mb-4">{'<'}Portfolio{' />'}</div>
                        
                        <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">
                            Building digital experiences that make a difference. One line of code
                            at a time.
                        </p>
                        
                        <div className="flex items-center space-x-2">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.div
                                    key={label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        className="h-9 w-9 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                                    >
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                        >
                                            <Icon className="w-4 h-4 text-gray-800 dark:text-gray-100" />
                                        </a>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Header: Light in dark mode */}
                        <h4 className="mb-4 dark:text-gray-200">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        // Link Text: Muted dark style, Primary hover
                                        className="text-sm text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="mb-4 dark:text-gray-200">Get in Touch</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground dark:text-gray-400">
                            <li>
                                <a
                                    href="mailto:your.email@example.com"
                                    className="hover:text-primary dark:hover:text-blue-400 transition-colors"
                                >
                                    your.email@example.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+15551234567"
                                    className="hover:text-primary dark:hover:text-blue-400 transition-colors"
                                >
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li>San Francisco, CA</li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-8 border-t dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4"
            >
                <p className="text-sm text-muted-foreground dark:text-gray-400 text-center sm:text-left">
                    © {new Date().getFullYear()} Chidi Onwumere. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground dark:text-gray-400 flex items-center gap-1">
                    Made with <span className="text-red-500">❤️</span> and
                    lots of ☕
                </p>
            </motion.div>
        </div>
    </footer>
  );
}
