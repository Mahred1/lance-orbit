import { LayoutGridCircles, LucideIcon } from "lucide-react";
import { ROUTES } from "./routes";

type SideBarItemsType = {
  name: string,
  icon: LucideIcon,
  href: string
}[]

export const sideBarItems: SideBarItemsType = [
  {
    name: "Dashboard",
    icon: LayoutGridCircles ,
    href: ROUTES.DASHBOARD,
  },
]
