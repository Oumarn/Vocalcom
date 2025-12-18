import HeroHome from "./components/Home/Hero";
import CustomerLogo from "./components/Home/CustomerLogo";
import SocialProof from "./components/Home/SocialProof";
import BenefitsGrid from "./components/Home/BenefitsGrid";
import FinalCta from "./components/Home/FinalCta";
import Historic from "./components/Home/Historic";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroHome />
        <CustomerLogo />
        <SocialProof />
        <Historic />
        <BenefitsGrid />
        <FinalCta />
      </main>
    </div>
  );
}
