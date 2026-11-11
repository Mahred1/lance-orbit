"use client"
import { ROUTES } from "@/app/constants/routes"
import { usePathname } from "next/navigation"

export const useCurrentPath = () => {
  const pathname = usePathname()
  let currentRoute = ""

  if (pathname) {
    currentRoute = Object.entries(ROUTES)
      .filter((route) => route.includes(pathname))
      .toString()
  }
  return [currentRoute]
}
