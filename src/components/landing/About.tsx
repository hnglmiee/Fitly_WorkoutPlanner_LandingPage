import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
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

  const benefits = [
    "Personalized training programs",
    "Expert guidance from certified trainers",
    "Community support & motivation",
    "Science-backed workout methods",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              We're on a Mission to Make
              <span className="text-gradient"> Fitness Accessible</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Fitly was founded with a simple belief: everyone deserves access to 
              professional-grade fitness guidance. Our team of certified trainers and 
              tech experts have created an app that brings the gym experience to your 
              fingertips, anytime, anywhere.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Stats Row */}
            <div className="flex gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-foreground">F</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Fitly</h3>
                    <p className="text-muted-foreground">Your Fitness Journey Starts Here</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center animate-float">
                <span className="text-2xl font-bold text-primary">💪</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-xl font-bold text-primary">🏋️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
