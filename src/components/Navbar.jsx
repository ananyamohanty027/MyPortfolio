import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Helper function for navigation links
function NavLink({ to, label, active, onClick }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="relative" onClick={onClick}>
      <Link
        to={to}
        className={`text-xl font-medium transition-colors duration-300 ${
          active ? "text-primary" : "text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
        }`}
      >
        {label}
      </Link>
    </motion.div>
  );
}

export default function Navbar({ theme, toggleTheme }) {
  const loc = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Stop body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  
  // Array of navigation items for easy mapping
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-[#0f1115]/70 
      backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-wide z-50" onClick={closeMenu}>
          Ananya<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation Links (Visible on md and up) */}
        {/* CHANGED gap-6 to gap-8 here for increased spacing */}
        <div className="hidden md:flex items-center gap-8"> 
          {navItems.map(item => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              label={item.label} 
              active={item.to === "/" ? loc.pathname === item.to : loc.pathname.startsWith(item.to)}
            />
          ))}
          <a href="/finalCV.pdf" download className="text-sm px-3 py-2 rounded-lg border dark:border-slate-700">
            Resume
          </a>
        </div>

        {/* Buttons (Theme Toggle and Mobile Menu Button) */}
        <div className="flex items-center gap-4 z-50">
          {/* Theme toggle button (Always visible) */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ rotate: 180, scale: 0.8 }}
            className="text-xl p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition-colors duration-300"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>

          {/* Mobile Menu Button (Visible on small screens, Toggles menu) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
            title={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
                // Close Icon (X)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                // Hamburger Icon (☰)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay (Visible only when isMenuOpen is true) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            // **CRITICAL FIXES HERE:** Using h-screen and fixing z-index
            className="fixed inset-0 pt-[73px] h-screen w-full bg-white dark:bg-[#0f1115] p-10 flex flex-col items-center gap-10 md:hidden z-[100]"
          >
            {navItems.map(item => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                label={item.label} 
                active={item.to === "/" ? loc.pathname === item.to : loc.pathname.startsWith(item.to)}
                onClick={closeMenu} 
              />
            ))}
            
            <a 
              href="/finalCV.pdf" 
              download 
              onClick={closeMenu}
              className="mt-6 text-lg font-medium px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition shadow-lg"
            >
              Download Resume
            </a>
            
            {/* Added: To prevent scrolling the background while the menu is open */}
            <div className="text-sm text-slate-400 dark:text-slate-600 mt-4 border-t border-slate-200 dark:border-slate-800 pt-6 w-full text-center max-w-xs">
                Ananya Mohanty Portfolio
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}