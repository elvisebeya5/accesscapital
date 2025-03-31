import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Shield, TrendingUp, MapPin } from "lucide-react"
// import { Logo } from "@/components/ui/logo"

export const metadata: Metadata = {
  title: "About Us | ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY",
  description: "Learn about ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY, your trusted partner in mortgage investments.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12">
        <div className="text-center">
          <div className="mx-auto mb-8">
            {/* <Logo /> */}
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">About ACCESS CAPITAL</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Trusted Partner in Mortgage Investments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY is a leading private mortgage investment firm based in
              Oakville, Ontario. Since our inception, we have specialized in providing investors with secure, high-yield
              mortgage investment opportunities backed by carefully selected real estate assets.
            </p>
            <p className="text-lg investment opportunities opportunitiesvestment opportunities opportunities-6">
              Our experienced team combines rigorous due diligence with a disciplined investment approach to deliver
              consistent returns while prioritizing capital preservation.
            </p>
            {/* <Button size="lg" className="mt-4">
              Learn About Our Investment Approach
            </Button> */}
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/Investment.jpeg"
              alt="Investment coined plants"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="bg-muted rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose ACCESS CAPITAL?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                    <p>Years of expertise in mortgage lending and investment management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Security-First Approach</h3>
                    <p>All investments are secured by high-quality real estate assets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Attractive Returns</h3>
                    <p>Competitive interest rates (typically 8-12% annually)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p>Regular reporting and clear communication with investors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                    <p>Deep knowledge of Ontario's real estate markets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Cutting-Edge Mortgage Investment Platform</h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            We leverage best-in-class investment technology to deliver superior mortgage investment opportunities. Our
            proprietary systems combine institutional-grade analytics with investor-friendly interfaces, giving you the
            perfect balance of sophistication and simplicity.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">How Our Technology Benefits You:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">AI-Powered Underwriting</span> – Advanced algorithms assess risk
                      with bank-level precision
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Real-Time Portfolio Monitoring</span> – Track your investments
                      24/7 through our secure portal
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Automated Diversification Tools</span> – Smart allocation across
                      property types and regions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Predictive Analytics</span> – Machine learning models optimize
                      returns while managing risk
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Seamless Document Management</span> – All your investment records
                      in one secure, digital vault
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="relative h-[250px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0009.jpg-RN5PwU3lkzU3gyg0C7uKrx1WbKeHso.jpeg"
                    alt="Technology platform with financial data"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "Our platform processes over 5,000 data points per mortgage to ensure optimal investment quality."
                </blockquote>
                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Why Our Technology Matters:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">
                        →
                      </div>
                      <span>
                        <span className="font-medium">Better Vetting</span> – More data means smarter investments
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">
                        →
                      </div>
                      <span>
                        <span className="font-medium">Fewer Surprises</span> – Proactive monitoring catches issues early
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">
                        →
                      </div>
                      <span>
                        <span className="font-medium">Easier Management</span> – Everything organized in one place
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">
                        →
                      </div>
                      <span>
                        <span className="font-medium">Stronger Returns</span> – Data-driven optimization maximizes
                        yields
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

