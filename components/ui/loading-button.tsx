"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface LoadingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export function LoadingButton({ children, onClick, className, type = "button" }: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (onClick) {
      setIsLoading(true)
      try {
        await onClick()
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Button className={className} onClick={onClick ? handleClick : undefined} disabled={isLoading} type={type}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </Button>
  )
}

