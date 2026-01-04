import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <img
                src="/running.png"
                alt="Fitly icon"
                className="w-6 h-6"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Fitly</span>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-2xl">
            Your ultimate fitness companion. Transform your body and achieve your goals with personalized workouts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;