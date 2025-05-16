import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Headset, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#' },
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
    { icon: <Youtube size={18} />, href: '#' }
  ];
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'VR Headsets', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Controllers', href: '#' },
        { name: 'Software', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Returns', href: '#' }
      ]
    }
  ];
  
  return (
    <footer id="contact" className="bg-[#030310] pt-16 pb-8 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Headset className="h-8 w-8 text-accent-purple" />
              <span className="font-orbitron text-xl font-bold">NEXUS<span className="text-accent-blue">VR</span></span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Pioneering the future of virtual reality with cutting-edge technology 
              and immersive experiences that transcend dimensions.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-full bg-primary-dark flex items-center justify-center border border-accent-purple/20 text-gray-300 hover:text-accent-blue hover:border-accent-blue transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-accent-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="h-5 w-5 text-accent-purple" />
              <span>contact@nexusvr.tech</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone className="h-5 w-5 text-accent-purple" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="h-5 w-5 text-accent-purple" />
              <span>123 Innovation Blvd, Tech City, CA</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm order-2 md:order-1">
              &copy; {currentYear} NEXUS VR. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500 order-1 md:order-2">
              <a href="#" className="hover:text-accent-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent-blue transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;