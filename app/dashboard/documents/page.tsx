import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, Search, Upload } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Access and manage your investment documents</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button>Request Document</Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search documents..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="statements">Statements</TabsTrigger>
          <TabsTrigger value="tax">Tax Documents</TabsTrigger>
          <TabsTrigger value="agreements">Agreements</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Library</CardTitle>
              <CardDescription>All documents related to your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Investment ID</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Q3 2023 Statement",
                      type: "Statement",
                      date: "Oct 1, 2023",
                      id: "INV-2023-001",
                    },
                    {
                      name: "Subscription Agreement",
                      type: "Agreement",
                      date: "Jan 15, 2023",
                      id: "INV-2023-001",
                    },
                    {
                      name: "2022 T5 Tax Form",
                      type: "Tax",
                      date: "Feb 28, 2023",
                      id: "Multiple",
                    },
                    {
                      name: "Q2 2023 Statement",
                      type: "Statement",
                      date: "Jul 1, 2023",
                      id: "INV-2023-001",
                    },
                    {
                      name: "Offering Memorandum",
                      type: "Legal",
                      date: "Jan 1, 2023",
                      id: "N/A",
                    },
                  ].map((doc, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {doc.name}
                      </TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell>{doc.id}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="statements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Statements</CardTitle>
              <CardDescription>Quarterly and monthly investment statements</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Statement Period</TableHead>
                    <TableHead>Investment ID</TableHead>
                    <TableHead>Date Generated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      period: "Q3 2023",
                      id: "INV-2023-001",
                      date: "Oct 1, 2023",
                    },
                    {
                      period: "Q2 2023",
                      id: "INV-2023-001",
                      date: "Jul 1, 2023",
                    },
                    {
                      period: "Q1 2023",
                      id: "INV-2023-001",
                      date: "Apr 1, 2023",
                    },
                  ].map((statement, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{statement.period}</TableCell>
                      <TableCell>{statement.id}</TableCell>
                      <TableCell>{statement.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tax" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Documents</CardTitle>
              <CardDescription>Annual tax forms and statements</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Tax Year</TableHead>
                    <TableHead>Date Issued</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "T5 Statement of Investment Income",
                      year: "2022",
                      date: "Feb 28, 2023",
                    },
                    {
                      name: "T5 Statement of Investment Income",
                      year: "2021",
                      date: "Feb 28, 2022",
                    },
                  ].map((doc, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>{doc.year}</TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agreements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agreements</CardTitle>
              <CardDescription>Subscription agreements and legal documents</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Investment ID</TableHead>
                    <TableHead>Date Signed</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Subscription Agreement",
                      id: "INV-2023-001",
                      date: "Jan 15, 2023",
                    },
                    {
                      name: "Offering Memorandum",
                      id: "N/A",
                      date: "Jan 1, 2023",
                    },
                  ].map((doc, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>{doc.id}</TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
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

