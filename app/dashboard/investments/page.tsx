import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Eye, Download, Filter } from "lucide-react"

export default function InvestmentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Investments</h1>
          <p className="text-muted-foreground">View and manage your current investment portfolio</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">Add Investment</Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Investments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="historical">Historical</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Portfolio</CardTitle>
              <CardDescription>Your active mortgage investments as of October 1, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investment ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Term</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV-2023-001",
                      type: "MIC Fund",
                      amount: "$100,000",
                      date: "Jan 15, 2023",
                      term: "Open",
                      rate: "9.25%",
                      status: "Active",
                    },
                    {
                      id: "INV-2023-002",
                      type: "Commercial Mortgage",
                      amount: "$75,000",
                      date: "Mar 10, 2023",
                      term: "24 months",
                      rate: "10.5%",
                      status: "Active",
                    },
                    {
                      id: "INV-2023-003",
                      type: "Term Note",
                      amount: "$50,000",
                      date: "May 22, 2023",
                      term: "12 months",
                      rate: "8.5%",
                      status: "Active",
                    },
                    {
                      id: "INV-2022-015",
                      type: "MIC Fund",
                      amount: "$25,000",
                      date: "Nov 5, 2022",
                      term: "Open",
                      rate: "9.0%",
                      status: "Active",
                    },
                  ].map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell className="font-medium">{investment.id}</TableCell>
                      <TableCell>{investment.type}</TableCell>
                      <TableCell>{investment.amount}</TableCell>
                      <TableCell>{investment.date}</TableCell>
                      <TableCell>{investment.term}</TableCell>
                      <TableCell>{investment.rate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {investment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Investments</CardTitle>
              <CardDescription>Investments that are being processed or awaiting funding</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investment ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Next Step</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV-2023-004</TableCell>
                    <TableCell>MIC Fund</TableCell>
                    <TableCell>$50,000</TableCell>
                    <TableCell>Sep 28, 2023</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Pending Funding
                      </Badge>
                    </TableCell>
                    <TableCell>Wire Transfer</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Complete Funding
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="historical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historical Investments</CardTitle>
              <CardDescription>Your past investments and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investment ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Total Return</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "INV-2021-005",
                      type: "Term Note",
                      amount: "$25,000",
                      startDate: "Feb 10, 2021",
                      endDate: "Feb 10, 2022",
                      return: "$2,125 (8.5%)",
                    },
                    {
                      id: "INV-2020-012",
                      type: "MIC Fund",
                      amount: "$50,000",
                      startDate: "Jul 15, 2020",
                      endDate: "Jul 15, 2022",
                      return: "$9,000 (9.0%)",
                    },
                  ].map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell className="font-medium">{investment.id}</TableCell>
                      <TableCell>{investment.type}</TableCell>
                      <TableCell>{investment.amount}</TableCell>
                      <TableCell>{investment.startDate}</TableCell>
                      <TableCell>{investment.endDate}</TableCell>
                      <TableCell>{investment.return}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Statement
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

