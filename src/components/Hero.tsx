"use client";

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- Typing Effect Component ---

// The constant with your desired roles (now using the article "a")
const ROLES = [
  "I am a Full Stack Developer",
  "I am a Video Editor and Youtuber",
  "I am a Gamer",
];

// Custom hook to handle the typing and deleting logic
const useTypingEffect = (words: string[], speed = 100, delay = 1500) => {
  const [index, setIndex] = useState(0); 
  const [text, setText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false); 

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];

      if (isDeleting) {
        // DELETE mode: Remove one character
        setText(prev => prev.substring(0, prev.length - 1));
        // If word is fully deleted, switch to typing the next word
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // TYPING mode: Add one character
        setText(prev => currentWord.substring(0, prev.length + 1));
        // If word is fully typed, pause and then switch to deleting
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    // Set the typing speed: slower when typing, faster when deleting
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, speed, delay]);

  return text;
};

// --- Animation Variants ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const buttonItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// --- Hero Component ---
export default function Hero() {
  const typingText = useTypingEffect(ROLES);

  return (
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative bg-[#0d0d1a] overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-10xl relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center space-y-6 md:space-y-8"
        >
          
          {/* Tagline/Greeting */}
          <motion.div variants={item} className="space-y-2 md:space-y-4">
            <h2 className="text-lg md:text-xl text-fuchsia-400 font-mono tracking-wider">
              Hi, I'm
            </h2>
            {/* Primary Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
              Nitesh <span className="text-teal-400">Jain</span>
            </h1>
            <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-fuchsia-500 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Role/Headline with Typing Effect */}
          <motion.p variants={item} className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light max-w-4xl mx-auto pt-2 h-10 md:h-12">
            <span className="font-medium text-teal-400">
                {typingText}
            </span>
            {/* Blinking cursor for effect */}
            <span className="inline-block w-1 bg-fuchsia-400 h-8 md:h-10 ml-1 align-middle animate-pulse"></span>
          </motion.p>

          {/* Description based on Resume Profile */}
          <motion.p variants={item} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
           Full Stack Developer specializing in architecting and deploying scalable, high-availability cloud solutions. Eager to solve complex, real-time data problems and contribute to dynamic engineering teams.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={container} 
            className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8"
          >
            <motion.a
              variants={buttonItem}
              href="#contact"
              className="px-8 md:px-10 py-3 md:py-4 bg-teal-400 text-[#0d0d1a] font-bold rounded-xl hover:bg-teal-300 transition-colors shadow-lg shadow-teal-500/30 text-base md:text-lg tracking-wide"
            >
              Get In Touch
            </motion.a>
            <motion.a
              variants={buttonItem}
              href="#projects"
              className="px-8 md:px-10 py-3 md:py-4 border-2 border-fuchsia-400 text-fuchsia-400 font-semibold rounded-xl hover:bg-fuchsia-400 hover:text-white transition-colors text-base md:text-lg tracking-wide"
            >
              View Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex justify-center gap-8 pt-12">
            <a
              href="https://github.com/nites7085"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="www.linkedin.com/in/nitesh7085"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="mailto:jainn7085@gmail.com"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors animate-bounce z-10"
        aria-label="Scroll down to About section"
      >
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
      </motion.a>
    </section>
  );
}