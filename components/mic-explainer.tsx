"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MicExplainer() {
  const isMobile = useIsMobile()

  return (
    <section className="container py-8 md:py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
          Understanding Mortgage Investment Corporations (MICs)
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
          A Smart Way to Invest in Real Estate – Without the Hassle
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">What is a Mortgage Investment Corporation (MIC)?</h3>
            <p className="text-sm md:text-base">
              A Mortgage Investment Corporation (MIC) is a unique Canadian investment vehicle that allows individuals to
              pool their capital to invest in a diversified portfolio of mortgages. MICs provide a professionally
              managed, secure way to earn consistent returns backed by real estate assets without the challenges of
              direct property ownership.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">How Does a MIC Work?</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-base">Investors Contribute Capital</h4>
                  <p className="text-sm text-muted-foreground">
                    Individuals invest in the MIC by purchasing shares. Funds are pooled to create a mortgage lending
                    portfolio.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-base">Professional Mortgage Lending</h4>
                  <p className="text-sm text-muted-foreground">
                    The MIC issues loans to qualified borrowers (residential, commercial, or construction). Strict
                    underwriting ensures loans are secured by real estate.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-base">Earn Regular Income</h4>
                  <p className="text-sm text-muted-foreground">
                    Interest from mortgages is collected and distributed to investors as dividends. By law, MICs must
                    distribute 100% of net income to shareholders annually.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="/education">Learn More About MICs</a>
          </Button>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Benefits of Investing in a MIC</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold">High-Yield Income</span> – Earn 8-12% annually (historically higher
                  than GICs or bonds)
                </div>
              </div>

              <div className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold">Real Estate Security</span> – All loans are backed by registered
                  mortgages on Canadian properties
                </div>
              </div>

              <div className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold">Tax Efficiency</span> – MICs are flow-through entities (no corporate
                  tax; dividends taxed as interest income)
                </div>
              </div>

              <div className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold">RRSP/RRIF Eligible</span> – Hold MIC shares in registered accounts for
                  tax-deferred growth
                </div>
              </div>

              <div className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-semibold">No Landlord Duties</span> – Avoid property management hassles while
                  benefiting from real estate returns
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MICs vs. Other Investments</CardTitle>
            </CardHeader>
            <CardContent>
              {isMobile ? (
                // Mobile view - cards instead of table
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Average Return</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">MIC</div>
                        <div className="text-primary font-semibold">8-12%</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">GIC</div>
                        <div>3-5%</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">REIT</div>
                        <div>5-8%</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">Stocks</div>
                        <div>Variable</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Security</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">MIC</div>
                        <div>Mortgage-backed</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">GIC</div>
                        <div>CDIC-insured</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">REIT</div>
                        <div>Unsecured</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">Stocks</div>
                        <div>Market risk</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Liquidity</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">MIC</div>
                        <div>Annual redemption</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">GIC</div>
                        <div>Term-locked</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">REIT</div>
                        <div>Daily trading</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">Stocks</div>
                        <div>Daily trading</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Tax Treatment</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">MIC</div>
                        <div>Interest income</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">GIC</div>
                        <div>Fully taxable</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">REIT</div>
                        <div>Mixed</div>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <div className="font-medium">Stocks</div>
                        <div>Capital gains/dividends</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Desktop view - table
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-3 font-medium">Feature</th>
                        <th className="text-left py-2 px-3 font-medium">MIC</th>
                        <th className="text-left py-2 px-3 font-medium">GIC</th>
                        <th className="text-left py-2 px-3 font-medium">REIT</th>
                        <th className="text-left py-2 pl-3 font-medium">Stocks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-3 font-medium">Avg. Return</td>
                        <td className="py-2 px-3 text-primary font-semibold">8-12%</td>
                        <td className="py-2 px-3">3-5%</td>
                        <td className="py-2 px-3">5-8%</td>
                        <td className="py-2 pl-3">Variable</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-3 font-medium">Security</td>
                        <td className="py-2 px-3">Mortgage-backed</td>
                        <td className="py-2 px-3">CDIC-insured</td>
                        <td className="py-2 px-3">Unsecured</td>
                        <td className="py-2 pl-3">Market risk</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-3 font-medium">Liquidity</td>
                        <td className="py-2 px-3">Annual redemption</td>
                        <td className="py-2 px-3">Term-locked</td>
                        <td className="py-2 px-3">Daily trading</td>
                        <td className="py-2 pl-3">Daily trading</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-3 font-medium">Tax Treatment</td>
                        <td className="py-2 px-3">Interest income</td>
                        <td className="py-2 px-3">Fully taxable</td>
                        <td className="py-2 px-3">Mixed</td>
                        <td className="py-2 pl-3">Capital gains/dividends</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

