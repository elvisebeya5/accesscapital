"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"
import { useTheme } from "next-themes"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme() // Use resolvedTheme for accurate theme detection
  const pathname = usePathname()

  // Track scroll position to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Investors", href: "/investment-opportunities" },
    { name: "Borrowers", href: "/borrowers" },
    { name: "Mortgage Brokers", href: "/mortgage-brokers" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-[#1a1a1a] backdrop-blur supports-[backdrop-filter]:bg-[#1a1a1a]/90">
      <div className="container flex h-20 items-center px-6 lg:px-8">
        <div className="flex items-center justify-between flex-1">
          <Link 
            href="/" 
            className="flex items-center transition-transform hover:scale-105 duration-200 mr-8"
          >
            <Logo />
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] max-w-xs pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Logo />
                </Link>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-7 py-2 text-base font-medium hover:bg-accent rounded-lg transition-colors",
                      pathname === item.href && "bg-accent font-semibold",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-7 pt-4 mt-4 border-t">
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto border-white text-white bg-gray-700 hover:bg-gray-600 transition-transform hover:scale-105"
                  >
                    <Link href="/education">Learn About MICs</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm text-white tracking-wide hover:text-primary/90 transition-colors relative group",
                  "font-['Montserrat'] font-medium py-2",
                  pathname === item.href && "text-primary font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : "w-0",
                  )}
                ></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {/* <ModeToggle /> */}
            {/* <Button asChild className="hidden md:inline-flex hover:scale-105 transition-transform">
              <Link href="/dashboard">Investor Login</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  )
}

