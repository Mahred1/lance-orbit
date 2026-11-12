"use client"
import { ROUTES } from "@/app/constants/routes"
import { sideBarItems } from "@/app/constants/sideBarItems"
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
import { useCurrentPath } from "@/hooks/useCurrentPath"
import { cn } from "cn"
import { Headset, LogOut, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const styles = {
  active:
    " hover:border-black hover:bg-white hover:text-black bg-black text-white",
  inActive: "hover:border-black  hover:bg-black  border-gray-50 hover:text-white  ",
}
export function AppSidebar() {
  const [pathname] = useCurrentPath()

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
                      <SidebarMenuButton
                        className={cn(
                          pathname.includes(item.href)
                            ? styles.active
                            : styles.inActive,
                          "cursor-pointer rounded-md border-[0.5px] px-4 py-3 transition-all ease-in"
                        )}
                      >
                        <item.icon className="h-6 w-6" />
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
         <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link className=" flex gap-2" href={ROUTES.SETTING}><Settings size={24} /><span className="text-lo-sm font font-medium">Setting</span></Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link className=" flex gap-2" href={ROUTES.SUPPORT}><Headset size={24} /><span className="text-lo-sm font font-medium">Support</span></Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link className=" flex gap-2" href={ROUTES.SETTING}><LogOut size={24} /><span className="text-lo-sm font font-medium">Log-out</span></Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
