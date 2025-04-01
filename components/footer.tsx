import Link from "next/link"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { NotificationDialog } from "@/components/ui/notification-dialog"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [dialog, setDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  })

  const handleSubscribe = useCallback(async () => {
    try {
      if (!email) {
        setDialog({
          isOpen: true,
          title: 'Error',
          message: 'Please enter a valid email address.',
          type: 'error'
        })
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setDialog({
          isOpen: true,
          title: 'Error',
          message: 'Invalid email format.',
          type: 'error'
        })
        return
      }

      if (!isChecked) {
        setDialog({
          isOpen: true,
          title: 'Error',
          message: 'You must agree to receive newsletters.',
          type: 'error'
        })
        return
      }

      setDialog({
        isOpen: true,
        title: 'Success!',
        message: 'Thank you for subscribing to our newsletter!',
        type: 'success'
      })
      setEmail("")
      setIsChecked(false)
    } catch (error) {
      setDialog({
        isOpen: true,
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        type: 'error'
      })
    }
  }, [email, isChecked])

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              ACCESS CAPITAL
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Your trusted partner in mortgage investments.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">(905) 580-3088</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all">info@accesscapitalmic.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>300-125 Lakeshore Road East, Oakville, ON</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/investment-opportunities" className="hover:text-primary transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/borrowers" className="hover:text-primary transition-colors">
                  Borrowers
                </Link>
              </li>
              <li>
                <Link href="/mortgage-brokers" className="hover:text-primary transition-colors">
                  Mortgage Brokers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Investor Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary hover:underline">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary hover:underline">
                  terms of service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest investment opportunities and news.
            </p>
            <div className="flex flex-col gap-2">
              <div className="space-y-2">
                <Label htmlFor="email-subscription" className="text-sm">
                  Email
                </Label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    id="email-subscription"
                    placeholder="Your email"
                    className="bg-background"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button 
                    onClick={handleSubscribe}
                    type="submit"
                    className="w-full sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-2">
                <Checkbox 
                  id="newsletter-consent" 
                  checked={isChecked}
                  onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                />
                <Label htmlFor="newsletter-consent" className="text-xs text-muted-foreground">
                  I agree to receive investment updates and newsletters. You can unsubscribe at any time.
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Mortgage investment carries risks, including potential loss of principal. Past performance is not indicative
            of future results. This is not an offering to sell securities. Offerings are made only to accredited
            investors through offering memorandum.
          </p>
        </div>
      </div>
      <NotificationDialog
        isOpen={dialog.isOpen}
        onClose={() => setDialog(prev => ({ ...prev, isOpen: false }))}
        title={dialog.title}
        message={dialog.message}
        type={dialog.type}
      />
    </footer>
  )
}

