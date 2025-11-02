import { Key, Lock, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ArchitectureOverview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It All Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A hybrid approach combining the best of classical and quantum-resistant cryptography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Password Derivation */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-smooth group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Key className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Password Derivation</h3>
                <p className="text-muted-foreground mb-4">
                  Your master password is transformed using PBKDF2 (Password-Based Key Derivation Function 2) with 100,000+ iterations.
                </p>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <code className="text-sm text-primary">
                    key = PBKDF2(password, salt, iterations)
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  ✓ Password never stored on server
                  <br />
                  ✓ Resistant to brute-force attacks
                </p>
              </div>
            </div>
          </Card>

          {/* Kyber KEM */}
          <Card className="p-8 bg-card border-border hover:border-accent/50 transition-smooth group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Kyber KEM</h3>
                <p className="text-muted-foreground mb-4">
                  Quantum-resistant key encapsulation mechanism. Even quantum computers can't break this mathematical problem.
                </p>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <code className="text-sm text-accent">
                    (publicKey, privateKey) = Kyber.KeyGen()
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  ✓ Post-quantum secure
                  <br />
                  ✓ NIST standardized
                </p>
              </div>
            </div>
          </Card>

          {/* AES Encryption */}
          <Card className="p-8 bg-card border-border hover:border-success/50 transition-smooth group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-success/10 group-hover:bg-success/20 transition-smooth">
                <Lock className="w-8 h-8 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">AES Encryption</h3>
                <p className="text-muted-foreground mb-4">
                  Your actual message is encrypted with AES-256, using a session key secured by Kyber.
                </p>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <code className="text-sm text-success">
                    ciphertext = AES-256(message, sessionKey)
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  ✓ Fast & efficient
                  <br />
                  ✓ Battle-tested security
                </p>
              </div>
            </div>
          </Card>

          {/* Hybrid Approach */}
          <Card className="p-8 bg-card border-border hover:border-warning/50 transition-smooth group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-warning/10 group-hover:bg-warning/20 transition-smooth">
                <Zap className="w-8 h-8 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Hybrid Power</h3>
                <p className="text-muted-foreground mb-4">
                  Kyber protects the key exchange, AES encrypts the message. Best of both worlds.
                </p>
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <code className="text-sm text-warning">
                    encryptedKey = Kyber.Encapsulate(publicKey)
                    <br />
                    encryptedMsg = AES(message, key)
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  ✓ Quantum-safe key exchange
                  <br />
                  ✓ Lightning-fast encryption
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
