import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/TextArea';
import { Card } from './ui/Card';
// import { toast } from 'sonner@2.0.3';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'chidisamuel16@gmail.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Port Harcourt, Nigeria',
    href: '#',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-[#242424]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto dark:text-gray-400">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 dark:text-gray-200">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 dark:text-gray-400">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="block"
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-background dark:bg-[#1E1E1E]">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground dark:text-gray-400">
                          {info.title}
                        </div>
                        <div className="font-medium dark:text-gray-100">{info.value}</div>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Decorative element */}
            
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-background dark:bg-[#1E1E1E]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* <div>
                  <label htmlFor="name" className="block text-sm mb-2 dark:text-gray-300">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div> */}

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-gray-300">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 dark:text-gray-300">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 dark:text-gray-300">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={3}
                    className="w-full resize-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-black text-white dark:bg-blue-500 dark:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-5 h-5 border-2 border-background border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
