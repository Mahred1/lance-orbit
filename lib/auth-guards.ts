'use client'
import { redirect } from "next/navigation"
import { ROUTES } from "@/app/constants/routes"
import { authClient } from "./auth-client"

export const useRequireAuth = ()=>{
      const {
        data: session,
        isPending, // loading state
        error // error object 
    } = authClient.useSession()

    if(!isPending && !session){
        redirect(ROUTES.LOGIN)
    }
    return [session]
}