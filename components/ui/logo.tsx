import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className="w-[150px] h-[90px] relative">
      <Image
        src="/images/Accesscapital-Logo.jpeg"
        alt="Access Capital Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}