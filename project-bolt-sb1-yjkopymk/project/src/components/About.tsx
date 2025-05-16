import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent-purple)_0%,_transparent_70%)] opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <span className="text-accent-blue font-semibold text-sm tracking-wider">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Pioneering The Future <br />Of <span className="gradient-text">Virtual Reality</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Founded in 2025, NEXUS VR is at the forefront of virtual reality innovation. 
              Our team of engineers, designers, and visionaries are dedicated to creating 
              immersive experiences that blur the line between digital and physical realities.
            </p>
            <p className="text-gray-300 mb-8">
              With breakthrough advancements in neural interfaces and quantum computing, 
              we're redefining what's possible in virtual environments and creating 
              a new dimension of human experience.
            </p>
            
            <ul className="space-y-3 mb-8">
              {["Award-winning design team", "Patented neural interface technology", "Industry-leading haptic systems", "Quantum-powered rendering engine"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="text-accent-purple h-5 w-5" />
                  <span className="text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-300"
            >
              Our Story
            </motion.button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl shadow-accent-purple/20 border border-accent-purple/20">
              <img 
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="VR Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold mb-2">Experience The Future</h3>
                <p className="text-gray-300 text-sm">Watch how our technology is transforming industries worldwide</p>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent-purple flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;