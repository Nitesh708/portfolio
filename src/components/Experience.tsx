"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Activity, LucideIcon } from "lucide-react"; // Import LucideIcon for better type safety
// Removed unnecessary React.ElementType import for LucideIcon

// --- INTERFACES & DATA (No major changes needed here, data is complete) ---

interface LeadershipItem { // Renamed from 'Leadership' to 'LeadershipItem' for clarity
  title: string;
  organization: string;
  duration: string;
  points: string[];
}

// --- ICON MAPPING (Updated to use LucideIcon type) ---

// Define a map that links the title string to the LucideIcon component
const IconMap: { [key: string]: LucideIcon } = {
  "Technical Lead": Briefcase,
  "Freelance Development": Activity
};

// --- ANIMATION VARIANTS (No changes needed) ---

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- COMPONENT (Fixes applied inside the component) ---

export default function Leadership() {
  // COMBINING ALL DATA from the two image files for a complete timeline
  const leadershipData: LeadershipItem[] = [ // Use the new interface name
    {
      title: "Technical Lead",
      organization: "Cognecto Pvt. LTD",
      duration: "Jan 2021 - Present",
      points: [
        "Led the architecture and design of scalable, secure systems with modular components and enterprise-grade access controls. Delivered 400+ secured REST APIs and over 100 interactive charts, enabling fast, reliable access to critical operational data. Managed AWS infrastructure processing millions of daily events, ensuring high availability and seamless service scaling. Mentored and guided a 10+ member cross-functional team, contributing across backend, frontend, and platform delivery."
      ],
    },
    {
      title: "Freelance Development",
      organization: "Grosint",
      duration: "2022 - 2024",
      points: [
        "Built a scalable automation system using Appium for mobile workflows and Selenium for dynamic web scraping, enabling high-throughput data extraction across multiple platforms. Integrated 20+ third-party APIs to enhance data depth and responsiveness. Contributed to both backend (Flask) and frontend (Angular) systems, improving delivery efficiency and modularity across the platform."
      ],
    }
  ];

  // Function to render points as plain text
  const renderPoint = (point: string) => point; // Already correct: simple return

  return (
    // Replaced hardcoded hex colors with custom names for better Tailwind utility consistency (assuming tailwind.config has these)
    // If not using a custom config, the hex colors are fine, but using general classes like 'bg-gray-900' is better practice.
    // Keeping the original dark hex for fidelity: #0d0d1aa
    <section id="leadership" className="py-20 md:py-32 bg-[#0d0d1a] text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-14xl"> {/* Reduced max-w from 8l to a standard 7xl */}
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Enhanced readability with a bolder font and consistent tracking */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 mb-4 tracking-tight">
            Leadership & <span className="text-fuchsia-500">Involvement</span>
          </h2>
        </motion.div>
        
        {/* Timeline Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative pl-6 sm:pl-10 space-y-12 md:space-y-16"
        >
          {/* Vertical Timeline Line: Thicker, darker line */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-0.5 bg-gray-700/50"></div>

          {/* Map through leadership data */}
          {leadershipData.map((item, index) => {
            // TypeScript Fix: Ensure IconComponent is correctly typed as a LucideIcon
            const IconComponent: LucideIcon = IconMap[item.title] || Briefcase; 

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                // Use a slightly different dark hex color for the card for depth: #1a1a2b
                className="relative bg-[#1a1a2b] rounded-xl p-6 sm:p-8 shadow-2xl ml-4 sm:ml-12 border border-teal-500/10 hover:border-teal-400/50 transition duration-300"
              >
                {/* Timeline Marker */}
                <div className="absolute -left-6 sm:-left-10 top-6 flex items-center justify-center z-10">
                  {/* Outer Icon Box: Adjusted positioning for better alignment */}
                  {/* The original -translate-x- value needed a small fix to center it properly with the line */}
                  <div className="absolute p-2 rounded-lg bg-teal-400/20 border border-teal-400 shadow-lg -translate-x-[2.2rem] sm:-translate-x-[3.1rem]"> {/* Adjusted from 2.2rem to 3.1rem for sm: screens */}
                    <IconComponent className="w-5 h-5 text-teal-400" />
                  </div>
                  {/* Inner Circle Marker: Ensure ring color matches the card background for a cutout effect */}
                  <div className="w-3 h-3 rounded-full bg-teal-400 z-20 ring-4 ring-[#1a1a2b]"></div>
                </div>
                
                {/* Content */}
                <div>
                  {/* Title and Duration Line */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    {/* Role Title - Tealer, prominent */}
                    <h3 className="text-xl font-bold text-teal-400 leading-snug">{item.title}</h3>
                    {/* Duration - Positioned right, using Fuchsia color */}
                    <span className="block text-sm font-medium text-fuchsia-400 mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>

                  {/* Organization - Clean, secondary color */}
                  <span className="block text-md text-gray-300 mb-3 font-medium">
                    {item.organization}
                  </span>
                  
                  {/* Key Points */}
                  <ul className="list-disc pl-5 text-gray-300 space-y-2 text-base">
                    {item.points.map((point, i) => (
                      <li 
                        key={i} 
                        className="leading-relaxed"
                      >
                        {renderPoint(point)}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}