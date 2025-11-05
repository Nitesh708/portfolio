"use client";

import { GraduationCap, School, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

type EduItem = {
  icon: LucideIcon;
  institute: string;
  degree: string;
  period: string;
  highlight?: string;
};

const education: EduItem[] = [
  {
    icon: GraduationCap,
    institute: "ITM Gwalior",
    degree: "Bachelor of Technology in Computer Science",
    period: "Aug 2017 – Aug 2021",
    highlight: "CGPA: 7.9",
  },
  {
    icon: School,
    institute: "Orchid Higher School",
    degree: "Class 12th",
    period: "July 2016 – Apr 2017",
    highlight: "70%",
  },
  {
    icon: School,
    institute: "Orchid Higher School",
    degree: "Class 10th",
    period: "Apr 2014 – May 2015",
    highlight: "72%",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 text-white relative overflow-hidden bg-[#0d0d1a]
                 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br
                 before:from-[#0d0d1a] before:via-[#0d0d1a] before:to-[#1a1a2b] before:opacity-80 min-h-[65vh]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-14xl relative z-10">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-teal-400 tracking-tight">
            About <span className="text-fuchsia-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-20"
        >
          <div
            className="
              w-full 
              max-w-[45%] md:max-w-[80%] sm:max-w-[80%] 
              text-center
            "
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed md:leading-8">
              Hello! I'm Nitesh, a passionate Full Stack Developer who loves bringing ideas to life
              through code. My journey in tech is driven by curiosity, creativity, and a desire to
              build meaningful, user-focused solutions that make a real impact. Over the years, I've
              tackled a wide range of challenges — from designing seamless front-end experiences to
              developing efficient, scalable backend systems. I’m passionate about continuous
              learning, clean architecture, and creating solutions that are as reliable as they are
              innovative.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-400 tracking-tight">
            Education
          </h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-[#1a1a2b] p-6 rounded-2xl border-t-4 border-teal-400/50 transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* Non-neon neutral icons for all */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2a3d]">
                  <edu.icon className="w-5 h-5 text-gray-300" />
                </div>

                <h4 className="text-xl font-extrabold text-teal-400">
                  {edu.institute}
                </h4>
              </div>

              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
              {edu.highlight && (
                <p className="text-teal-400 font-semibold text-sm mt-3">
                  {edu.highlight}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
