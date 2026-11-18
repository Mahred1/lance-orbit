"use client"
import { ROUTES } from "@/app/constants/routes"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import PageHeader from "@/components/ui/page-header"
import { useRequireAuth } from "@/lib/auth-guards"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MessageCard from "../_components/message-card"

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
    </div>
  )
}

export default Page
