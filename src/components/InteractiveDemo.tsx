import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Lock, Key, Shield, Mail } from "lucide-react";

export const InteractiveDemo = () => {
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const steps = [
    {
      title: "Enter Master Password",
      description: "Your password is used to derive encryption keys locally",
      icon: Key,
      color: "primary",
    },
    {
      title: "PBKDF2 Key Derivation",
      description: "Converting password to cryptographic key (100,000 iterations)",
      icon: Lock,
      color: "primary",
    },
    {
      title: "Kyber Key Exchange",
      description: "Generating quantum-resistant key pair",
      icon: Shield,
      color: "accent",
    },
    {
      title: "AES Encryption",
      description: "Encrypting your message with the session key",
      icon: Mail,
      color: "success",
    },
    {
      title: "Secure Transmission",
      description: "Your encrypted message is ready to send!",
      icon: Check,
      color: "success",
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setPassword("");
    setMessage("");
  };

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  return (
    <section id="demo" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try It Yourself
          </h2>
          <p className="text-xl text-muted-foreground">
            See the encryption process in action
          </p>
        </div>

        <Card className="p-8 bg-card border-border">
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((s, i) => {
              const isActive = i <= step;
              const isPast = i < step;
              
              let dotClasses = "w-10 h-10 rounded-full flex items-center justify-center transition-smooth ";
              let lineClasses = "w-12 h-1 mx-2 transition-smooth ";
              
              if (isActive) {
                if (s.color === "primary") {
                  dotClasses += "bg-primary text-primary-foreground glow-primary";
                  lineClasses += "bg-primary";
                } else if (s.color === "accent") {
                  dotClasses += "bg-accent text-accent-foreground glow-accent";
                  lineClasses += "bg-accent";
                } else if (s.color === "success") {
                  dotClasses += "bg-success text-success-foreground";
                  lineClasses += "bg-success";
                }
              } else {
                dotClasses += "bg-muted text-muted-foreground";
                lineClasses += "bg-muted";
              }
              
              return (
                <div key={i} className="flex items-center">
                  <div className={dotClasses}>
                    {isPast ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-bold">{i + 1}</span>
                    )}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={lineClasses} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Current step content */}
          <div className="min-h-[300px] flex flex-col items-center justify-center text-center space-y-6">
            <div className={
              currentStep.color === "primary" ? "p-6 rounded-2xl bg-primary/10 glow-primary" :
              currentStep.color === "accent" ? "p-6 rounded-2xl bg-accent/10 glow-accent" :
              "p-6 rounded-2xl bg-success/10"
            }>
              <Icon className={
                currentStep.color === "primary" ? "w-16 h-16 text-primary" :
                currentStep.color === "accent" ? "w-16 h-16 text-accent" :
                "w-16 h-16 text-success"
              } />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">{currentStep.title}</h3>
              <p className="text-muted-foreground">{currentStep.description}</p>
            </div>

            {/* Step-specific inputs */}
            {step === 0 && (
              <div className="w-full max-w-md space-y-4">
                <Input
                  type="password"
                  placeholder="Enter your master password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background border-border"
                />
                <Input
                  type="text"
                  placeholder="Enter message to encrypt"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background border-border"
                />
              </div>
            )}

            {step === 1 && (
              <div className="w-full max-w-md p-4 rounded-lg bg-background/50 border border-border font-mono text-sm">
                <div className="text-primary">Deriving key...</div>
                <div className="text-muted-foreground mt-2">
                  Salt: a2f9e8b7c6d5...
                  <br />
                  Iterations: 100,000
                  <br />
                  Derived Key: {password.length > 0 ? "3d8f9a2b1c4e..." : "waiting..."}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="w-full max-w-md space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-accent/30 font-mono text-sm">
                  <div className="text-accent">Public Key:</div>
                  <div className="text-muted-foreground break-all">
                    9f4e2d1a8b7c6e5d...
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-accent/30 font-mono text-sm">
                  <div className="text-accent">Private Key (kept secret):</div>
                  <div className="text-muted-foreground">••••••••••••••••</div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="w-full max-w-md p-4 rounded-lg bg-background/50 border border-success/30 font-mono text-sm">
                <div className="text-success">Original Message:</div>
                <div className="text-muted-foreground mb-3">
                  {message || "Your secret message"}
                </div>
                <div className="text-success">Encrypted Message:</div>
                <div className="text-muted-foreground break-all">
                  U2FsdGVkX1+vupppZksvRf5pq5g5XjFRIipRkwB0K1Y=
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div className="text-6xl">🎉</div>
                <div className="space-y-2">
                  <p className="text-success font-bold">Message encrypted successfully!</p>
                  <p className="text-sm text-muted-foreground">
                    Your message is now secure and ready to be transmitted
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-8">
            {step > 0 && step < steps.length - 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex-1 border-border"
              >
                Previous
              </Button>
            )}
            {step < steps.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={step === 0 && (!password || !message)}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Next Step
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleReset}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Over
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
