"use client";

import { motion, Variants } from "framer-motion";
// No lucide-react or other icons needed if using devicon, keeping only Framer Motion imports

interface Skill {
  name: string;
  // Use a generic devicon class string for the icon
  icon?: string; 
}

interface SkillCategory {
  title: string;
  // Using Tailwind utility classes for color
  titleColor: string; 
  skills: Skill[];
}

// --- Skill Data Redesigned to Match Resume ---

// NOTE: Mapping devicon classes to resume skills. Some icons are approximations.
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    titleColor: "text-teal-400", // Using Teal for primary tech categories
    skills: [
      { name: "Java", icon: "devicon-java-plain-wordmark" }, // From resume
      { name: "Python", icon: "devicon-python-plain-wordmark" }, // From resume
      { name: "JavaScript", icon: "devicon-javascript-plain" }, // From resume
      { name: "C++", icon: "devicon-cplusplus-plain" }, // From resume
      { name: "C", icon: "devicon-c-plain" }, // From resume
    ],
  },
  {
    title: "Frameworks & Databases",
    titleColor: "text-fuchsia-400", // Using Fuchsia for frameworks/databases
    skills: [
      { name: "Spring Boot", icon: "devicon-spring-plain-wordmark colored" }, // From resume
      { name: "Angular", icon: "devicon-angularjs-plain" }, // From resume
      { name: "Flask", icon: "devicon-flask-original-wordmark" }, // From resume
      { name: "MySQL", icon: "devicon-mysql-plain-wordmark" }, // From resume
      { name: "DynamoDB", icon: "devicon-amazonwebservices-plain-wordmark" }, // From resume
      { name: "Timestream", icon: "devicon-amazonwebservices-plain-wordmark" }, // From resume (AWS icon used as approximation)
      { name: "Selenium", icon: "devicon-selenium-original" }, // From resume
        { name: "Appium", icon: "devicon-appium-original" }, // From resume
      // Added MongoDB from the project section for completeness
    ],
  },
  {
    title: "AWS Cloud & DevOps",
    titleColor: "text-teal-400",
    skills: [
      { name: "AWS IoTcore", icon: "devicon-amazonwebservices-plain-wordmark" }, // From resume
      { name: "Lambda", icon: "devicon-amazonwebservices-plain-wordmark" }, // From resume
      { name: "Kinesis", icon: "devicon-amazonwebservices-plain-wordmark" }, // Flink/Stream from resume
      { name: "S3", icon: "devicon-amazonwebservices-plain-wordmark" }, // From resume
      { name: "EC2", icon: "devicon-amazonwebservices-plain-wordmark" }, // From resume
      { name: "Git & Bitbucket", icon: "devicon-git-plain-wordmark" }, // From resume
      { name: "CI/CD (CodeDeploy)", icon: "devicon-jenkins-plain" }, // From resume (using Jenkins icon as CI/CD general)
      { name: "Redis", icon: "devicon-redis-plain-wordmark" }, // From resume
    ],
  },
  {
    title: "Tools & Soft Skills",
    titleColor: "text-fuchsia-400",
    skills: [
      { name: "JIRA", icon: "devicon-jira-plain-wordmark" }, // From resume
      { name: "IntelliJ", icon: "devicon-intellij-plain-wordmark" }, // From resume
      { name: "Visual Studio", icon: "devicon-visualstudio-plain" }, // From resume
      { name: "Leadership", icon: "devicon-bash-plan" }, // General icon
      { name: "Goal-Oriented", icon: "devicon-bash-pain" }, // General icon
      { name: "DaVinci Resolve 20.0", icon: "devicon-bash-lain" }, // General icon (for Video Editing)
    ],
  },
];

// --- COMPONENT ---

export default function Skills() {
  // Animation variants (No changes needed)
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0a0f1c] text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-10xl"> {/* Using max-w-7xl for consistency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Changed 'cyan-400' to 'teal-400' for consistency with other sections */}
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4 tracking-tight">
            Skills & <span className="text-fuchsia-500">Expertise</span>
          </h2>
          {/* Changed 'pink-500' to 'fuchsia-500' for consistency */}
          <div className="h-1 w-20 bg-fuchsia-500 mx-auto rounded-full"></div> 
          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            A blend of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeUp} className="mb-8">
              <h3
                // Use the category's dedicated color class
                className={`text-2xl md:text-3xl font-bold mb-6 ${category.titleColor}`}
              >
                {category.title}
              </h3>

              <motion.div
                variants={container}
                // Simplified grid layout for all categories to be consistent
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: { duration: 0.2 },
                      // Added hover shadow for depth and engagement
                      boxShadow: "0 10px 15px -3px rgba(52, 211, 163, 0.3), 0 4px 6px -2px rgba(52, 211, 163, 0.1)", // custom teal shadow
                    }}
                    // Using a darker background for contrast: #11172b
                    className="flex flex-col items-center justify-center bg-[#11172b] rounded-xl py-6 px-4 hover:bg-[#18223a] transition-colors duration-300 shadow-xl border border-transparent hover:border-teal-400/50 cursor-pointer"
                  >
                    {skill.icon ? (
                      // Only render icon if defined
                      <i className={`${skill.icon} text-4xl text-teal-400 mb-3`}></i>
                    ) : (
                      // Fallback for soft skills without a specific icon
                      <div className="text-3xl font-extrabold text-teal-400 mb-3">#</div>
                    )}
                    
                    <span className="text-gray-200 font-semibold text-sm md:text-base text-center tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}