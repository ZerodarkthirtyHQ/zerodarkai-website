"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Bot, Terminal, Workflow, Code2, Shield, Cloud } from "lucide-react";

const features = [
  {
    title: "AUTONOMOUS",
    subtitle: "AI Agents",
    description: "Deploy specialized AI agents that work independently to automate your workflows and tasks. No coding required.",
    icon: Bot,
    color: "cyan",
    stat: "50K+",
    statLabel: "Active Agents",
  },
  {
    title: "DUAL INTERFACE",
    subtitle: "CLI & Web UI",
    description: "Command-line tools for developers and intuitive web interface for visual management. Best of both worlds.",
    icon: Terminal,
    color: "purple",
    stat: "125K+",
    statLabel: "Workflows Created",
  },
  {
    title: "CHAINED",
    subtitle: "Workflow Automation",
    description: "Chain multiple agents together to create complex, multi-step automation workflows that run 24/7.",
    icon: Workflow,
    color: "acid",
    stat: "2M+",
    statLabel: "Hours Automated",
  },
  {
    title: "ZERO CODE",
    subtitle: "No-Code Deployment",
    description: "Launch AI agents without writing code. Use templates or build custom agents visually in minutes.",
    icon: Code2,
    color: "cyan",
    stat: "15K+",
    statLabel: "GitHub Stars",
  },
  {
    title: "SECURE",
    subtitle: "Enterprise Security",
    description: "Built-in security features, authentication, and privacy controls for safe AI deployment.",
    icon: Shield,
    color: "purple",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    title: "FLEXIBLE",
    subtitle: "Local & Cloud Ready",
    description: "Run on your local machine, deploy to cloud, or hybrid configurations for maximum flexibility.",
    icon: Cloud,
    color: "acid",
    stat: "∞",
    statLabel: "Possibilities",
  },
];

export default function FeaturesHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-block px-4 py-2 mb-4 rounded-full glass text-xs font-mono text-cyan tracking-wider">
              CAPABILITIES
            </span>
            <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
              POWERFUL
              <br />
              <span className="text-gradient">FEATURES</span>
            </h2>
          </div>
          
          <p className="text-white/50 max-w-md text-lg">
            Scroll to explore the capabilities that make OpenClaw the choice for makers and enthusiasts.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative h-[80vh]">
        <motion.div
          style={{ x: smoothX }}
          className="absolute top-0 left-0 h-full flex items-center gap-8 px-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] h-[60vh]"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between group cursor-pointer"
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Background Gradient */}
                  <div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Large Number */}
                  <div className="absolute top-8 right-8 font-heading font-black text-[12rem] leading-none text-white/[0.02] select-none">
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 text-${feature.color}`} />
                    </div>
                    
                    <div className="font-mono text-xs text-white/40 mb-2 tracking-widest">
                      {feature.title}
                    </div>
                    
                    <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 group-hover:text-gradient transition-all">
                      {feature.subtitle}
                    </h3>
                    
                    <p className="text-white/60 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Stat */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <div className={`font-heading font-black text-5xl text-${feature.color} glow-text`}>
                        {feature.stat}
                      </div>
                      <div className="text-sm text-white/40 mt-1">{feature.statLabel}</div>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan/50 transition-colors">
                      <span className="text-2xl text-white/20 group-hover:text-cyan transition-colors">→</span>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2))`,
                      padding: "1px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
          
          {/* End Spacer */}
          <div className="flex-shrink-0 w-[20vw]" />
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="h-full bg-gradient-to-r from-cyan via-purple to-acid"
          />
        </div>
      </div>
    </section>
  );
}
