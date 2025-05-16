import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import VRModel from './VRModel';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      gsap.fromTo(
        text.querySelectorAll('.animate-char'),
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 1,
          ease: 'power4.out',
          delay: 0.5,
        }
      );
    }

    return () => {
      gsap.killTweensOf('.animate-char');
    };
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="animate-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center text-center md:text-left"
        >
          <p className="text-accent-blue font-orbitron tracking-widest mb-4 text-sm sm:text-base">
            THE FUTURE OF VIRTUAL REALITY
          </p>
          <h1 ref={textRef} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            {splitText('Immerse In A New Dimension')}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Experience the next generation of virtual reality with unparalleled
            immersion and groundbreaking technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-300"
            >
              Explore Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-accent-purple/30 text-white font-medium hover:bg-accent-purple/10 transition-all duration-300 group flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-full h-[350px] md:h-[500px] relative animate-float">
            <VRModel />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-accent-blue' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;