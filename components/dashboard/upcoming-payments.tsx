import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UpcomingPayments() {
  const payments = [
    {
      id: "INV-2023-001",
      date: "Nov 15, 2023",
      amount: "$1,979.17",
      type: "MIC Fund",
    },
    {
      id: "INV-2023-001",
      date: "Dec 15, 2023",
      amount: "$1,979.17",
      type: "MIC Fund",
    },
    {
      id: "INV-2023-002",
      date: "Dec 10, 2023",
      amount: "$656.25",
      type: "Commercial Mortgage",
    },
    {
      id: "INV-2023-003",
      date: "Jan 22, 2024",
      amount: "$354.17",
      type: "Term Note",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Investment ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>{payment.date}</TableCell>
            <TableCell>{payment.amount}</TableCell>
            <TableCell>{payment.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

