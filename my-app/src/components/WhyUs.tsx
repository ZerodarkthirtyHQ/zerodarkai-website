"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Zap, Check, X, Brain, Rocket } from "lucide-react";

const comparisonData = [
  {
    oldWay: { icon: Clock, text: "Weeks of manual work", subtext: "Slow, error-prone processes" },
    aiWay: { icon: Zap, text: "Hours of automated execution", subtext: "Lightning-fast with 99.9% accuracy" },
  },
  {
    oldWay: { icon: Users, text: "Large teams needed", subtext: "Expensive overhead costs" },
    aiWay: { icon: Brain, text: "Autonomous AI agents", subtext: "Work 24/7 without breaks" },
  },
  {
    oldWay: { icon: X, text: "Inconsistent results", subtext: "Human error and variability" },
    aiWay: { icon: Check, text: "Predictable excellence", subtext: "Standardized quality every time" },
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "AI-First Architecture",
    description:
      "Built from the ground up with AI at the core. Not bolted-on, but engineered in.",
  },
  {
    icon: Brain,
    title: "Self-Improving Systems",
    description:
      "Our agents learn from every interaction, continuously optimizing performance.",
  },
  {
    icon: Zap,
    title: "Instant Scale",
    description:
      "Deploy thousands of agents in seconds. Handle any workload without breaking a sweat.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 mb-6 rounded-full glass text-sm font-medium text-neon-purple"
          >
            Why Zero Dark AI
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            The{" "}
            <span className="text-gradient">AI-First</span>{" "}
            Advantage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
          >
            See how AI-native systems outperform traditional approaches at
            every level.
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-8 border-red-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white/80">
                Traditional Approach
              </h3>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item, index) => {
                const Icon = item.oldWay.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white/70 font-medium">{item.oldWay.text}</p>
                      <p className="text-sm text-white/40 mt-1">
                        {item.oldWay.subtext}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* AI Way */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-cyan/10" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  AI-Native Approach
                </h3>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => {
                  const Icon = item.aiWay.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.05]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.aiWay.text}</p>
                        <p className="text-sm text-white/60 mt-1">
                          {item.aiWay.subtext}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-neon-cyan" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-white/60">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
