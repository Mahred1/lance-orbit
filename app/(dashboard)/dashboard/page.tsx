import { requireAuth } from "@/lib/dal"
import React from "react"
import DashboardCard from "./_components/dashboard-card"

const Dashboard = async () => {
  const session = await requireAuth()
  return (
    <div className="align flex flex-col gap-8 px-8">
      {/* Header */}
      <h1 className="text-lo-xl font-medium">Dashboard Overview</h1>
      <section>
        <DashboardCard
          title="Active Projects"
          value="50"
          metricDesc="Increase from last month"
          metricUnit="%"
          metricValue="25"
        />
      </section>
    </div>
  )
}

export default Dashboard
