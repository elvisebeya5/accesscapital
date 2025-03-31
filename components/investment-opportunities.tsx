import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function InvestmentOpportunities() {
  return (
    <section className="container py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Investment Opportunities</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Earn Stable Returns Backed by Real Estate</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Individual Mortgage Investments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Invest directly in specific mortgage loans</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Minimum investment: $100,000</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Returns: 8-12% per annum</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Select your preferred properties</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/investment-opportunities">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-primary">
          <CardHeader>
            <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full w-fit mb-2">
              Most Popular
            </div>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              Mortgage Investment Fund
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Diversified pool of mortgages</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Minimum investment: $50,000</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Target return: 9.25%</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Monthly distributions</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/investment-opportunities">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Term Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Fixed-term, fixed-return products</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Terms from 1-3 years</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Minimum investment: $50,000</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Predictable returns</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/investment-opportunities">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/investment-opportunities">View All Investment Options</Link>
        </Button>
      </div>
    </section>
  )
}

