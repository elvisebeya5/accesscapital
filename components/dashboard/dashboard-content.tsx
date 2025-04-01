"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, DollarSign, TrendingUp, PieChart, Calendar } from "lucide-react"
import RecentTransactions from "@/components/dashboard/recent-transactions"
import UpcomingPayments from "@/components/dashboard/upcoming-payments"
import { useIsMobile } from "@/hooks/use-mobile"

// Dynamically import chart components with SSR disabled
const PortfolioSummary = dynamic(() => import("@/components/dashboard/portfolio-summary"), { ssr: false })
const PerformanceChart = dynamic(() => import("@/components/dashboard/performance-chart"), { ssr: false })

export default function DashboardContent() {
  const isMobile = useIsMobile()

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Investor. Here's an overview of your investments.</p>
        </div>
        {/* <Button>Download Statement</Button> */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$250,000</div>
            <p className="text-xs text-muted-foreground">+$50,000 from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Yield</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9.5%</div>
            <p className="text-xs text-muted-foreground">+0.3% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YTD Income</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,625</div>
            <p className="text-xs text-muted-foreground">75% of annual target</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,979</div>
            <p className="text-xs text-muted-foreground">Due on Oct 15, 2023</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Performance History</CardTitle>
                <CardDescription>Monthly returns over the past 12 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PerformanceChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Portfolio Allocation</CardTitle>
                <CardDescription>Distribution by investment type</CardDescription>
              </CardHeader>
              <CardContent>
                <PortfolioSummary />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className={isMobile ? "" : "lg:col-span-4"}>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest investment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <RecentTransactions />
                </div>
              </CardContent>
            </Card>
            <Card className={isMobile ? "" : "lg:col-span-3"}>
              <CardHeader>
                <CardTitle>Upcoming Payments</CardTitle>
                <CardDescription>Expected distributions in the next 90 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <UpcomingPayments />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>Detailed performance metrics and investment insights</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
              <div className="text-center">
                <PieChart className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                  Detailed analytics view with risk metrics, comparative performance, and market correlation data.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Reports</CardTitle>
              <CardDescription>Download statements and tax documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-4 flex flex-col">
                    <span className="text-sm font-medium">Q3 2023</span>
                    <span className="text-xs text-muted-foreground mt-1">Quarterly Statement</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col">
                    <span className="text-sm font-medium">Q2 2023</span>
                    <span className="text-xs text-muted-foreground mt-1">Quarterly Statement</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col">
                    <span className="text-sm font-medium">Q1 2023</span>
                    <span className="text-xs text-muted-foreground mt-1">Quarterly Statement</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col">
                    <span className="text-sm font-medium">Q4 2022</span>
                    <span className="text-xs text-muted-foreground mt-1">Quarterly Statement</span>
                  </Button>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Tax Documents</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-auto py-4 flex flex-col">
                      <span className="text-sm font-medium">2022</span>
                      <span className="text-xs text-muted-foreground mt-1">T5 Statement</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col">
                      <span className="text-sm font-medium">2021</span>
                      <span className="text-xs text-muted-foreground mt-1">T5 Statement</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

