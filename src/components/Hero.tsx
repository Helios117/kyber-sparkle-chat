import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_100%_50%/0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Post-Quantum Security</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Secure Chat with
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Quantum-Resistant Encryption
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Visualize how your messages stay secure using cutting-edge cryptography that even quantum computers can't break
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToDemo}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-smooth text-lg px-8 py-6"
            >
              See How It Works
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-foreground text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">PBKDF2</div>
              <p className="text-sm text-muted-foreground">
                Your password never leaves your device
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">Kyber</div>
              <p className="text-sm text-muted-foreground">
                Quantum-resistant key exchange
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-3xl font-bold text-success mb-2">AES</div>
              <p className="text-sm text-muted-foreground">
                Industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
