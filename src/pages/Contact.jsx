import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const [emailjsReady, setEmailjsReady] = useState(false);

  // Load EmailJS from CDN when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs.init("8sEdPASrizabobh1M"); // Initialize with your public key here if you want
      setEmailjsReady(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!emailjsReady) {
      console.error("EmailJS not ready yet.");
      return;
    }
    setStatus("sending");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = "service_76qsmxa";
    const TEMPLATE_ID = "template_3r6h87h";
    // If you initialized above, you don't strictly need the public key here again, 
    // but sendForm can take it as a 4th argument if needed.
    // For simplicity, we'll rely on the window.emailjs object now.

    window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current)
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto transition-colors duration-500"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
          Get In Touch
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 transition-colors">
          Have an idea, an opportunity, or just want to say hi? Drop me a message!
        </p>
      </div>

      {/* Form */}
      <form 
        ref={formRef} 
        onSubmit={sendEmail} 
        className="grid gap-6 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#16181d]/50 backdrop-blur-sm shadow-sm"
      >
        
        {/* Name Input */}
        <div>
          <label htmlFor="user_name" className="sr-only">Name</label>
          <input
            type="text"
            name="user_name" // Must match template placeholder {{user_name}}
            id="user_name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 
                       text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500
                       focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="user_email" className="sr-only">Email</label>
          <input
            type="email"
            name="user_email" // Must match template placeholder {{user_email}}
            id="user_email"
            required
            placeholder="your.email@example.com"
            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 
                       text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500
                       focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            name="message" // Must match template placeholder {{message}}
            id="message"
            required
            rows="6"
            placeholder="What's on your mind?"
            className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 
                       text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500
                       focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none resize-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button & Status Messages */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            type="submit"
            disabled={status === "sending" || !emailjsReady}
            className={`px-8 py-3 rounded-xl font-medium text-white transition-all duration-300
              ${(status === "sending" || !emailjsReady)
                ? "bg-slate-400 cursor-not-allowed" 
                : "bg-primary hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
              }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Indicators */}
          {status === "success" && (
            <p className="text-green-600 dark:text-green-400 font-medium animate-pulse">
              Message sent successfully! ✅
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400 font-medium">
              Something went wrong. Please try again. ❌
            </p>
          )}
        </div>

      </form>

      {/* Direct Contact Info */}
      <div className="mt-10 text-center text-slate-600 dark:text-slate-400 transition-colors">
        Prefer email? Reach out directly at{" "}
        <a 
          href="mailto:mohantyananya81@gmail.com" 
          className="text-primary font-medium hover:underline decoration-2 underline-offset-2 transition-all"
        >
          mohantyananya81@gmail.com
        </a>
      </div>
    </motion.section>
  );
}