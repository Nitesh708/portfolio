"use client";

import { Code2, BarChart3, Cloud, Users, LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Update the interface to use LucideIcon type for better safety
interface FocusArea {
    icon: LucideIcon;
    title: string;
    description: string;
}

// Renamed highlights to focus areas and updated icons/descriptions to be more resume-specific
const focusAreas: FocusArea[] = [
    {
        icon: Cloud,
        title: "High-Availability AWS Architecture",
        description:
            "Architected and deployed AWS-based IoT platforms (Lambda, Kinesis, IoTcore, Flink) to process telemetry data from over 1 million connected assets, ensuring 99.9% uptime.",
    },
    {
        icon: BarChart3,
        title: "Real-Time Data Processing",
        description:
            "Engineered high-performance data processing pipelines and implemented parallel execution systems (Celery, Redis) to handle 50K+ concurrent connections and 1K+ real-time OSINT events daily.",
    },
    {
        icon: Code2,
        title: "Full Stack Development & Security",
        description:
            "Drove end-to-end platform development, designing 25+ dashboards (Angular) and implementing 100+ secure RESTful APIs (Spring Boot). Architected robust authentication (JWT, RBAC), improving security compliance by 40%."
    },
    {
        icon: Users,
        title: "Leadership & Workflow Automation",
        description:
            "Drove team efficiency by implementing CI/CD pipelines, reducing release time by 35%. Mentored junior developers and conducted 20+ technical interviews, improving onboarding speed by 25%."
    },
];

// Animation variants
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
    // Extracting key profile points from the resume


    return (
        // Added subtle background gradient for visual interest
        <section 
            id="about" 
            className="py-24 md:py-32 text-white relative overflow-hidden bg-[#0d0d1a] 
                       before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#0d0d1a] before:via-[#0d0d1a] before:to-[#1a1a2b] before:opacity-80"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-10xl relative z-10">
                
                {/* Section Header */}
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
                    <div className="h-1 w-20 bg-fuchsia-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* --- Primary Narrative Section --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >

                    <p className="text-gray-400 text-lg leading-relaxed">
                        With over 4+ years of experience driving software architecture, I specialize in the end-to-end
                        design and deployment of scalable cloud platforms. My focus is on technical ownership,
                        transforming complex, high-volume data challenges into reliable, large-scale systems. I
                        champion best practices across the full stack—from front-end strategy to infrastructure
                        architecture—to ensure delivery of high-availability solutions and mentor developing talent.                    </p>
                </motion.div>

                {/* --- Integrated Highlights Grid (The main visual content) --- */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {focusAreas.map((itemData, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            // Added dynamic hover effects: scale, subtle rotation, and glow
                            whileHover={{ 
                                scale: 1.03, 
                                rotate: index % 2 === 0 ? 1 : -1, // Alternate tilt for visual interest
                                transition: { duration: 0.2 },
                                boxShadow: "0 10px 20px -5px rgba(52, 211, 163, 0.4)", // Stronger glow on hover
                            }}
                            className="bg-[#1a1a2b] p-6 rounded-xl border-t-4 border-teal-400/50 transition-all duration-300 shadow-2xl group cursor-pointer h-full"
                        >
                            {/* Icon with a gradient ring border */}
                            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-fuchsia-500 p-[3px] group-hover:p-[2px] transition-all">
                                <div className="bg-[#1a1a2b] w-full h-full rounded-full flex items-center justify-center">
                                    <itemData.icon className="w-6 h-6 text-fuchsia-400" />
                                </div>
                            </div>

                            <h4 className="text-lg font-extrabold text-teal-400 mb-2">
                                {itemData.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {itemData.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}