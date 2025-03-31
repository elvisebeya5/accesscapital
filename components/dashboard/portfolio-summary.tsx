"use client"

import dynamic from "next/dynamic"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "MIC Fund", value: 150000 },
  { name: "Commercial Mortgage", value: 75000 },
  { name: "Term Note", value: 25000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

// Create a client-only component to avoid hydration issues
const ClientOnlyChart = dynamic(
  () =>
    Promise.resolve(() => (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    )),
  { ssr: false },
)

export default function PortfolioSummary() {
  return (
    <div className="h-[300px] w-full">
      <ClientOnlyChart />
    </div>
  )
}

