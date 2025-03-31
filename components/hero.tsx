"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import SectionNavigation from "@/components/section-navigation"

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          alt="Toronto business district"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
      </div>
      <div className="container flex flex-col items-center text-center py-16 md:py-24 lg:py-32 relative z-10 text-white">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Secure. Stable. <span className="text-primary">Strong Returns.</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY provides investors with secure, high-yield mortgage investment
          opportunities backed by carefully selected real estate assets.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-transform hover:scale-105"
          >
            <Link href="/investment-opportunities">Explore Investments</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto border-white text-white bg-gray-700 hover:bg-gray-600 transition-transform hover:scale-105"
          >
            <Link href="/education">Learn About MICs</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SectionNavigation targetId="about-section" label="Discover More" />
        </motion.div>
      </div>
    </div>
  )
}

