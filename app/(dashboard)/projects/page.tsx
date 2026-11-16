import DashboardCard from "@/components/ui/dashboard-card"
import FilterSelect from "@/components/ui/filter-select"
import PageHeader from "@/components/ui/page-header"
import SearchFilter from "@/components/ui/search-filter"
import ProjectCard from "./_components/project-card"
import { ROUTES } from "@/app/constants/routes"

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
      <SearchFilter>
        <FilterSelect options={["all", "completed", "Uncompleted"]} />
      </SearchFilter>

      {/* Projects */}
      <section>
        <ProjectCard
          title="Market Reaserch"
          description="Local competitor reaserch for the comming launch"
          image="/project image.jpg"
          progressValue={74}
          clientLink={''}
          clientName="Arnold Kart"
          date={new Date('11/2/2026')}
        ></ProjectCard>
      </section>
    </div>
  )
}

export default page
