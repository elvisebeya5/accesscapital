"use client"

import dynamic from "next/dynamic"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", return: 9.2 },
  { month: "Feb", return: 9.3 },
  { month: "Mar", return: 9.1 },
  { month: "Apr", return: 9.4 },
  { month: "May", return: 9.5 },
  { month: "Jun", return: 9.6 },
  { month: "Jul", return: 9.5 },
  { month: "Aug", return: 9.7 },
  { month: "Sep", return: 9.8 },
  { month: "Oct", return: 9.7 },
  { month: "Nov", return: 9.6 },
  { month: "Dec", return: 9.5 },
]

// Create a client-only component to avoid hydration issues
const ClientOnlyChart = dynamic(
  () =>
    Promise.resolve(() => (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[8.5, 10]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Line type="monotone" dataKey="return" stroke="#0088FE" activeDot={{ r: 8 }} name="Monthly Return" />
        </LineChart>
      </ResponsiveContainer>
    )),
  { ssr: false },
)

export default function PerformanceChart() {
  return (
    <div className="h-[300px] w-full">
      <ClientOnlyChart />
    </div>
  )
}

