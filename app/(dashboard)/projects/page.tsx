import DashboardCard from "@/components/ui/dashboard-card"
import PageHeader from "@/components/ui/page-header"
import SearchFilter from "@/components/ui/search-filter"
import React from "react"

const page = () => {
  return (
    <div className="align flex flex-col gap-8 px-8">
      {/* Header */}
      <PageHeader>Projects</PageHeader>

      {/* Project Stat Cards */}
      <section className="flex flex-wrap items-center gap-4">
        <DashboardCard
          title="Total Projects"
          value="50"
          metricDesc="Completed / Uncompleted"
        />
        <DashboardCard
          title="Active Projects"
          value="43"
          metricDesc="Uncompleted Projects"
        />
        <DashboardCard
          title="Total Projects"
          value="50"
          metricDesc="Completed Projects"
        />
      </section>
      {/* Search bar & fiter*/}
    <SearchFilter/>
    </div>
  )
}

export default page
