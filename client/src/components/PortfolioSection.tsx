import { motion } from "framer-motion";
import { userData } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white px-6 md:px-0">
      <div className="container mx-auto">
        <motion.h2 
          className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h2>
        <motion.p 
          className="font-openSans text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore my recent projects that showcase my skills and experience in software development.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {userData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card bg-background rounded-lg overflow-hidden shadow-md"
              variants={itemVariants}
            >
              <div className="w-full h-48 bg-primary bg-opacity-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-16 h-16 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <path d={project.iconPath} fill="currentColor" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-2">{project.title}</h3>
                <p className="font-openSans mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary bg-opacity-10 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-poppins font-medium hover:text-secondary transition-all flex items-center"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
