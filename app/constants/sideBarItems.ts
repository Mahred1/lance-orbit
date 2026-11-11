import { FolderKanban, LayoutGridCircles, LucideIcon, ReceiptText, Users } from "lucide-react";
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
  {
    name: "Projects",
    icon: FolderKanban,
    href: ROUTES.DASHBOARD,
  },
  {
    name: "Clients",
    icon: Users ,
    href: ROUTES.DASHBOARD,
  },
  {
    name: "Invoices",
    icon: ReceiptText ,
    href: ROUTES.DASHBOARD,
  },
]
