"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { smoothScrollTo } from "@/lib/smooth-scroll"

interface SectionNavigationProps {
  targetId: string
  label?: string
}

export default function SectionNavigation({ targetId, label = "Learn More" }: SectionNavigationProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1 hover:bg-transparent hover:text-primary transition-colors text-sm md:text-base"
      onClick={() => smoothScrollTo(targetId)}
    >
      {label}
      <ChevronDown className="h-3 w-3 md:h-4 md:w-4 animate-bounce" />
    </Button>
  )
}

