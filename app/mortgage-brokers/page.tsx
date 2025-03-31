'use client';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Zap, Database, Users } from "lucide-react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  brokerName: string;
  brokerage: string;
  brokerEmail: string;
  brokerPhone: string;
  dealType: string;
  propertyAddress: string;
  propertyType: string;
  propertyValue: string;
  loanAmount: string;
  ltv: string;
  termRequested: string;
  closingDate: string;
  borrowerName: string;
  creditScore: string;
  incomeSource: string;
  dealNotes: string;
  consent: boolean;
}

const sendEmail = async (templateId: string, templateParams: Record<string, any>) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      templateId,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS send error:', error);
    return { success: false, error };
  }
};

export default function MortgageBrokersPage() {
  const [formData, setFormData] = useState<FormData>({
    brokerName: '',
    brokerage: '',
    brokerEmail: '',
    brokerPhone: '',
    dealType: 'first-mortgage',
    propertyAddress: '',
    propertyType: '',
    propertyValue: '',
    loanAmount: '',
    ltv: '',
    termRequested: '',
    closingDate: '',
    borrowerName: '',
    creditScore: '',
    incomeSource: '',
    dealNotes: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        brokerName: formData.brokerName,
        brokerage: formData.brokerage,
        // ...rest of your form data
      };

      const result = await sendEmail(
        process.env.NEXT_PUBLIC_EMAILJS_DEAL_TEMPLATE_ID!,
        templateParams
      );

      setSubmitStatus(result.success ? 'success' : 'error');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="grid gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">ACCESS CAPITAL MORTGAGE SOLUTIONS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative Lending Up to 80% LTV Across Ontario's Prime Markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">OUR DIFFERENCE</h2>
            <p className="text-lg mb-6">
              We combine institutional-grade underwriting with flexible solutions, delivering:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">48-hour pre-approvals</span> - Faster than traditional lenders
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Database className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Data-driven decisions</span> - Our AI scoring supplements human
                  underwriting
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Broker-first approach</span> - Dedicated deal team & competitive
                  commissions
                </div>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">ELIGIBLE PROPERTIES</h3>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-medium mb-2">Markets:</h4>
                <p>GTA, Hamilton, Niagara, Ottawa, London</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Property Types:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Single-family homes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Townhomes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Condos (min. 600 sqft)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Multi-res (up to 6 units)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Select commercial mixed-use</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0007.jpg-13rZFFKVQ74RXP7WAlNbX4QtJgVui7.jpeg"
              alt="Mortgage professionals discussing property investment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">CORE PRODUCTS</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Max LTV</TableHead>
                <TableHead>Rate Starting</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Prime 1st Mortgage</TableCell>
                <TableCell>80%</TableCell>
                <TableCell>6.99%</TableCell>
                <TableCell>A-grade borrowers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alternative 1st Mtg</TableCell>
                <TableCell>75%</TableCell>
                <TableCell>8.49%</TableCell>
                <TableCell>Non-traditional income</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bridge Financing</TableCell>
                <TableCell>70%</TableCell>
                <TableCell>9.95%</TableCell>
                <TableCell>Renos/flips</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Construction Loans</TableCell>
                <TableCell>65%</TableCell>
                <TableCell>10.25%</TableCell>
                <TableCell>Custom builds</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0003.jpg-Q8LK1qCfX9orVeLVTsLipyQcnZzA3q.jpeg"
              alt="Mortgage broker handing keys to client"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">THE ACCESS CAPITAL ADVANTAGE</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tech-Enabled Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        1
                      </div>
                      <div>
                        <span className="font-medium">Digital Application</span> - Complete on our broker portal
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        2
                      </div>
                      <div>
                        <span className="font-medium">Instant Valuation</span> - Automated appraisal review
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        3
                      </div>
                      <div>
                        <span className="font-medium">AI Underwriting</span> - Preliminary decision in &lt;4 hrs
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        4
                      </div>
                      <div>
                        <span className="font-medium">Fast Funding</span> - Close in 7-10 days
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl border shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Deal Submission Form</h2>
          <p className="text-center text-muted-foreground mb-8">Submit your deal for quick pre-approval</p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Broker Information</h3>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="broker-name">Broker name *</Label>
                      <Input
                        id="broker-name"
                        placeholder="Your full name"
                        required
                        value={formData.brokerName}
                        onChange={(e) => handleChange('brokerName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brokerage">Brokerage *</Label>
                      <Input
                        id="brokerage"
                        placeholder="Your brokerage name"
                        required
                        value={formData.brokerage}
                        onChange={(e) => handleChange('brokerage', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="broker-email">Email *</Label>
                      <Input
                        id="broker-email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.brokerEmail}
                        onChange={(e) => handleChange('brokerEmail', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="broker-phone">Phone *</Label>
                      <Input
                        id="broker-phone"
                        type="tel"
                        placeholder="Your phone number"
                        required
                        value={formData.brokerPhone}
                        onChange={(e) => handleChange('brokerPhone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Deal Information</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Deal type: *</Label>
                    <RadioGroup
                      value={formData.dealType}
                      required
                      onValueChange={(value) => handleChange('dealType', value)}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="first-mortgage" id="first-mortgage" />
                          <Label htmlFor="first-mortgage">1st Mortgage</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="second-mortgage" id="second-mortgage" />
                          <Label htmlFor="second-mortgage">2nd Mortgage</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bridge" id="bridge" />
                          <Label htmlFor="bridge">Bridge</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="construction" id="construction-loan" />
                          <Label htmlFor="construction-loan">Construction</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="property-address">Property address *</Label>
                      <Input
                        id="property-address"
                        placeholder="Full property address"
                        required
                        value={formData.propertyAddress}
                        onChange={(e) => handleChange('propertyAddress', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="property-type-broker">Property type *</Label>
                      <Select
                        required
                        value={formData.propertyType}
                        onValueChange={(value) => handleChange('propertyType', value)}
                      >
                        <SelectTrigger id="property-type-broker">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-family">Single Family Home</SelectItem>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="multi-family">Multi-Family (2-4 units)</SelectItem>
                          <SelectItem value="commercial">Commercial Property</SelectItem>
                          <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="property-value-broker">Property value *</Label>
                      <Input
                        id="property-value-broker"
                        placeholder="$"
                        required
                        value={formData.propertyValue}
                        onChange={(e) => handleChange('propertyValue', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loan-amount-broker">Loan amount *</Label>
                      <Input
                        id="loan-amount-broker"
                        placeholder="$"
                        required
                        value={formData.loanAmount}
                        onChange={(e) => handleChange('loanAmount', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ltv">LTV %</Label>
                      <Input
                        id="ltv"
                        placeholder="%"
                        value={formData.ltv}
                        onChange={(e) => handleChange('ltv', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="term-requested">Term requested</Label>
                      <Select
                        value={formData.termRequested}
                        onValueChange={(value) => handleChange('termRequested', value)}
                      >
                        <SelectTrigger id="term-requested">
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6-months">6 Months</SelectItem>
                          <SelectItem value="1-year">1 Year</SelectItem>
                          <SelectItem value="2-year">2 Years</SelectItem>
                          <SelectItem value="3-year">3 Years</SelectItem>
                          <SelectItem value="open">Open</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="closing-date">Closing date</Label>
                      <Input
                        id="closing-date"
                        type="date"
                        value={formData.closingDate}
                        onChange={(e) => handleChange('closingDate', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-4">Borrower Information</h3>
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="borrower-name">Borrower name *</Label>
                      <Input
                        id="borrower-name"
                        placeholder="Borrower's full name"
                        required
                        value={formData.borrowerName}
                        onChange={(e) => handleChange('borrowerName', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="borrower-credit">Credit score range *</Label>
                      <Select
                        required
                        value={formData.creditScore}
                        onValueChange={(value) => handleChange('creditScore', value)}
                      >
                        <SelectTrigger id="borrower-credit">
                          <SelectValue placeholder="Select credit score range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent (740+)</SelectItem>
                          <SelectItem value="good">Good (700-739)</SelectItem>
                          <SelectItem value="fair">Fair (660-699)</SelectItem>
                          <SelectItem value="below-average">Below Average (620-659)</SelectItem>
                          <SelectItem value="poor">Poor (below 620)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="income-source">Income source</Label>
                    <Select
                      value={formData.incomeSource}
                      onValueChange={(value) => handleChange('incomeSource', value)}
                    >
                      <SelectTrigger id="income-source">
                        <SelectValue placeholder="Select income source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employment">Employment Income</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="commission">Commission-Based</SelectItem>
                        <SelectItem value="rental">Rental Income</SelectItem>
                        <SelectItem value="pension">Pension/Retirement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deal-notes">Additional notes</Label>
                <Textarea
                  id="deal-notes"
                  placeholder="Any special circumstances or additional information about this deal"
                  className="min-h-[100px]"
                  value={formData.dealNotes}
                  onChange={(e) => handleChange('dealNotes', e.target.value)}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="broker-confirm"
                  required
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange('consent', !!checked)}
                />
                <Label htmlFor="broker-confirm" className="text-sm">
                  I confirm I have the borrower's consent to share this information *
                </Label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Deal'}
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  Deal submitted successfully! We'll review and respond within 4 business hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  There was an error submitting your deal. Please try again.
                </div>
              )}

              <p className="text-sm text-muted-foreground text-center">
                * Required fields. You will receive a response within 4 business hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

