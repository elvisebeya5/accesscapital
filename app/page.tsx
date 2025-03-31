import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import TechnologySection from "@/components/technology-section"
import InvestmentAdvantages from "@/components/investment-advantages"
import MicExplainer from "@/components/mic-explainer"
import InvestmentOpportunities from "@/components/investment-opportunities"
import Testimonials from "@/components/testimonials"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <AboutSection />
      <TechnologySection />
      <InvestmentAdvantages />
      <MicExplainer />
      <InvestmentOpportunities />
      <Testimonials />
      <CtaSection />
    </div>
  )
}

