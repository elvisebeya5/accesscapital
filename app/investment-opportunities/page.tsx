'use client';
import { useState, FormEvent, useEffect } from 'react';
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, Shield, Landmark, BarChart, TrendingUp } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from '@emailjs/browser';

// Removed metadata export as it is not allowed in "use client" components
export default function InvestmentOpportunitiesPage() {
  useEffect(() => {
    emailjs.init("Rukt6JkUbquVfv96m"); // Initialize with your public key
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentAmount: 'under-50k',
    interests: [],
    timeframe: '',
    questions: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof typeof formData, value: string | string[]) => {
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
        to_name: 'Access Capital',
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        message: `
Investment Information Request Details:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

This inquiry was submitted through the website contact form.
        `
      };

      const result = await emailjs.send(
        "service_2p3msom", // Your EmailJS service ID
        "template_73zhomv", // Your EmailJS template ID
        templateParams,
        "Rukt6JkUbquVfv96m" // Your public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          investmentAmount: 'under-50k',
          interests: [],
          timeframe: '',
          questions: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: any) {
      console.error('EmailJS error:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="grid gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Investment Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Earn Stable Returns Backed by Real Estate</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Target Returns:</span> 8-12% per annum (depending on product and term)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Investment Terms:</span> Flexible terms from 6 months to 5 years
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Security:</span> All loans secured by registered mortgages on Ontario
                  properties
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Loan-to-Value Ratios:</span> Conservative LTVs typically not exceeding
                  75%
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Distributions:</span> Choose monthly or quarterly payment frequency
                </div>
              </li>
            </ul>
            <div className="mt-6 relative h-[250px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Investment.jpeg"
                alt="Investment property"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="bg-muted rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Consultation</h3>
                  <p>Speak with our investment team to discuss your goals</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Documentation</h3>
                  <p>Complete simple subscription documents</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Funding</h3>
                  <p>Transfer your investment capital</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Earn</h3>
                  <p>Receive regular interest payments</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Monitor</h3>
                  <p>Access online portal for investment tracking</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8">Investment Products</h2>
          <Tabs defaultValue="fund" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fund">Mortgage Investment Fund</TabsTrigger>
              <TabsTrigger value="individual">Individual Mortgages</TabsTrigger>
              <TabsTrigger value="notes">Term Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="fund" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="h-6 w-6" />
                    Mortgage Investment Fund
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Diversified pool of mortgages</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Minimum investment: $50,000</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Target return: 9.25%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Monthly distributions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>RRSP/TFSA eligible</span>
                        </li>
                      </ul>
                      <Button className="mt-6">Request Information</Button>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Current Performance</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Average LTV</span>
                            <span>68%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">Geographic Distribution</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="bg-primary/10 p-2 rounded text-center">
                              <div className="font-semibold">GTA</div>
                              <div>65%</div>
                            </div>
                            <div className="bg-primary/10 p-2 rounded text-center">
                              <div className="font-semibold">Hamilton</div>
                              <div>20%</div>
                            </div>
                            <div className="bg-primary/10 p-2 rounded text-center">
                              <div className="font-semibold">Niagara</div>
                              <div>15%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="individual" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6" />
                    Individual Mortgage Investments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Invest directly in specific mortgage loans</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Minimum investment: $100,000</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Target returns: 8-12%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Select your preferred properties</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Customized investment terms</span>
                        </li>
                      </ul>
                      <Button className="mt-6">View Available Mortgages</Button>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Featured Opportunity</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-lg font-medium">
                          <BarChart className="h-5 w-5 text-primary" />
                          <span>Commercial Property - Oakville</span>
                        </div>
                        <div className="relative h-[150px] rounded-lg overflow-hidden mb-4">
                          <Image
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="Commercial property"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Return:</span>
                            <span className="font-semibold">10.5%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>LTV:</span>
                            <span className="font-semibold">65%</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Term:</span>
                            <span className="font-semibold">24 months</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Property Type:</span>
                            <span className="font-semibold">Mixed-use retail/residential</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    Term Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Fixed-term, fixed-return products</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Terms from 1-3 years</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Minimum investment: $50,000</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Predictable returns</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Simplified investment structure</span>
                        </li>
                      </ul>
                      <Button className="mt-6">Compare Term Options</Button>
                    </div>
                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Available Terms</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-background p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-primary">8.5%</div>
                            <div className="font-medium">1 Year</div>
                          </div>
                          <div className="bg-background p-4 rounded-lg text-center border-2 border-primary">
                            <div className="text-2xl font-bold text-primary">9.5%</div>
                            <div className="font-medium">2 Years</div>
                            <div className="text-xs mt-1 text-primary">Most Popular</div>
                          </div>
                          <div className="bg-background p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-primary">10.5%</div>
                            <div className="font-medium">3 Years</div>
                          </div>
                        </div>
                        <div className="text-sm mt-4">
                          <p>
                            All term notes are secured by a pool of first and second mortgages with a maximum LTV of
                            75%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 bg-muted p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Mortgage Investing?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Higher Returns",
                description: "Earn more than GICs or bonds with 8-12% annual returns",
                icon: TrendingUp,
              },
              {
                title: "Monthly Cash Flow",
                description: "Receive regular income unlike traditional stock investments",
                icon: Landmark,
              },
              {
                title: "Tangible Security",
                description: "All investments backed by real property with registered mortgages",
                icon: Shield,
              },
              {
                title: "Inflation Hedge",
                description: "Interest-bearing investments help protect against inflation",
                icon: BarChart,
              },
              {
                title: "Portfolio Diversification",
                description: "Add stability to your investment mix beyond stocks and bonds",
                icon: Clock,
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <item.icon className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-12 bg-white p-8 rounded-xl border shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-center">Request Investment Information</h2>
          <p className="text-center text-muted-foreground mb-8">
            Complete the form below to receive detailed information about our investment opportunities
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input 
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input 
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Enter your email"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Request Information Package'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Thank you! We'll be in touch shortly.</p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Sorry, there was an error. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

