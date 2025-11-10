import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(2,6,23,0.08)" }}
      className="p-6 rounded-2xl bg-white dark:bg-[#16181d] 
                 border border-slate-100 dark:border-slate-800 
                 transition-all duration-500"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 transition-colors">
            {project.desc}
          </p>
        </div>
        <div className="text-sm text-slate-400 dark:text-slate-500 transition-colors">
          {project.tech.join(" • ")}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        {project.github && (
          <a
            target="_blank"
            rel="noreferrer"
            href={project.github}
            className="text-sm px-3 py-2 rounded-xl border border-slate-300 
                       dark:border-slate-700 text-slate-700 dark:text-slate-200 
                       hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            GitHub
          </a>
        )}
        {project.live && (
          <a
            target="_blank"
            rel="noreferrer"
            href={project.live}
            className="text-sm px-3 py-2 rounded-xl bg-primary text-white 
                       hover:opacity-90 transition"
          >
            Live
          </a>
        )}
      </div>
    </motion.article>
  );
}
