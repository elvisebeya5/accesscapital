"use client";

import { useState, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "fund",
    message: "",
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to submit form: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "fund",
        message: "",
        privacyAccepted: false,
      });
    } catch (error: any) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="grid gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to invest or have questions? Our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <form className="space-y-6" onSubmit={handleSubmit} name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name *</Label>
                    <Input
                      id="first-name"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name *</Label>
                    <Input
                      id="last-name"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
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
                    onChange={(e) => handleChange("email", e.target.value)}
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
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label>I am interested in: *</Label>
                  <RadioGroup
                    value={formData.interest}
                    onValueChange={(value) => handleChange("interest", value)}
                    required
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fund" id="fund" />
                        <Label htmlFor="fund">Mortgage Investment Fund</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual">Individual Mortgage Investments</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="notes" id="notes" />
                        <Label htmlFor="notes">Term Notes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="borrowing" id="borrowing" />
                        <Label htmlFor="borrowing">Borrowing Options</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Information</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="How can we help you?"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => handleChange("privacyAccepted", !!checked)}
                    required
                  />
                  <Label htmlFor="/privacy" className="text-sm">
                    I agree to the{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </a>{" "}
                    and consent to being contacted about my inquiry *
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full transition-transform hover:scale-105" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-600 text-center mt-4">Thank you! We'll be in touch shortly.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-center mt-4">Sorry, there was an error. Please try again.</p>
              )}
              <p className="text-sm text-muted-foreground text-center">* Required fields</p>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                      <p className="text-muted-foreground">
                        ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY
                        <br />
                        300-125 Lakeshore Road East
                        <br />
                        Oakville, Ontario L6J 1H4
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">(905) 580-3088</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@accesscapitalmic.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">Monday-Friday: 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Schedule a Consultation</h3>
              <Button className="w-full">Book Online</Button>
              <p className="text-center mt-2 text-sm text-muted-foreground">Or call (905) 580-3088</p>
            </div> */}
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Legal Disclosures</h2>
            <p className="text-sm text-muted-foreground">
              Mortgage investment carries risks, including potential loss of principal. Past performance is not
              indicative of future results. This is not an offering to sell securities. Offerings are made only to
              accredited investors through offering memorandum. Please consult with your financial advisor before
              investing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
