import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Users,
  FileText,
  Settings,
  BarChart,
  AlertTriangle,
  CheckCircle,
  Search,
  Plus,
  Edit,
  Trash2,
  Filter,
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage investors, mortgages, and system settings.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Mortgage
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+12 this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Mortgages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assets Under Management</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24.8M</div>
            <p className="text-xs text-muted-foreground">+$1.2M from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="investors" className="space-y-4">
        <TabsList>
          <TabsTrigger value="investors">Investors</TabsTrigger>
          <TabsTrigger value="mortgages">Mortgages</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="investors" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 w-full max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search investors..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Investor
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Investor Management</CardTitle>
              <CardDescription>View and manage all investors in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Invested Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Robert Thompson",
                        email: "robert.t@example.com",
                        amount: "$250,000",
                        status: "Active",
                        lastLogin: "Today, 10:45 AM",
                      },
                      {
                        name: "Sarah Johnson",
                        email: "sarah.j@example.com",
                        amount: "$175,000",
                        status: "Active",
                        lastLogin: "Yesterday, 3:20 PM",
                      },
                      {
                        name: "Michael Chen",
                        email: "michael.c@example.com",
                        amount: "$500,000",
                        status: "Active",
                        lastLogin: "Oct 12, 2023",
                      },
                      {
                        name: "Jennifer Williams",
                        email: "jennifer.w@example.com",
                        amount: "$125,000",
                        status: "Pending",
                        lastLogin: "Never",
                      },
                      {
                        name: "David Miller",
                        email: "david.m@example.com",
                        amount: "$300,000",
                        status: "Active",
                        lastLogin: "Oct 10, 2023",
                      },
                    ].map((investor, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{investor.name}</TableCell>
                        <TableCell>{investor.email}</TableCell>
                        <TableCell>{investor.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              investor.status === "Active"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }
                          >
                            {investor.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{investor.lastLogin}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mortgages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mortgage Portfolio</CardTitle>
              <CardDescription>Manage all active and pending mortgages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>LTV</TableHead>
                      <TableHead>Rate</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        property: "123 Main St, Toronto",
                        type: "Residential",
                        amount: "$450,000",
                        ltv: "65%",
                        rate: "9.5%",
                        status: "Active",
                      },
                      {
                        property: "456 Queen St, Oakville",
                        type: "Commercial",
                        amount: "$1,200,000",
                        ltv: "70%",
                        rate: "10.2%",
                        status: "Active",
                      },
                      {
                        property: "789 King Rd, Hamilton",
                        type: "Mixed-Use",
                        amount: "$850,000",
                        ltv: "68%",
                        rate: "9.8%",
                        status: "Active",
                      },
                      {
                        property: "101 Bay St, Mississauga",
                        type: "Residential",
                        amount: "$320,000",
                        ltv: "60%",
                        rate: "8.9%",
                        status: "Pending",
                      },
                      {
                        property: "202 Yonge St, Toronto",
                        type: "Commercial",
                        amount: "$1,500,000",
                        ltv: "72%",
                        rate: "10.5%",
                        status: "Active",
                      },
                    ].map((mortgage, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{mortgage.property}</TableCell>
                        <TableCell>{mortgage.type}</TableCell>
                        <TableCell>{mortgage.amount}</TableCell>
                        <TableCell>{mortgage.ltv}</TableCell>
                        <TableCell>{mortgage.rate}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              mortgage.status === "Active"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }
                          >
                            {mortgage.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Processing</CardTitle>
              <CardDescription>Manage and track all investor payments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Investor</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "PAY-2023-1025",
                        investor: "Robert Thompson",
                        amount: "$1,979.17",
                        type: "Distribution",
                        date: "Oct 15, 2023",
                        status: "Completed",
                      },
                      {
                        id: "PAY-2023-1024",
                        investor: "Sarah Johnson",
                        amount: "$1,458.33",
                        type: "Distribution",
                        date: "Oct 15, 2023",
                        status: "Completed",
                      },
                      {
                        id: "PAY-2023-1023",
                        investor: "Michael Chen",
                        amount: "$4,166.67",
                        type: "Distribution",
                        date: "Oct 15, 2023",
                        status: "Completed",
                      },
                      {
                        id: "PAY-2023-1022",
                        investor: "David Miller",
                        amount: "$2,500.00",
                        type: "Distribution",
                        date: "Oct 15, 2023",
                        status: "Processing",
                      },
                      {
                        id: "PAY-2023-1021",
                        investor: "Jennifer Williams",
                        amount: "$50,000.00",
                        type: "Investment",
                        date: "Oct 12, 2023",
                        status: "Pending",
                      },
                    ].map((payment, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.investor}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>{payment.type}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              payment.status === "Completed"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : payment.status === "Processing"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }
                          >
                            {payment.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            {payment.status === "Pending" ? "Approve" : "Details"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Reports</CardTitle>
              <CardDescription>Generate and download administrative reports.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <BarChart className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Portfolio Performance</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Complete analysis of mortgage portfolio performance
                      </p>
                      <Button variant="outline" className="w-full">
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Investor Summary</h3>
                      <p className="text-sm text-muted-foreground mb-4">Detailed breakdown of all investor accounts</p>
                      <Button variant="outline" className="w-full">
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <FileText className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Tax Documents</h3>
                      <p className="text-sm text-muted-foreground mb-4">Generate T5 statements for all investors</p>
                      <Button variant="outline" className="w-full">
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <AlertTriangle className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Risk Assessment</h3>
                      <p className="text-sm text-muted-foreground mb-4">Analysis of portfolio risk metrics</p>
                      <Button variant="outline" className="w-full">
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle className="h-8 w-8 text-primary mb-2" />
                      <h3 className="font-semibold mb-1">Compliance Report</h3>
                      <p className="text-sm text-muted-foreground mb-4">Regulatory compliance status</p>
                      <Button variant="outline" className="w-full">
                        Generate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

