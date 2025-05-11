import { userData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Check, Code, Award, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-16 md:py-24 bg-white px-6 md:px-0">
      <div className="container mx-auto">
        <motion.h2 
          className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Skills Section */}
          <motion.div 
            className="bg-background p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="mb-4 text-center text-accent">
              <Code className="w-10 h-10 mx-auto" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-primary mb-4 text-center">Skills</h3>
            <ul className="space-y-2 font-openSans">
              {userData.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-secondary mr-2 h-5 w-5" /> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Education Section */}
          <motion.div 
            className="bg-background p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="mb-4 text-center text-accent">
              <GraduationCap className="w-10 h-10 mx-auto" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-primary mb-4 text-center">Education</h3>
            <ul className="space-y-4 font-openSans">
              {userData.education.map((edu, index) => (
                <li key={index}>
                  <h4 className="font-medium text-primary">{edu.degree}</h4>
                  <p className="text-sm text-gray-600">{edu.institution}, {edu.years}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Achievements Section */}
          <motion.div 
            className="bg-background p-6 rounded-lg shadow-md"
            variants={itemVariants}
          >
            <div className="mb-4 text-center text-accent">
              <Award className="w-10 h-10 mx-auto" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-primary mb-4 text-center">Achievements</h3>
            <ul className="space-y-2 font-openSans">
              {userData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">
                  <svg className="text-secondary mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V6zm-4 4a1 1 0 10-2 0v2a1 1 0 102 0v-2z" clipRule="evenodd" />
                  </svg>
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
