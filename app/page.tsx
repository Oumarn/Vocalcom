import HeroHome from "./components/Home/Hero";
import CustomerLogo from "./components/Home/CustomerLogo";
import StatsSection from "./components/Home/StatsSection";
import BenefitsGrid from "./components/Home/BenefitsGrid";
import SocialProof from "./components/Home/SocialProof";
import ComparisonSection from "./components/Home/ComparisonSection";
import Historic from "./components/Home/Historic";
import FinalCta from "./components/Home/FinalCta";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroHome />
        <CustomerLogo />
        <StatsSection />
        <BenefitsGrid />
        <SocialProof />
        <ComparisonSection />
        <Historic />
        <FinalCta />
      </main>
    </div>
  );
}
