"use client"
import { ROUTES } from "@/app/constants/routes"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import PageHeader from "@/components/ui/page-header"
import { useRequireAuth } from "@/lib/auth-guards"
import { requireAuth } from "@/lib/dal"
import { Toast } from "@base-ui/react"
import { error } from "console"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import React from "react"
import { toast } from "sonner"

const Page = () => {
  useRequireAuth()

  const pathname = usePathname()
  return (
    <div className="flex flex-col items-start gap-8 px-8">
      {/* Bread crumb */}
     <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href={ROUTES.PROJECTS}></Link>}>{pathname.split('/')[1]}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      <BreadcrumbItem>
          <BreadcrumbLink render={<Link href={ROUTES.PROJECT_DETAIL('1')}></Link>}>{pathname.split('/')[2]}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>

      {/* Header */}
      <PageHeader>Market Reaserch</PageHeader>
    </div>
  )
}

export default Page
