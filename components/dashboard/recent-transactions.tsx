import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RecentTransactions() {
  const transactions = [
    {
      id: "TX-2023-1025",
      date: "Oct 15, 2023",
      type: "Distribution",
      amount: "$1,979.17",
      status: "Completed",
    },
    {
      id: "TX-2023-0925",
      date: "Sep 15, 2023",
      type: "Distribution",
      amount: "$1,979.17",
      status: "Completed",
    },
    {
      id: "TX-2023-0825",
      date: "Aug 15, 2023",
      type: "Distribution",
      amount: "$1,979.17",
      status: "Completed",
    },
    {
      id: "TX-2023-0725",
      date: "Jul 15, 2023",
      type: "Distribution",
      amount: "$1,979.17",
      status: "Completed",
    },
    {
      id: "TX-2023-0701",
      date: "Jul 1, 2023",
      type: "Investment",
      amount: "$50,000.00",
      status: "Completed",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {transaction.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

