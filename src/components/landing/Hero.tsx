import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToDownload = () => {
    const element = document.querySelector("#download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Your Workout Companion
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100">
            Transform Your Body,
            <br />
            <span className="text-gradient">Unleash Your Power</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Your personal gym companion with smart workout plans, progress tracking, 
            and customized schedules. Start your fitness journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button
              size="lg"
              onClick={scrollToDownload}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-semibold px-8 py-6 text-lg group"
            >
              Download Free
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="mt-16 pt-16 border-t border-border animate-fade-up delay-400">
            <h3 className="text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-wider">
              Built With Modern Tech Stack
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-12 px-6">
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">React.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Flutter</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Spring Boot</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">MySQL</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Docker</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Postman</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://raw.githubusercontent.com/PaddlePaddle/PaddleOCR/release/2.6/doc/PaddleOCR_log.png" alt="PaddleOCR" className="w-12 h-12 object-contain" />
                    <span className="text-sm text-muted-foreground">PaddleOCR</span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 px-6">
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">React.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Flutter</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Spring Boot</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">MySQL</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Docker</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" className="w-12 h-12" />
                    <span className="text-sm text-muted-foreground">Postman</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 min-w-[120px]">
                    <img src="https://raw.githubusercontent.com/PaddlePaddle/PaddleOCR/release/2.6/doc/PaddleOCR_log.png" alt="PaddleOCR" className="w-12 h-12 object-contain" />
                    <span className="text-sm text-muted-foreground">PaddleOCR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
