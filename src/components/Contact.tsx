"use client";

import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion, Variants } from 'framer-motion';

// Define the type for contact items
interface ContactItem {
  icon: typeof Mail | typeof Phone | typeof MapPin;
  title: string;
  content: string;
  link: string | null;
}

// Data for social media links (added icons for better visual appeal)
const socialLinks = [
  {
    platform: 'GitHub',
    icon: Github,
    url: "https://github.com/nitesh708  " // Assuming a link structure
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    url: "https://linkedin.com/in/nitesh7085" // Assuming a link structure
  },
];

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    title: "Email Address",
    content: "jainn7085@gmail.com",
    link: "mailto:jainn7085@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+916266794162",
    link: "tel:+916266794162"
  },
  {
    icon: MapPin,
    title: "Primary Location",
    content: "Indore, India",
    link: null
  }
];

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  const discordWebhook = 'https://discord.com/api/webhooks/1433397512206680155/_u3pCEJccJ04TqY0N2WTkhf4DNPKhMu3--_v6eyd1dTHz4SvjmV2l2j06NYOEsN-7Cww';

  const message = {
    content: `📬 **New Contact Form Submission**
**Name:** ${formData.name}
**Email:** ${formData.email}
**Subject:** ${formData.subject}
**Message:** ${formData.message}`
  };

  try {
    await fetch(discordWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    setStatus('sent');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  } catch (error) {
    console.error("Error sending to Discord:", error);
    setStatus('idle');
    alert("Failed to send message. Please try again later.");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0d0d1a] text-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-14xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-teal-400 tracking-tight">
            Get In <span className="text-fuchsia-500">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            Ready to discuss a project or opportunity? Send a quick message, or reach out directly using the details below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 md:gap-16">
          
          {/* Contact Info (Left Column - Spanning 2/5) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl font-bold text-teal-400 mb-4">
                Let's work together
              </h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                I'm always interested in hearing about new challenges. Whether you need an experienced full-stack architect or have a question about IoT infrastructure, I'll reply promptly.
              </p>
            </motion.div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 bg-[#1a1a2b] rounded-xl transition-all duration-300 border border-fuchsia-500/10 hover:border-teal-400/50 hover:shadow-lg hover:shadow-fuchsia-500/10 group cursor-pointer"
                >
                  <div className="bg-teal-400/20 p-3 rounded-lg flex-shrink-0 group-hover:bg-teal-400/30 transition-colors">
                    <item.icon className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-teal-400 font-bold mb-1 text-base md:text-lg">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-fuchsia-500 transition-colors duration-300 text-sm md:text-base font-medium"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm md:text-base">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div variants={fadeUp} className="pt-4">
              <h4 className="text-gray-300 font-semibold mb-4 text-lg md:text-xl">
                Connect on Social
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-[#1a1a2b] text-gray-300 rounded-full border border-teal-400/10 hover:bg-teal-400 hover:text-[#0d0d1a] transition-all duration-300 font-semibold text-sm md:text-base"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.platform}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form (Right Column - Spanning 3/5) */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 bg-[#1a1a2b] p-8 md:p-10 rounded-2xl shadow-2xl shadow-teal-500/10 border border-fuchsia-500/20"
          >
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">
                Send a Quick Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email in a single row for better desktop spacing */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0d0d1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 placeholder-gray-500"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0d0d1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0d0d1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 placeholder-gray-500"
                  placeholder="Inquiry for a new project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0d0d1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-300 resize-none placeholder-gray-500"
                  placeholder="Tell me about your project, timeline, and requirements..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-4 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-[#0d0d1a]
                            ${status === 'sent' 
                                ? 'bg-fuchsia-500 hover:bg-fuchsia-400' 
                                : 'bg-teal-400 hover:bg-teal-300'
                            }`}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
                {status === 'sending' && (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-[#0d0d1a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                )}
                {status === 'sent' && 'Message Sent! 🎉'}
              </motion.button>
            </form>
            
            {/* Success message box (visual instead of alert) */}
            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-3 bg-fuchsia-500/20 text-fuchsia-300 rounded-lg text-center text-sm md:text-base border border-fuchsia-500"
              >
                Thank you for reaching out! I'll be in touch soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}