"use client"
import { ROUTES } from "@/app/constants/routes"
import { usePathname } from "next/navigation"

export const useCurrentPath = () => {
  const pathname = usePathname()
  let currentRoute: string = ""

  if (pathname) {
    currentRoute = Object.values(ROUTES)
      .filter((route) => pathname.includes(route as string))
      .toString()
  }
  return [currentRoute]
}
