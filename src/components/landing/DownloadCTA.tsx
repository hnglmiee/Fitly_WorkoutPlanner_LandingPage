import { useEffect, useRef, useState } from "react";
import { Apple, Play, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary mb-8 glow-strong">
            <Smartphone className="w-10 h-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your
            <br />
            <span className="text-gradient">Fitness Journey?</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Download FitPulse now and get access to personalized workout plans, 
            progress tracking, and a supportive community. Free to start!
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-6 py-6 w-full sm:w-auto"
            >
              <Apple className="mr-3 w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </Button>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-6 py-6 w-full sm:w-auto"
            >
              <Play className="mr-3 w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Email Signup */}
          {/* <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Or get the download link sent to your email
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow px-6 py-3">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div> */}

          {/* Trust Badges */}
          {/* <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary font-bold">4.9</span>
              <span>★</span>
              <span className="text-sm">App Store</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary font-bold">500K+</span>
              <span className="text-sm">Downloads</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary font-bold">Free</span>
              <span className="text-sm">To Start</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
