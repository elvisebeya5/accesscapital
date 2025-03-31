"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="container py-8 md:py-12">
      <motion.div
        className="bg-muted rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">Ready to Start Investing?</h2>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
          Take the first step towards earning stable, real estate-backed returns with ACCESS CAPITAL MORTGAGE INVESTMENT
          COMPANY.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="w-full sm:w-auto transition-transform hover:scale-105">
            <Link href="/investment-opportunities">Explore Investments</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto transition-transform hover:scale-105">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

