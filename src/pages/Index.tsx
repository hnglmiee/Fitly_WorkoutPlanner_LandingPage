import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/AppScreenshots";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";
import AppScreenshots from "@/components/landing/AppScreenshots";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <AppScreenshots />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
