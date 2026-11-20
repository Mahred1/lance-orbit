"use client"
import { ROUTES } from "@/app/constants/routes"
import AddButton from "@/components/ui/add-button"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import PageHeader from "@/components/ui/page-header"
import TitleButton from "@/components/ui/title-button"
import { useRequireAuth } from "@/lib/auth-guards"
import { Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MessageCard from "../_components/message-card"
import MilestoneCard from "../_components/milestone-card"
import SummaryMetrics from "../_components/summary-metrics"
import FilterSelect from "@/components/ui/filter-select"
import ResourceItem from "@/components/ui/resource-item"
import { Button } from "@/components/ui/button"

const Page = () => {
  useRequireAuth()

  const pathname = usePathname()
  return (
    <div className="flex flex-col items-start gap-8 px-8">
      {/* Breadcrum and Heading */}
      <div className="flex flex-col gap-1.5">
        {/* Bread crumb */}
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href={ROUTES.PROJECTS}></Link>}>
              {pathname.split("/")[1]}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              render={<Link href={ROUTES.PROJECT_DETAIL("1")}></Link>}
            >
              {pathname.split("/")[2]}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>

        {/* Header */}
        <PageHeader>Market Reaserch</PageHeader>
      </div>

      {/* Message card */}
      <MessageCard message="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name it and how to configure it, if there is something i need to do outside of n8n like preparing a g form tell mew clearly, make it easy for a beginner my guy. monthly " />

      {/* Milestones Section */}

      <section className="flex w-full flex-col items-start gap-8">
        <TitleButton title={`Milestones (2/3)`}>
          <AddButton text="Add">
            <Plus />
          </AddButton>
        </TitleButton>

        {/* Milestone Cards */}

        <ul className="flex w-full flex-col items-center">
          <li>
            <MilestoneCard />
          </li>
          <li>
            <MilestoneCard />
          </li>
          <li>
            <MilestoneCard />
          </li>
        </ul>
      </section>

      {/* Payment Section */}
      <section className="flex w-full flex-col items-start gap-8">
        {/*Header Section*/}
        <TitleButton title="Payments">
          <AddButton text="Add">
            <Plus />
          </AddButton>
        </TitleButton>

        {/* Payment summary */}
        <SummaryMetrics budget={1230} paid={123} remaining={658} />

        {/* Paymeny History */}
        <div className="w-full border border-gray-300 bg-gray-100 px-5 pt-10 pb-5">
          <TitleButton title="History">
            <FilterSelect
              variant="outline"
              options={["all Payments", "latest payments", "oldest payments"]}
            ></FilterSelect>
          </TitleButton>

          {/* payments */}
          <ul className="mt-8 flex flex-col items-center gap-2">
            <li>
              <ResourceItem
                title="MVP Builds"
                description="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name"
              />
            </li>
            <li>
              <ResourceItem
                title="MVP Builds"
                description="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name"
              />
            </li>
            <li>
              <ResourceItem
                title="MVP Builds"
                description="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* updates */}
      <section className="flex w-full flex-col items-start gap-8">
        {/*Header Section*/}
        <TitleButton title="Project Updates">
          <AddButton text="Add">
            <Plus />
          </AddButton>
        </TitleButton>

        {/* Updates*/}
        <div className="w-full border border-gray-300 bg-gray-100 px-5 pt-10 pb-5">
          <TitleButton title="Updates">
            <FilterSelect
              variant="outline"
              options={["all updates", "latest updates", "oldest updates"]}
            ></FilterSelect>
          </TitleButton>

          {/* updates list */}
          <ul className="mt-8 flex flex-col items-center gap-2">
            <li>
              <ResourceItem
                title="MVP Builds"
                description="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name"
              />
            </li>
            <li>
              <ResourceItem
                title="MVP Builds"
                description="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name"
              />
            </li>
            <li>
              <ResourceItem
                title="MVP Builds"
                description="Finish before the give me atep by step instruction on hw to build this n8n automation ,iclude what node to use what to name"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* client portal */}
      <section className="flex w-full flex-col items-center gap-8">
        {/* Header */}
        <TitleButton title="Client Portal">

        </TitleButton>

        {/* create Link */}

        <Button className='rounded-sm px-6 py-3 '>New Portal</Button>
      </section>
    </div>
  )
}

export default Page
