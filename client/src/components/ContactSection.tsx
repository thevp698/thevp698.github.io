import { useState } from "react";
import { motion } from "framer-motion";
import { userData } from "@/data/portfolioData";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Linkedin, Github, Twitter, Dribbble } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // In a real application, this would send the form data to a server
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-0">
      <div className="container mx-auto">
        <motion.h2 
          className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="font-openSans text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label htmlFor="name" className="block font-poppins font-medium text-primary mb-2">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-poppins font-medium text-primary mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-poppins font-medium text-primary mb-2">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-poppins font-medium text-primary mb-2">Message</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-secondary text-white font-poppins font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">Contact Information</h3>
              <p className="font-openSans mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 text-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-primary">Location</h4>
                    <p className="font-openSans text-gray-600">{userData.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-secondary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-primary">Email</h4>
                    <p className="font-openSans text-gray-600">{userData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-secondary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-primary">Phone</h4>
                    <p className="font-openSans text-gray-600">{userData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={userData.social.github} target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-all">
                  <Github size={20} />
                </a>
                <a href={userData.social.twitter} target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-all">
                  <Twitter size={20} />
                </a>
                <a href={userData.social.dribbble} target="_blank" rel="noopener noreferrer" className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-all">
                  <Dribbble size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
