import { Card, CardContent } from "@/components/ui/card"
import { Brain, BarChart, Shield, Activity } from "lucide-react"
import Image from "next/image"

export default function TechnologySection() {
  return (
    <section className="container py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">
          Cutting-Edge Mortgage Investment Platform
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
          We leverage best-in-class investment technology to deliver superior mortgage investment opportunities. Our
          proprietary systems combine institutional-grade analytics with investor-friendly interfaces, giving you the
          perfect balance of sophistication and simplicity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0009.jpg-RN5PwU3lkzU3gyg0C7uKrx1WbKeHso.jpeg"
            alt="Financial advisors analyzing mortgage data on screens"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-4 md:space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI-Powered Underwriting
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                Our advanced algorithms assess risk with bank-level precision, analyzing over 5,000 data points per
                mortgage to ensure optimal investment quality.
              </p>
              <div className="bg-muted p-3 md:p-4 rounded-lg">
                <div className="text-xs md:text-sm font-medium mb-2">Key Features:</div>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Proprietary scoring system grades every opportunity (A+ through D)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Automated valuation models verify all property values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Dynamic LTV adjustments based on market conditions</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Real-Time Portfolio Monitoring
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Track your investments 24/7 through our secure portal with interactive dashboards showing exact property
              locations, live payment performance metrics, and historical return comparisons.
            </p>
            <div className="bg-muted p-3 md:p-4 rounded-lg">
              <div className="text-xs md:text-sm font-medium mb-2">Key Features:</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Street-view integration of property locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Live payment performance metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Historical return comparisons</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Institutional-Grade Risk Management
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Our early warning system flags potential issues 60-90 days before traditional methods, with automated
              insurance compliance tracking and built-in stress testing for all portfolios.
            </p>
            <div className="bg-muted p-3 md:p-4 rounded-lg">
              <div className="text-xs md:text-sm font-medium mb-2">Key Features:</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Predictive analytics for early risk detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Automated insurance compliance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Built-in stress testing for all portfolios</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Investor-First Experience
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Our mobile-friendly interface with one-click reporting and customizable alert system makes managing your
              investments simple and convenient.
            </p>
            <div className="bg-muted p-3 md:p-4 rounded-lg">
              <div className="text-xs md:text-sm font-medium mb-2">Key Features:</div>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Mobile-friendly responsive interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>One-click reporting and document generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 text-primary rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>Customizable alert system for important updates</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <div className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0010.jpg-TLPW6D8qT26dGkjkvCqUzZl7Zh7iJK.jpeg"
            alt="Couple reviewing mortgage investment options online"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

