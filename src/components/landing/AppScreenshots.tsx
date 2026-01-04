import { useEffect, useRef, useState } from "react";
import { Smartphone, Zap, TrendingUp, Calendar } from "lucide-react";

const AppScreenshots = () => {
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

  const screenshots = [
    {
      title: "Workout Dashboard",
      description: "Track your progress with intuitive charts and statistics",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?w=400&h=800&fit=crop",
      scale: 0.7,
    },
    {
      title: "Exercise Library",
      description: "Access hundreds of exercises with detailed instructions",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop",
      scale: 0.85,
    },
    {
      title: "Schedule Planner",
      description: "Plan your workouts with our smart scheduling system",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=800&fit=crop",
      scale: 1.05,
    },
    {
      title: "Nutrition Tracker",
      description: "Monitor your daily nutrition and calorie intake",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=800&fit=crop",
      scale: 0.85,
    },
    {
      title: "Personal Records",
      description: "Celebrate your achievements and set new goals",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=800&fit=crop",
      scale: 0.7,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            <Smartphone className="w-4 h-4" />
            App Preview
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience the <span className="text-gradient">Power</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the features that make FitPulse your ultimate fitness companion.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="flex items-end justify-center gap-3 md:gap-4 max-w-6xl mx-auto px-4">
          {screenshots.map((screenshot, index) => {
            const Icon = screenshot.icon;
            const isCenter = index === 2;
            return (
              <div
                key={screenshot.title}
                className={`group relative flex-shrink-0 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: `scale(${screenshot.scale})`,
                  transformOrigin: 'bottom center',
                  zIndex: isCenter ? 10 : 5 - Math.abs(index - 2)
                }}
              >
                {/* Phone Frame */}
                <div className="relative mx-auto" style={{ width: '180px' }}>
                  {/* Phone Border/Frame */}
                  <div className="relative rounded-[1.8rem] border-[8px] border-gray-800 bg-gray-800 shadow-xl overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                    {/* Notch */}
                    <div className="absolute top-0 inset-x-0 h-3 bg-gray-800 z-10 flex justify-center">
                      <div className="w-20 h-3 bg-gray-800 rounded-b-xl"></div>
                    </div>
                    
                    {/* Screenshot */}
                    <div className="relative bg-white overflow-hidden" style={{ height: '380px' }}>
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Floating Feature Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%]">
                    <div className="bg-card border border-border rounded-lg p-1.5 shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground text-[9px] leading-tight">
                            {screenshot.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Description */}
        <div className="mt-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Track Your Progress</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Monitor your fitness journey with detailed analytics, charts, and statistics. Visualize your improvements over time and stay motivated with clear progress indicators.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Extensive Exercise Library</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Access hundreds of professionally designed exercises with step-by-step instructions, video demonstrations, and proper form guidance for maximum results.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Smart Scheduling</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plan your workouts intelligently with our adaptive scheduling system. Get personalized workout plans that fit your lifestyle and adjust to your progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;