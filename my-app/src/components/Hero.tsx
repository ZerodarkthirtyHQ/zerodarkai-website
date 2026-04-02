"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Terminal, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "INITIALIZING_AI_AGENT_PLATFORM";
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleLetters = "OPENCLAW".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh]"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Layer - Preserved */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-void-950/60 via-void-950/40 to-void-950" />
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 grid-bg opacity-30 z-[1]" />

        {/* Floating Orbs */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-cyan/10 blur-3xl animate-float z-[1]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
          className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-purple/10 blur-3xl animate-float-delayed z-[1]"
        />

        {/* Main Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 w-full max-w-[95vw] mx-auto px-4"
        >
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-12 md:top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full glass"
          >
            <span className="status-dot" />
            <span className="font-mono text-xs text-acid tracking-wider">SYSTEM ONLINE</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-mono text-xs text-cyan tracking-wider">AGENTS READY</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-mono text-xs text-white/50">V2026.3.11</span>
          </motion.div>

          {/* MASSIVE Typography - 3D Perspective */}
          <div className="perspective-container relative">
            {/* Main Title - Split into individual letters for 3D effect */}
            <div className="flex justify-center items-center flex-wrap gap-0">
              {titleLetters.map((letter, index) => {
                const isEven = index % 2 === 0;
                const delay = index * 0.08;
                
                return (
                  <motion.span
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      y: 200,
                      rotateX: -90,
                      scale: 0.5
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0,
                      scale: 1
                    }}
                    transition={{
                      delay,
                      duration: 0.8,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    style={{
                      transform: `
                        perspective(1000px) 
                        rotateX(${(mousePosition.y * (isEven ? 0.5 : -0.3))}deg) 
                        rotateY(${(mousePosition.x * (isEven ? 0.3 : -0.5))}deg)
                        translateZ(${isEven ? 20 : 10}px)
                      `,
                      display: 'inline-block',
                    }}
                    className="font-heading font-black text-[12vw] sm:text-[10vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.04em]"
                  >
                    <span className={isEven ? "text-white" : "text-gradient"}>
                      {letter}
                    </span>
                  </motion.span>
                );
              })}
            </div>

            {/* Glitch Effect Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-cyan to-transparent my-8"
            />

            {/* Typing Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center"
            >
              <span className="font-mono text-lg md:text-xl text-cyan/80 typing-cursor">
                {typedText}
              </span>
            </motion.div>
          </div>

          {/* Tagline - Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="glass-card inline-block px-8 py-6 rounded-2xl max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-white/90 leading-tight">
                Deploy Powerful{" "}
                <span className="text-cyan">AI Agents</span>{" "}
                For Hobbyists & Enthusiasts
              </p>
              <p className="mt-4 text-sm md:text-base text-white/50 max-w-xl mx-auto">
                OpenClaw transforms your personal projects with autonomous AI agents. 
                No code required. Instant setup.
              </p>
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {["No Code Required", "CLI & Web Interface", "Instant Setup"].map((feature, i) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70"
              >
                <Sparkles className="w-3 h-3 text-cyan" />
                {feature}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#installation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full overflow-hidden animated-border"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan via-purple to-acid opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3 text-white font-heading font-bold text-lg">
                <Terminal className="w-5 h-5" />
                <span>Initialize System</span>
              </div>
            </motion.a>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border-white/10 hover:border-cyan/30 text-white/80 hover:text-white transition-all font-heading"
            >
                Explore Features
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/40"
            >
              <span className="text-xs font-mono">SCROLL</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
