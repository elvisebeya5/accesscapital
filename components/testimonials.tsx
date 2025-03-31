"use client"

import { CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedCard from "@/components/animated-card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I've been investing with affiliates of ACCESS CAPITAL for 5 years and have consistently earned 9-10% returns. Their team is professional and communications are excellent.",
      author: "Robert K.",
      title: "Investor since 2019",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0008.jpg-y3TDfDMNQ0RVv2668N5xolt0qGzeTf.jpeg",
    },
    {
      quote:
        "The quarterly reports give me complete visibility into my investments. I appreciate the conservative approach to lending.",
      author: "Sarah M.",
      title: "Accredited Investor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0004.jpg-gzWAFeVZ0TJtlG0aGyBVxJ9kwb11B7.jpeg",
    },
    {
      quote:
        "The investment portal gives me more visibility than my stock portfolio. I can drill down to individual property details whenever I want.",
      author: "Michael T.",
      title: "Investor since 2021",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0001.jpg-uSbfKEvvu4VBATTUCnhY1xzuOqpqIV.jpeg",
    },
    {
      quote:
        "I never knew mortgage investing could be this transparent. The automated reports save me hours every quarter.",
      author: "Jennifer L.",
      title: "Accredited Investor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0003.jpg-Q8LK1qCfX9orVeLVTsLipyQcnZzA3q.jpeg",
    },
    {
      quote: "Earned 9.8% consistently for 4 years with monthly deposits straight to my account.",
      author: "R. Thompson",
      title: "Investor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250327-WA0007.jpg-13rZFFKVQ74RXP7WAlNbX4QtJgVui7.jpeg",
    },
  ]

  return (
    <section className="container py-8 md:py-12">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 md:mb-4">What Our Investors Say</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Hear from investors who have experienced the benefits of our mortgage investment platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((testimonial, i) => (
          <AnimatedCard key={i} delay={0.1 * i}>
            <CardContent className="pt-6">
              <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/40 mb-2" />
              <p className="mb-4 italic text-sm md:text-base">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40px, 48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base">{testimonial.author}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </section>
  )
}

