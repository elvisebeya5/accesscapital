import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { InfoIcon, BookOpen, HelpCircle, FileText, BarChart4 } from "lucide-react"

export const metadata: Metadata = {
  title: "Education Center | ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY",
  description: "Learn about Mortgage Investment Corporations (MICs) and how they work.",
}

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">MIC Education Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding Mortgage Investment Corporations (MICs)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is a MIC?</h2>
            <p className="text-lg mb-6">
              A Mortgage Investment Corporation (MIC) is a unique Canadian investment vehicle that allows individuals to
              pool their capital to invest in a diversified portfolio of mortgages. MICs provide a professionally
              managed, secure way to earn consistent returns backed by real estate assets without the challenges of
              direct property ownership.
            </p>
            <div className="relative h-[250px] rounded-lg overflow-hidden shadow-xl mb-6">
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Real estate investment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <InfoIcon className="h-5 w-5 text-primary" />
                Key Benefits of Investing in a MIC
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mt-0.5">Benefit</div>
                  <div>
                    <span className="font-semibold">High-Yield Income</span> – Earn 8-12% annually (historically higher
                    than GICs or bonds)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mt-0.5">Benefit</div>
                  <div>
                    <span className="font-semibold">Real Estate Security</span> – All loans are backed by registered
                    mortgages on Canadian properties
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mt-0.5">Benefit</div>
                  <div>
                    <span className="font-semibold">Tax Efficiency</span> – MICs are flow-through entities (no corporate
                    tax; dividends taxed as interest income)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mt-0.5">Benefit</div>
                  <div>
                    <span className="font-semibold">RRSP/RRIF Eligible</span> – Hold MIC shares in registered accounts
                    for tax-deferred growth
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm mt-0.5">Benefit</div>
                  <div>
                    <span className="font-semibold">No Landlord Duties</span> – Avoid property management hassles while
                    benefiting from real estate returns
                  </div>
                </li>
              </ul>
            </div>
            <Button size="lg" className="mt-4">
              Download MIC Information Guide
            </Button>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  How MICs Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">1. Capital Pooling</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Investors purchase shares (minimums typically $50K+)</li>
                      <li>• Funds combined with potential bank leverage (max 2:1 debt-equity)</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">2. Mortgage Portfolio Creation</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Professional managers source loans (residential/commercial)</li>
                      <li>• Maintain 65-75% loan-to-value ratios</li>
                      <li>• Handle all servicing/collections</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">3. Income Distribution</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• 100% of net interest income paid to shareholders</li>
                      <li>• Dividends taxed as interest income</li>
                      <li>• Monthly or quarterly distributions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Regulatory Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-3">Income Tax Act Requirements:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      &checkmark;
                    </div>
                    <span>Minimum 20 shareholders (no single investor {">"}25% ownership)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>≥50% assets in residential mortgages/CDIC-insured cash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>≤25% in direct real estate holdings (excl. foreclosures)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Annual audited financial statements</span>
                  </li>
                </ul>

                <h3 className="font-semibold mb-3">Investor Protections:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Portfolio diversification by law</li>
                  <li>• Professional audit requirements</li>
                  <li>• OSC oversight (through Exempt Market Dealer)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">MICs vs. Other Investments</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead>MIC (9%)</TableHead>
                <TableHead>GIC (4%)</TableHead>
                <TableHead>Dividend Stocks (5%)</TableHead>
                <TableHead>REITs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Annual Income</TableCell>
                <TableCell className="text-primary font-semibold">$9,000</TableCell>
                <TableCell>$4,000</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>$5,000-$8,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Principal Security</TableCell>
                <TableCell>Mortgage-backed</TableCell>
                <TableCell>Guaranteed</TableCell>
                <TableCell>Market-Dependent</TableCell>
                <TableCell>Unsecured</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Liquidity</TableCell>
                <TableCell>Annual Redemption</TableCell>
                <TableCell>Term-Locked</TableCell>
                <TableCell>Daily Trading</TableCell>
                <TableCell>Daily Trading</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tax Efficiency</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>Mixed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-muted-foreground mt-2">
            *Based on $100,000 investment. Returns are for illustration purposes only.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How liquid are MIC investments?</AccordionTrigger>
              <AccordionContent>
                Most MICs offer annual redemption windows, with some providing monthly options subject to terms and
                conditions. Redemption policies are detailed in the offering memorandum. While not as liquid as publicly
                traded securities, MICs provide more flexibility than many other real estate investments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What happens if a borrower defaults?</AccordionTrigger>
              <AccordionContent>
                Properties are secured by registered mortgages, allowing foreclosure and sale to recover capital. ACCESS
                CAPITAL maintains conservative loan-to-value ratios (typically below 75%) to provide a buffer against
                potential market downturns. Our historical recovery rate on defaulted loans is over 92%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can non-residents invest?</AccordionTrigger>
              <AccordionContent>
                Yes, non-residents can invest in MICs, though tax treatment varies and withholding taxes may apply. We
                recommend consulting with a tax professional familiar with cross-border investments to understand the
                specific implications for your situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How are management fees structured?</AccordionTrigger>
              <AccordionContent>
                Typically, MICs charge 1-2% of assets under management plus potential performance fees. ACCESS CAPITAL's
                fee structure is transparent and competitive, with detailed information provided in our offering
                documents. Our alignment of interests ensures we only succeed when our investors succeed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-12 bg-muted p-8 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Ready to Learn More?</h2>
            <p className="text-lg">Download our comprehensive MIC information package</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">MIC Investor Guide</h3>
                  <p className="mb-4">Complete overview of MIC investing and benefits</p>
                  <Button variant="outline">Download</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BarChart4 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance Reports</h3>
                  <p className="mb-4">Historical returns and portfolio metrics</p>
                  <Button variant="outline">Download</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <HelpCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">FAQ Document</h3>
                  <p className="mb-4">Answers to common investor questions</p>
                  <Button variant="outline">Download</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

