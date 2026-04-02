"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Cpu, Zap, Globe, Shield } from "lucide-react";

const orbs = [
  {
    icon: Cpu,
    value: "50K+",
    label: "Active Agents",
    color: "cyan",
    size: "lg",
    position: { x: "10%", y: "20%" },
  },
  {
    icon: Zap,
    value: "125K+",
    label: "Workflows",
    color: "purple",
    size: "md",
    position: { x: "70%", y: "15%" },
  },
  {
    icon: Globe,
    value: "2M+",
    label: "Hours Automated",
    color: "acid",
    size: "xl",
    position: { x: "50%", y: "60%" },
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    color: "cyan",
    size: "sm",
    position: { x: "25%", y: "70%" },
  },
];

export default function CommandCenter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const smoothY1 = useSpring(y1, { stiffness: 50, damping: 20 });
  const smoothY2 = useSpring(y2, { stiffness: 50, damping: 20 });
  const smoothY3 = useSpring(y3, { stiffness: 50, damping: 20 });
  const smoothY4 = useSpring(y4, { stiffness: 50, damping: 20 });

  const yValues = [smoothY1, smoothY2, smoothY3, smoothY4];

  return (
    <section
      ref={containerRef}
      className="relative py-32 min-h-screen overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-[500px] h-[500px] rounded-full border border-cyan/20"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-purple/20 border-dashed"
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {orbs.map((orb, index) => {
          const Icon = orb.icon;
          const y = yValues[index];
          
          return (
            <motion.div
              key={orb.label}
              style={{ 
                y,
                left: orb.position.x,
                top: orb.position.y,
              }}
              className="absolute"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`glass-card rounded-full flex flex-col items-center justify-center cursor-pointer group ${
                  orb.size === "xl" ? "w-48 h-48" :
                  orb.size === "lg" ? "w-40 h-40" :
                  orb.size === "md" ? "w-32 h-32" :
                  "w-28 h-28"
                }`}
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-full bg-${orb.color}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                
                <Icon className={`w-8 h-8 text-${orb.color} mb-2`} />
                
                <div className={`font-heading font-black text-${orb.size === "xl" ? "4xl" : orb.size === "lg" ? "3xl" : "2xl"} text-white`}>
                  {orb.value}
                </div>
                
                <div className="text-xs text-white/50 mt-1">{orb.label}</div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Title */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-6 rounded-full glass text-xs font-mono text-acid tracking-wider">
            LIVE METRICS
          </span>
          
          <h2 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl text-white mb-6">
            COMMAND
            <br />
            <span className="text-gradient">CENTER</span>
          </h2>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Real-time statistics from the OpenClaw network. 
            Watch as the community builds the future of AI automation.
          </p>
        </motion.div>
      </div>

      {/* Connection Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 200 200 Q 400 300 600 250"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 800 150 Q 600 400 400 450"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </section>
  );
}
