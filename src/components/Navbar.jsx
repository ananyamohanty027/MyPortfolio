import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ theme, toggleTheme }) {
  const loc = useLocation();
  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#0f1115]/70 
      backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-wide">
          Ananya<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" label="Home" active={loc.pathname === "/"} />
          <NavLink to="/projects" label="Projects" active={loc.pathname.startsWith("/projects")} />
          <NavLink to="/about" label="About" active={loc.pathname === "/about"} />
          <NavLink to="/contact" label="Contact" active={loc.pathname === "/contact"} />
          <a href="/finalCV.pdf" download className="text-sm px-3 py-2 rounded-lg border dark:border-slate-700">
            Resume
          </a>

          {/* Theme toggle button */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ rotate: 180, scale: 0.8 }}
            className="text-xl p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, label, active }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="relative">
      <Link
        to={to}
        className={`text-sm transition-colors duration-300 ${
          active ? "font-medium text-primary" : "text-slate-700 dark:text-slate-300"
        }`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
