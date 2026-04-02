"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  Workflow,
  Palette,
  Code2,
  Database,
  Globe,
  Cpu,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "AI Agents",
    description: "Autonomous digital workers that handle complex tasks 24/7 without human intervention.",
    icon: Bot,
    gradient: "from-neon-blue/20 to-neon-purple/20",
    accent: "neon-blue",
    size: "large",
  },
  {
    title: "Automation",
    description: "Streamline workflows and eliminate repetitive tasks.",
    icon: Workflow,
    gradient: "from-neon-purple/20 to-neon-pink/20",
    accent: "neon-purple",
    size: "small",
  },
  {
    title: "Creative AI",
    description: "Generate stunning visuals, copy, and media.",
    icon: Palette,
    gradient: "from-neon-cyan/20 to-neon-blue/20",
    accent: "neon-cyan",
    size: "small",
  },
  {
    title: "Development",
    description: "Custom AI-powered applications and integrations.",
    icon: Code2,
    gradient: "from-neon-pink/20 to-neon-purple/20",
    accent: "neon-pink",
    size: "medium",
  },
  {
    title: "Data Systems",
    description: "Intelligent data processing and analytics.",
    icon: Database,
    gradient: "from-neon-blue/20 to-neon-cyan/20",
    accent: "neon-blue",
    size: "medium",
  },
  {
    title: "Web3 & Blockchain",
    description: "Decentralized AI solutions for the new internet.",
    icon: Globe,
    gradient: "from-neon-green/20 to-neon-blue/20",
    accent: "neon-cyan",
    size: "small",
  },
  {
    title: "Compute",
    description: "High-performance GPU clusters for training and inference.",
    icon: Cpu,
    gradient: "from-neon-purple/20 to-neon-blue/20",
    accent: "neon-purple",
    size: "small",
  },
  {
    title: "Security",
    description: "AI-powered threat detection and response systems.",
    icon: Shield,
    gradient: "from-neon-pink/20 to-neon-cyan/20",
    accent: "neon-pink",
    size: "large",
  },
];

function BentoCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const Icon = service.icon;
  const isLarge = service.size === "large";
  const isMedium = service.size === "medium";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8 cursor-pointer ${
        isLarge
          ? "md:col-span-2 md:row-span-2"
          : isMedium
          ? "md:col-span-1 md:row-span-2"
          : ""
      }`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Animated corner accent */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-${service.accent}/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6`}
        >
          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${service.accent}`} />
        </motion.div>

        {/* Text */}
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 sm:mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>
        
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Learn more link */}
        <div className="mt-auto pt-4 sm:pt-6 flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors"
        >
          <span className="text-sm font-medium">Learn more</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="text-lg">
            →
          </motion.span>
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}

export default function ServicesBento() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 mb-6 rounded-full glass text-sm font-medium text-neon-cyan"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            AI-Powered{" "}
            <span className="text-gradient">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
          >
            From autonomous agents to creative AI, we build the systems that
            power the future.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <BentoCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
