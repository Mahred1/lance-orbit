import DashboardCard from "@/components/ui/dashboard-card"
import PageHeader from "@/components/ui/page-header"
import { requireAuth } from "@/lib/dal"
import React from "react"

const Dashboard = async () => {
  
  const session = await requireAuth()
  return (
    <div className="items-start flex flex-col gap-8 px-8">
      {/* Header */}
      <PageHeader>Dashboard Overview</PageHeader>
      {/* Dashboard Card */}

      <section className="flex flex-wrap items-center gap-4">
        <DashboardCard
          title="Active Projects"
          value="50"
          metricDesc="Increase from last month"
          metricUnit="%"
          metricValue="25"
        />
        <DashboardCard
          title="Total Revenue"
          value="$45,000"
          metricDesc="Increase from last month"
          metricUnit="%"
          metricValue="25"
        />
        <DashboardCard
          title="This Month"
          value="$3450"
          metricDesc="Increase from last month"
          metricUnit="%"
          metricValue="25"
        />
        <DashboardCard
          title="Active Clients"
          value="6"
          metricDesc="Increase from last month"
          metricUnit=""
          metricValue="3"
        />
      </section>
    </div>
  )
}

export default Dashboard
