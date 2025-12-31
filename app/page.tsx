import HeroHome from "./components/Home/Hero";
import LogoBillboard from "./components/Home/LogoBillboard";
import StatsSection from "./components/Home/StatsSection";
import BenefitsGrid from "./components/Home/BenefitsGrid";
import Integrations from "./components/Home/Integrations";
import SecurityCompliance from "./components/Home/SecurityCompliance";
import SocialProof from "./components/Home/SocialProof";
import ComparisonSection from "./components/Home/ComparisonSection";
import Historic from "./components/Home/Historic";
import FinalCta from "./components/Home/FinalCta";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroHome />
        <LogoBillboard />
        <BenefitsGrid />
        <Integrations />
        <SecurityCompliance />
        <SocialProof />
        <ComparisonSection />
        <Historic />
        <FinalCta />
      </main>
    </div>
  );
}
