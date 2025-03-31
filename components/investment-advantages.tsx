import { CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import AnimatedCard from "@/components/animated-card"

export default function InvestmentAdvantages() {
  return (
    <section className="container py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">Investment Advantages</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Our technology-powered platform provides significant advantages for investors seeking secure, high-yield
          returns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0011.jpg-gkUB8owWrErxoSppRGmkievd2KTkw9.jpeg"
            alt="House model surrounded by coins representing real estate investment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-4 md:space-y-6">
          <AnimatedCard delay={0.1}>
            <CardContent className="pt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Smarter Investment Decisions</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">
                    Proprietary scoring system grades every opportunity (A+ through D)
                  </span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Automated valuation models verify all property values</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Dynamic LTV adjustments based on market conditions</span>
                </li>
              </ul>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <CardContent className="pt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Unparalleled Transparency</h3>
              <p className="mb-2 md:mb-3 text-sm md:text-base">Interactive dashboards show:</p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Exact property locations with street-view integration</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Live payment performance metrics</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">Historical return comparisons</span>
                </li>
              </ul>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <AnimatedCard delay={0.3}>
          <CardContent className="pt-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Institutional-Grade Risk Management</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">
                  Early warning system flags potential issues 60-90 days before traditional methods
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Automated insurance compliance tracking</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Built-in stress testing for all portfolios</span>
              </li>
            </ul>
          </CardContent>
        </AnimatedCard>
        <AnimatedCard delay={0.4}>
          <CardContent className="pt-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Investor-First Experience</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Mobile-friendly interface</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">One-click reporting</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Customizable alert system</span>
              </li>
            </ul>
          </CardContent>
        </AnimatedCard>
      </div>

      <div className="mt-8 md:mt-12 bg-muted p-4 md:p-8 rounded-xl">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">Why Our Technology Matters</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">Better Vetting</div>
            <p className="text-xs md:text-sm text-muted-foreground">More data means smarter investments</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">Fewer Surprises</div>
            <p className="text-xs md:text-sm text-muted-foreground">Proactive monitoring catches issues early</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">Easier Management</div>
            <p className="text-xs md:text-sm text-muted-foreground">Everything organized in one place</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-primary font-bold text-base md:text-lg mb-1 md:mb-2">Stronger Returns</div>
            <p className="text-xs md:text-sm text-muted-foreground">Data-driven optimization maximizes yields</p>
          </div>
        </div>
      </div>
    </section>
  )
}

