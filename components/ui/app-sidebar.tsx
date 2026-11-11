import { ROUTES } from "@/app/constants/routes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import Dashboard from "../Icons/Dashboard"
import { sideBarItems } from "@/app/constants/sideBarItems"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link className="flex items-center gap-2" href={ROUTES.DASHBOARD}>
          <Image
            src={"orbit.svg"}
            alt="lance orbit"
            width={24}
            height={24}
          ></Image>
          <h1 className="text-lo-lg font-semibold group-data-[collapsible=icon]:hidden">
            Lance Orbit
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col">
              {sideBarItems.map((item, index) => {
                return (
                  <SidebarMenuItem key={index}>
                    <Link
                      className="group/navlink min-h-full min-w-full"

                      href={item.href}
                    >
                      <SidebarMenuButton className="cursor-pointer rounded-md border-[0.5px] bg-black px-4 py-3 text-white transition-all ease-in hover:border-black hover:bg-white hover:text-black">
                        <item.icon className="h-6 w-6 " />
                        <span className="text-lo-sm group-data-[collapsible=icon]:hidden">
                          {item.name}
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
