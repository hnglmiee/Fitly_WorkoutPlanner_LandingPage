import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Fitness Enthusiast",
      image: "A",
      rating: 5,
      text: "FitPulse completely transformed my workout routine. The personalized plans and progress tracking keep me motivated every single day.",
    },
    {
      name: "Sarah Kim",
      role: "Busy Professional",
      image: "S",
      rating: 5,
      text: "As someone with a hectic schedule, the quick workouts and smart scheduling features are a game-changer. Best fitness app I've ever used!",
    },
    {
      name: "Marcus Johnson",
      role: "Amateur Athlete",
      image: "M",
      rating: 5,
      text: "The workout variety and professional guidance have helped me achieve goals I never thought possible. Highly recommend!",
    },
    {
      name: "Emily Chen",
      role: "Yoga Instructor",
      image: "E",
      rating: 5,
      text: "I love how FitPulse integrates different training styles. It's perfect for anyone looking to diversify their fitness journey.",
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
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community of fitness enthusiasts who have transformed their lives with FitPulse.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
