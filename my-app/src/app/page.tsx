import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesHorizontal from "@/components/FeaturesHorizontal";
import CommandCenter from "@/components/CommandCenter";
import InstallationTimeline from "@/components/InstallationTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void-950 overflow-x-hidden">
      {/* Background Video Layer - Preserved */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-void-950/40" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero - Massive 3D Typography */}
      <Hero />

      {/* Horizontal Scroll Features */}
      <FeaturesHorizontal />

      {/* Command Center - Floating Orbs */}
      <CommandCenter />

      {/* Installation Timeline */}
      <InstallationTimeline />

      {/* Footer with Massive Typography */}
      <Footer />
    </main>
  );
}
