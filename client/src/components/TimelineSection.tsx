import { motion } from "framer-motion";
import { userData } from "@/data/portfolioData";

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 px-6 md:px-0">
      <div className="container mx-auto">
        <motion.h2 
          className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>
        
        <div className="timeline-container relative">
          {userData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 bg-white rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 bg-accent text-white text-sm rounded mb-4">
                  {exp.period}
                </span>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-2">
                  {exp.role}
                </h3>
                <h4 className="font-openSans text-gray-600 mb-4">
                  {exp.company}
                </h4>
                <p className="font-openSans">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
