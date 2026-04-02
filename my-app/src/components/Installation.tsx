"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Copy, Check, Clock, Download, Settings, Key, Play, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install Node.js",
    description: "Ensure you have Node.js 18+ installed on your system",
    command: "node --version",
    icon: Download,
    color: "cyan",
    requirements: ["Node.js 18+", "JavaScript runtime"],
  },
  {
    number: "02",
    title: "Install OpenClaw",
    description: "Install the OpenClaw CLI globally via npm",
    command: "npm install -g openclaw@latest",
    icon: Download,
    color: "purple",
    requirements: ["Global CLI access", "npm package"],
  },
  {
    number: "03",
    title: "Initialize Project",
    description: "Create a new OpenClaw workspace",
    command: "openclaw init my-ai-agents",
    icon: Settings,
    color: "acid",
    requirements: ["Workspace setup", "Config files"],
  },
  {
    number: "04",
    title: "Configure API Keys",
    description: "Set up your AI provider credentials",
    command: "openclaw auth setup",
    icon: Key,
    color: "cyan",
    requirements: ["OpenAI/Anthropic", "Local models"],
  },
  {
    number: "05",
    title: "Start the Gateway",
    description: "Launch the OpenClaw gateway service",
    command: "openclaw gateway start",
    icon: Play,
    color: "purple",
    requirements: ["Web interface", "Agent manager"],
  },
  {
    number: "06",
    title: "Deploy Your First Agent",
    description: "Create and deploy a sample AI agent",
    command: "openclaw agent deploy --template starter",
    icon: Rocket,
    color: "acid",
    requirements: ["Pre-built templates", "Custom agents"],
  },
];

function InstallCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(step.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Icon = step.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-cyan/30">
        {/* Number Badge */}
        <div className="absolute top-4 right-4">
          <span className="font-mono text-3xl font-bold text-white/10 group-hover:text-cyan/30 transition-colors">
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-${step.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 text-${step.color}`} />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-cyan transition-colors">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/60 mb-4">{step.description}</p>

        {/* Requirements */}
        <div className="flex flex-wrap gap-2 mb-4">
          {step.requirements.map((req) => (
            <span key={req} className="px-2 py-1 rounded-md bg-white/5 text-xs text-white/50">
              {req}
            </span>
          ))}
        </div>

        {/* Code Block */}
        <div className="relative code-block p-4 rounded-xl group-hover:border-cyan/20 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/40 font-mono">$</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={copyToClipboard}
              className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-acid" />
              ) : (
                <Copy className="w-4 h-4 text-white/40" />
              )}
            </motion.button>
          </div>
          <code className="text-sm font-mono text-cyan/90 break-all">{step.command}</code>
        </div>

        {/* Hover glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at 50% 0%, rgba(0, 212, 255, 0.06), transparent 40%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Installation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="installation"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass text-sm font-mono"
          >
            <Clock className="w-4 h-4 text-cyan" />
            <span className="text-white/70">Estimated Time: ~5 minutes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Installation{" "}
            <span className="text-gradient">Guide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Get OpenClaw running on your system in minutes. No complex configuration required.
          </motion.p>

          {/* Prerequisites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 glass rounded-2xl p-6 inline-block"
          >
            <h4 className="font-heading font-semibold text-white mb-4 text-left">Prerequisites</h4>
            <div className="grid grid-cols-3 gap-6 text-left">
              {[
                { label: "Node.js 18+", sub: "JavaScript runtime" },
                { label: "4GB RAM", sub: "Minimum memory" },
                { label: "5GB Storage", sub: "Disk space needed" },
              ].map((req) => (
                <div key={req.label}>
                  <div className="text-sm font-medium text-white">{req.label}</div>
                  <div className="text-xs text-white/50">{req.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Installation Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {steps.map((step, index) => (
            <InstallCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Completion CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
              Ready to Deploy?
            </h3>
            <p className="text-white/60 mb-8">
              Your OpenClaw installation is complete! Access the web interface at{" "}
              <span className="text-cyan font-mono">localhost:3000</span>{" "}
              or dive into the documentation to explore advanced features.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="http://localhost:3000"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-purple opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2 text-white font-heading font-semibold">
                  <Rocket className="w-5 h-5" />
                  Open Web Interface
                </span>
              </motion.a>
              
              <motion.a
                href="#docs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full glass border-white/10 hover:border-cyan/30 text-white/80 hover:text-white transition-all"
              >
                View Docs
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
