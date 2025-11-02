import { Hero } from "@/components/Hero";
import { ArchitectureOverview } from "@/components/ArchitectureOverview";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { SecurityBenefits } from "@/components/SecurityBenefits";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ArchitectureOverview />
      <InteractiveDemo />
      <SecurityBenefits />
    </main>
  );
};

export default Index;
