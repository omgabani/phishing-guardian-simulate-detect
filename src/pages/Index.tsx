
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PhishingStats from "../components/PhishingStats";
import FeatureSection from "../components/FeatureSection";
import SimulatorPreview from "../components/SimulatorPreview";
import ToolsSection from "../components/ToolsSection";
import CTASection from "../components/CTASection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PhishingStats />
        <FeatureSection />
        <SimulatorPreview />
        <ToolsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
