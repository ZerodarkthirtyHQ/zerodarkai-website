"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  Terminal,
  Workflow,
  Code2,
  Shield,
  Cloud,
  Cpu,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Autonomous AI Agents",
    description: "Deploy specialized AI agents that work independently to automate your workflows and tasks. No coding required.",
    icon: Bot,
    gradient: "from-cyan/20 to-purple/20",
    accent: "cyan",
    size: "large",
    badge: "CORE",
  },
  {
    title: "Powerful CLI & Web UI",
    description: "Command-line tools for developers and intuitive web interface for visual management.",
    icon: Terminal,
    gradient: "from-purple/20 to-cyan/20",
    accent: "purple",
    size: "medium",
  },
  {
    title: "Workflow Automation",
    description: "Chain multiple agents together to create complex, multi-step automation workflows.",
    icon: Workflow,
    gradient: "from-acid/20 to-cyan/20",
    accent: "acid",
    size: "medium",
  },
  {
    title: "No-Code Deployment",
    description: "Launch AI agents without writing code. Use templates or build custom agents visually.",
    icon: Code2,
    gradient: "from-cyan/20 to-acid/20",
    accent: "cyan",
    size: "small",
  },
  {
    title: "Enterprise Security",
    description: "Built-in security features, authentication, and privacy controls for safe AI deployment.",
    icon: Shield,
    gradient: "from-purple/20 to-pink-500/20",
    accent: "purple",
    size: "small",
  },
  {
    title: "Local & Cloud Ready",
    description: "Run on your local machine, deploy to cloud, or hybrid configurations for maximum flexibility.",
    icon: Cloud,
    gradient: "from-cyan/20 to-purple/20",
    accent: "cyan",
    size: "large",
    badge: "FLEXIBLE",
  },
];

const useCases = [
  {
    icon: Cpu,
    title: "Hobbyist Makers",
    description: "Automate your 3D printing workflows, manage smart home devices, and create custom AI assistants.",
    color: "cyan",
  },
  {
    icon: Terminal,
    title: "Developer Enthusiasts",
    description: "Build sophisticated automation pipelines, integrate with APIs, and create intelligent monitoring systems.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Content Creators",
    description: "Automate social media posting, generate content ideas, and manage multi-platform publishing workflows.",
    color: "acid",
  },
];

function BentoCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const Icon = feature.icon;
  const isLarge = feature.size === "large";
  const isMedium = feature.size === "medium";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`group relative overflow-hidden rounded-3xl glass-card p-8 cursor-pointer ${
        isLarge
          ? "md:col-span-2 md:row-span-2"
          : isMedium
          ? "md:col-span-1 md:row-span-2"
          : ""
      }`}
      style={{ perspective: "1000px" }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Animated corner accent */}
      <div
        className={`absolute top-0 right-0 w-40 h-40 bg-${feature.accent}/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`}
      />

      {/* Badge */}
      {feature.badge && (
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-${feature.accent}/20 text-${feature.accent} border border-${feature.accent}/30`}>
            {feature.badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 border border-white/10`}
        >
          <Icon className={`w-7 h-7 text-${feature.accent}`} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className={`text-white/60 leading-relaxed ${isLarge ? "text-lg" : "text-base"}`}>
          {feature.description}
        </p>

        {/* Learn more link */}
        <div className="mt-auto pt-6 flex items-center gap-2 text-white/40 group-hover:text-cyan transition-colors"
        >
          <span className="text-sm font-medium">Learn more</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="text-lg"
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3))`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}

export default function FeaturesBento() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 mb-6 rounded-full glass text-sm font-mono text-cyan border-cyan/20"
          >
            Powerful Features for Modern Makers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Designed for{" "}
            <span className="text-gradient-cyan">Hobbyists</span>
            {" "}| Ready for{" "}
            <span className="text-gradient-purple">Production</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            OpenClaw provides everything you need to build, deploy, and manage 
            AI agents that transform how you work with technology.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr mb-24">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Use Cases Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-heading font-bold text-2xl sm:text-3xl text-white text-center mb-12"
          >
            Perfect For
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-2xl p-6 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${useCase.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 text-${useCase.color}`} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">{useCase.title}</h4>
                  <p className="text-sm text-white/60">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
