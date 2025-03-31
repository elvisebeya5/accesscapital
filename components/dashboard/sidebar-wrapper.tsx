"use client"

import type React from "react"

import dynamic from "next/dynamic"
import { SidebarProvider } from "@/components/ui/sidebar"

// Dynamically import the sidebar to avoid hydration issues
const DashboardSidebar = dynamic(() => import("@/components/dashboard/dashboard-sidebar"), { ssr: false })
const DashboardHeader = dynamic(() => import("@/components/dashboard/dashboard-header"), { ssr: false })

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 p-6 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

