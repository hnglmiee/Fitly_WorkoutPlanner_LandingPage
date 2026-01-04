import { Dumbbell, BarChart3, Calendar, Zap, Target, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Features = () => {
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

  const features = [
    {
      icon: Dumbbell,
      title: "Workout Plans",
      description:
        "Personalized workout routines designed by professional trainers to match your fitness level and goals.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Visualize your fitness journey with detailed analytics, charts, and milestone tracking.",
    },
    {
      icon: Calendar,
      title: "Workout Schedules",
      description:
        "Smart scheduling system that adapts to your lifestyle and keeps you consistent with your training.",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description:
        "Set personalized fitness goals and receive guidance to achieve them step by step.",
    },
    {
      icon: Trophy,
      title: "Achievements",
      description:
        "Earn badges and rewards as you complete workouts and hit your fitness milestones.",
    },
    {
      icon: Zap,
      title: "Quick Workouts",
      description:
        "Short on time? Access 15-30 minute high-intensity workouts for maximum results.",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="text-gradient">Achieve Your Goals</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed to make your fitness journey effective, enjoyable, and sustainable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
