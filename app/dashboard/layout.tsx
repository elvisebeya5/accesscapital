import type React from "react"
import type { Metadata } from "next"
import SidebarWrapper from "@/components/dashboard/sidebar-wrapper"

export const metadata: Metadata = {
  title: "Investor Dashboard | ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY",
  description: "Manage your mortgage investments with ACCESS CAPITAL.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SidebarWrapper>{children}</SidebarWrapper>
}

