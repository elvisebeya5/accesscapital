import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, TrendingUp, Users, MapPin } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about-section" className="container py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">
          Your Trusted Partner in Mortgage Investments
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
          ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY is a leading private mortgage investment firm based in Oakville,
          Ontario. Since our inception, we have specialized in providing investors with secure, high-yield mortgage
          investment opportunities backed by carefully selected real estate assets. Our experienced team combines
          rigorous due diligence with a disciplined investment approach to deliver consistent returns while prioritizing
          capital preservation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 md:gap-4">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Proven Track Record</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Years of expertise in mortgage lending and investment management
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 md:gap-4">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Security-First Approach</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  All investments are secured by high-quality real estate assets
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 md:gap-4">
              <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Attractive Returns</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Competitive interest rates (typically 8-12% annually)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 md:gap-4">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Transparency</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Regular reporting and clear communication with investors
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 md:gap-4">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Local Expertise</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Deep knowledge of Ontario's real estate markets
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center justify-center">
          <Button size="lg" className="w-full md:w-auto" asChild>
            <a href="/about">Learn More About Us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

