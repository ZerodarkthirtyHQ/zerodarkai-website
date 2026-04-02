"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Copy, Check, Download, Settings, Key, Play, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install Node.js",
    description: "Ensure you have Node.js 18+ installed",
    command: "node --version",
    icon: Download,
    color: "cyan",
  },
  {
    number: "02",
    title: "Install OpenClaw",
    description: "Install the OpenClaw CLI globally",
    command: "npm install -g openclaw@latest",
    icon: Download,
    color: "purple",
  },
  {
    number: "03",
    title: "Initialize Project",
    description: "Create a new OpenClaw workspace",
    command: "openclaw init my-ai-agents",
    icon: Settings,
    color: "acid",
  },
  {
    number: "04",
    title: "Configure Auth",
    description: "Set up your AI provider credentials",
    command: "openclaw auth setup",
    icon: Key,
    color: "cyan",
  },
  {
    number: "05",
    title: "Start Gateway",
    description: "Launch the OpenClaw gateway service",
    command: "openclaw gateway start",
    icon: Play,
    color: "purple",
  },
  {
    number: "06",
    title: "Deploy Agent",
    description: "Create and deploy your first AI agent",
    command: "openclaw agent deploy --template starter",
    icon: Rocket,
    color: "acid",
  },
];

function TimelineCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = step.icon;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(step.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isEven ? -100 : 100, rotateY: isEven ? 45 : -45 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      className={`relative flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center gap-8`}
      style={{ perspective: "1000px" }}
    >
      {/* Card */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateY: isEven ? 5 : -5,
          z: 50
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex-1 glass-card rounded-2xl p-6 group cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <div className="flex-shrink-0">
            <div className={`w-14 h-14 rounded-xl bg-${step.color}/10 border border-${step.color}/30 flex items-center justify-center`}>
              <span className={`font-heading font-bold text-xl text-${step.color}`}>{step.number}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Icon className={`w-5 h-5 text-${step.color}`} />
              <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan transition-colors">
                {step.title}
              </h3>
            </div>
            
            <p className="text-sm text-white/50 mb-4">{step.description}</p>

            {/* Code Block */}
            <div className="code-block rounded-lg p-3 flex items-center justify-between group-hover:border-cyan/30 transition-colors">
              <code className="font-mono text-sm text-cyan/90">{step.command}</code>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={copyToClipboard}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-acid" />
                ) : (
                  <Copy className="w-4 h-4 text-white/40" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Connector */}
      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-cyan glow-cyan relative z-10" />

      {/* Spacer for alternating layout */}
      <div className="flex-1" />
    </motion.div>
  );
}

export default function InstallationTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="installation"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 rounded-full glass text-xs font-mono text-cyan tracking-wider">
            ~5 MINUTES
          </span>
          
          <h2 className="font-heading font-black text-6xl md:text-8xl text-white mb-6">
            INSTALLATION
            <br />
            <span className="text-gradient">PROTOCOL</span>
          </h2>
          
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Six steps to AI agent mastery. Copy, paste, deploy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan via-purple to-acid"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <TimelineCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <Rocket className="w-12 h-12 text-acid mx-auto mb-4" />
            
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Ready for Launch?
            </h3>
            
            <p className="text-white/60 mb-8">
              Your OpenClaw installation is complete. Access the web interface at{" "}
              <span className="text-cyan font-mono">localhost:3000</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="http://localhost:3000"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-purple text-white font-heading font-bold"
              >
                Open Web Interface
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#docs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border-white/10 hover:border-cyan/30 text-white/80 hover:text-white transition-all"
              >
                View Documentation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
