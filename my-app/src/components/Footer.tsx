"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Twitter, MessageCircle, Send, Heart, Zap, ArrowUpRight } from "lucide-react";

const footerLinks = {
  product: ["Installation", "Documentation", "Examples", "Changelog"],
  community: ["Discord", "GitHub", "Twitter", "Forum"],
  resources: ["Templates", "Tutorials", "Best Practices", "Troubleshooting"],
};

const marqueeText = "SYSTEM ONLINE • AGENTS DEPLOYED • WORKFLOWS RUNNING • API OPERATIONAL • DOCS LIVE • COMMUNITY ACTIVE • ";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative overflow-hidden"
    >
      {/* Massive Typography Background */}
      <div className="relative py-20 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-void-950 via-transparent to-void-950 z-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="whitespace-nowrap"
        >
          <div className="animate-marquee flex">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="font-heading font-black text-[20vw] text-white/[0.02] mx-8 select-none"
              >
                OPENCLAW
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* System Status Marquee */}
      <div className="relative py-4 overflow-hidden bg-void-900/50 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-void-950 via-transparent to-void-950 z-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex whitespace-nowrap"
        >
          <div className="animate-marquee flex items-center">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="font-mono text-xs text-cyan/40 mx-4 flex items-center gap-4"
              >
                <span className="status-dot" />
                {marqueeText}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex items-center" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="font-mono text-xs text-cyan/40 mx-4 flex items-center gap-4"
              >
                <span className="status-dot" />
                {marqueeText}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan/30 blur-xl rounded-full" />
                  <Zap className="relative w-10 h-10 text-cyan" />
                </div>
                <span className="font-heading font-black text-3xl">
                  <span className="text-white">OPEN</span>
                  <span className="text-gradient">CLAW</span>
                </span>
              </div>
              
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                The cyberpunk AI agent platform for makers, hobbyists, and tech enthusiasts 
                who want to automate their digital world.
              </p>
              
              <div className="flex items-center gap-3 mb-6">
                {[Github, Twitter, MessageCircle].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-cyan hover:border-cyan/30 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-white/40">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span>by Zero Dark AI</span>
              </div>
            </motion.div>

            {/* Links */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                >
                  <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href={`#${link.toLowerCase().replace(" ", "-")}`}
                          className="text-sm text-white/50 hover:text-cyan transition-colors inline-flex items-center gap-1 group"
                        >
                          {link}
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <h4 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Stay Updated
              </h4>
              <p className="text-sm text-white/50 mb-4">
                Get notified about new features and agent templates.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan to-purple text-white font-medium text-sm flex items-center justify-center gap-2"
                >
                  {subscribed ? "Subscribed!" : (
                    <>Subscribe <Send className="w-4 h-4" /></>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Zero Dark AI. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
