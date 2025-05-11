import { Button } from "@/components/ui/button";
import { userData } from "@/data/portfolioData";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pb-24 px-6 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            {userData.name}
          </h1>
          <h2 className="font-poppins font-medium text-2xl text-secondary mb-6">
            {userData.title}
          </h2>
          <p className="font-openSans text-lg mb-8 leading-relaxed">
            {userData.introduction}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio">
              <Button className="bg-secondary text-white font-poppins font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="bg-transparent border-2 border-primary text-primary font-poppins font-medium px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all">
                Get In Touch
              </Button>
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-full w-60 h-60 overflow-hidden border-4 border-white shadow-lg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="#2D3E50" />
              <circle cx="100" cy="80" r="30" fill="#F5F5F5" />
              <path d="M100 120 Q 130 120 130 140 Q 130 180 100 180 Q 70 180 70 140 Q 70 120 100 120" fill="#F5F5F5" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
