import { headers } from "next/headers"
import { auth } from "./auth"
import { redirect } from "next/navigation"
import { ROUTES } from "@/app/constants/routes"

export const requireAuth = async () => {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) {
    redirect(ROUTES.LOGIN)
  }
  return session
}

export const requireGuest = async () => {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session) {
    redirect(ROUTES.DASHBOARD)
  }
}
