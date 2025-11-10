import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- START: Mock Data Structure (Please replace this with your actual import) ---
const profile = {
  name: "Ananya Mohanty",
  short: "I build production-grade web apps and creative tools — focused on UX, motion, and robust backends.",
  contact: {
    linkedin: "https://linkedin.com/in/ananya-mohanty",
  },
  skills: {
    languages: ["C++", "JavaScript", "Java", "Python"],
  },
  // FIXED: Use standard forward slash for web paths. 
  // If 'profile pic.jpg' is directly in your 'public' folder, this will work.
  image: "/profile pic.jpg", 
};
// --- END: Mock Data Structure ---

// --- START: Official LinkedIn Brand Icon SVG ---
const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    // Preserving standard LinkedIn blue color if you want it, otherwise use 'currentColor' to match text
    // Standard color is usually #0a66c2
    className={props.className}
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 4.5z"/>
  </svg>
);
// --- END: Inline SVG ---

export default function Home() {
  return (
    <section className="grid gap-10 lg:grid-cols-2 items-center transition-colors duration-500">
      <div>
        {/* Heading */}
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-slate-100 transition-colors"
        >
          Hi — I'm {profile.name}
        </motion.h1>

        {/* Short Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl transition-colors"
        >
          {profile.short}
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary text-white shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          >
            Explore my Work
          </Link>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-slate-400/50 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors duration-300"
          >
            <LinkedInIcon className="w-5 h-5 text-[#0a66c2] dark:text-white" /> {/* Added brand color for light mode */}
            LinkedIn
          </a>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-3 transition-colors">
            Featured Skills
          </h4>
          <div className="flex gap-3 flex-wrap">
            {profile.skills.languages.map((s) => (
              <span
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm transition-colors"
                key={s}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right-side Image Section - GLOWING EFFECT IMPLEMENTED */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="relative flex items-center justify-center h-full min-h-[16rem] lg:min-h-[20rem] xl:min-h-[24rem]"
      >
        {/*
          This wrapper DIV creates the GLOW effect using box-shadow.
          It is slightly larger than the image to provide space for the glow.
        */}
        <div 
          className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center 
                     // GLOW SHADOW STYLES: 
                     shadow-2xl shadow-purple-600/50 
                     dark:shadow-indigo-500/50 
                     hover:shadow-3xl hover:shadow-purple-500/80 
                     dark:hover:shadow-indigo-400/80 
                     transition-shadow duration-300 ease-in-out"
        >
          <img
            src={profile.image || "/profile pic.jpg"} // Ensure fallback also uses correct path
            alt={`Profile picture of ${profile.name}`}
            // Image sizing is slightly smaller than the container to show the glow
            className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-full 
                       border-4 border-slate-700 dark:border-slate-800 
                       transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          />
        </div>
      </motion.div>
    </section>
  );
}