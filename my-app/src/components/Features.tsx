"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  Lock,
  Gauge,
  Layers,
  RefreshCw,
  Terminal,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Neural Processing",
    description:
      "State-of-the-art neural networks that understand context and intent, not just keywords.",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II compliant with end-to-end encryption and zero-knowledge architecture.",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Gauge,
    title: "Real-Time Inference",
    description:
      "Sub-100ms response times with edge-deployed models for instant results anywhere.",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Layers,
    title: "Multi-Modal Agents",
    description:
      "Agents that see, hear, read, and understand across text, images, audio, and video.",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description:
      "Models that improve automatically with feedback loops and reinforcement learning.",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    icon: Terminal,
    title: "Developer First",
    description:
      "RESTful APIs, SDKs in every language, and comprehensive documentation for rapid integration.",
    gradient: "from-neon-cyan to-neon-green",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

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
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Icon = feature.icon;
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="relative glass-card rounded-3xl p-8 h-full overflow-hidden transition-all duration-500">
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${
              isHovered ? `${parseFloat(glowX.get() as unknown as string) * 100}%` : "50%"
            } ${
              isHovered ? `${parseFloat(glowY.get() as unknown as string) * 100}%` : "50%"
            }, rgba(59, 130, 246, 0.1), transparent 40%)`,
          }}
        />

        {/* Content with 3D depth */}
        <div
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-300`}
            style={{ transform: "translateZ(75px)" }}
          >
            <div className="w-full h-full rounded-2xl bg-void-950 flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-heading font-bold text-xl text-white mb-3 group-hover:text-gradient transition-all duration-300"
            style={{ transform: "translateZ(60px)" }}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 leading-relaxed" style={{ transform: "translateZ(40px)" }}>
            {feature.description}
          </p>

          {/* Decorative corner */}
          <div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, transparent 50%, rgba(59, 130, 246, 0.1) 100%)`,
              transform: "translateZ(30px)",
            }}
          />
        </div>

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), rgba(34, 211, 238, 0.3))`,
            padding: "1px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 mb-6 rounded-full glass text-sm font-medium text-neon-blue"
          >
            Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          >
            Built for{" "}
            <span className="text-gradient">Performance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Every feature designed with one goal: make AI work seamlessly at
            scale.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#footer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <span className="text-white/80 group-hover:text-white transition-colors">
              Explore all features
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-neon-cyan"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
