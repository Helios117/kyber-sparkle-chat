import { Shield, Lock, Eye, Server } from "lucide-react";

export const SecurityBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Quantum-Resistant",
      description: "Kyber algorithm protects against future quantum computer attacks",
      color: "accent",
    },
    {
      icon: Lock,
      title: "Zero-Knowledge",
      description: "Your master password never leaves your device or touches our servers",
      color: "primary",
    },
    {
      icon: Eye,
      title: "End-to-End Encrypted",
      description: "Only you and your recipient can read the messages",
      color: "success",
    },
    {
      icon: Server,
      title: "Perfect Forward Secrecy",
      description: "Each session uses unique keys, so past communications stay secure",
      color: "warning",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why This Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple layers of security working together to protect your privacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const iconBgClass = 
              benefit.color === "accent" ? "p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-smooth" :
              benefit.color === "primary" ? "p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth" :
              benefit.color === "success" ? "p-4 rounded-xl bg-success/10 group-hover:bg-success/20 transition-smooth" :
              "p-4 rounded-xl bg-warning/10 group-hover:bg-warning/20 transition-smooth";
            
            const iconColorClass =
              benefit.color === "accent" ? "w-8 h-8 text-accent" :
              benefit.color === "primary" ? "w-8 h-8 text-primary" :
              benefit.color === "success" ? "w-8 h-8 text-success" :
              "w-8 h-8 text-warning";
            
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className={iconBgClass}>
                    <Icon className={iconColorClass} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual comparison */}
        <div className="mt-16 p-8 rounded-2xl bg-card/50 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Traditional vs. Post-Quantum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-lg font-semibold text-destructive">Traditional Encryption</div>
              <ul className="space-y-2 text-muted-foreground">
                <li>✗ Vulnerable to quantum attacks</li>
                <li>✗ RSA/ECC will be broken</li>
                <li>✗ "Store now, decrypt later" threat</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-semibold text-success">Post-Quantum Security</div>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Safe against quantum computers</li>
                <li>✓ NIST-standardized algorithms</li>
                <li>✓ Future-proof protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
