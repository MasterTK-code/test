import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Glasses, Cpu, Gamepad2, Headset as HeadsetVr, Brain, Smartphone } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const featuresList = [
  {
    icon: <Glasses className="w-10 h-10 text-accent-blue" />,
    title: "Ultra HD Visuals",
    description: "Experience crystal clear 8K resolution that brings virtual worlds to life with unprecedented detail."
  },
  {
    icon: <Cpu className="w-10 h-10 text-accent-purple" />,
    title: "Quantum Processor",
    description: "Powered by our next-gen quantum processor delivering seamless performance with zero latency."
  },
  {
    icon: <Gamepad2 className="w-10 h-10 text-accent-blue" />,
    title: "Haptic Controllers",
    description: "Feel every interaction with precision haptic feedback that simulates real physical sensations."
  },
  {
    icon: <HeadsetVr className="w-10 h-10 text-accent-purple" />,
    title: "Ergonomic Design",
    description: "Lightweight and perfectly balanced for comfortable extended sessions without fatigue."
  },
  {
    icon: <Brain className="w-10 h-10 text-accent-blue" />,
    title: "Neural Interface",
    description: "Our advanced BCI technology interprets neural signals for intuitive thought-based controls."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-accent-purple" />,
    title: "Cross-platform",
    description: "Seamlessly connects with all your devices for an integrated digital ecosystem experience."
  }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay * 0.1,
            ease: "easeOut"
          }
        }
      }}
      className="feature-card"
    >
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/grid.svg')] opacity-5 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Revolutionary</span> Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our cutting-edge VR technology pushes the boundaries of what's possible 
            with innovative features that transform how you experience virtual reality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;