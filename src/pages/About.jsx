import React from "react";
import { motion } from "framer-motion";

// Mock Data (Replace with actual import in your real project)
const profile = {
  short: "I'm a passionate developer...",
  education: [
    { school: "Lovely Professional University", degree: "B.Tech in Computer Science", date: "2021-2025", cgpa: "7.23" }
  ],
  skills: {
    languages: ["C++", "JavaScript", "Java", "Python"],
    frameworks: ["React", "Node.js", "Express"],
    // Updated tools: Removed 'VS Code', added 'API Integration'
    tools: ["Git", "MongoDB", "API Integration"]
  }
};

// Reusable Badge Component for Skills
const SkillBadge = ({ children }) => (
  <span className="inline-block px-2.5 py-0.5 mr-2 mb-2 text-xs font-medium rounded-full 
                   bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 
                   border border-slate-200 dark:border-slate-700 transition-colors">
    {children}
  </span>
);

export default function About() {
  // Animation variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-10 md:grid-cols-3 transition-colors duration-500"
    >
      {/* Left Column: Main Content */}
      <div className="md:col-span-2 space-y-10">
        {/* About Me */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              About Me
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
            {profile.short} I specialize in building user-focused web applications, 
            integrating APIs, and deploying production apps. I love solving complex problems 
            with clean, maintainable code.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Education
          </h3>
          <div className="space-y-6">
            {profile.education.map((e, index) => (
              <div key={index} className="pl-4 border-l-2 border-indigo-500/30 dark:border-purple-500/30">
                <h4 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                  {e.school}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {e.degree}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                  {e.date} • CGPA: {e.cgpa}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Sidebar (Skills & Resume) */}
      <motion.aside 
        variants={itemVariants}
        className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 
                   bg-white dark:bg-[#16181d]/50 backdrop-blur-sm shadow-sm
                   flex flex-col gap-8 h-fit md:sticky md:top-24"
      >
        {/* Skills Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            Technical Toolbox
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Languages</h4>
              <div className="flex flex-wrap">
                {profile.skills.languages.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Frameworks & Libraries</h4>
              <div className="flex flex-wrap">
                {profile.skills.frameworks.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
              </div>
            </div>
             <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Tools & Platforms</h4>
              <div className="flex flex-wrap">
                {profile.skills.tools.map(s => <SkillBadge key={s}>{s}</SkillBadge>)}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download Button */}
        <a
          href="/finalCV.pdf"
          download
          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl 
                     bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 
                     font-medium hover:opacity-90 transition-opacity shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
          </svg>
          Download Full Resume
        </a>
      </motion.aside>
    </motion.section>
  );
}