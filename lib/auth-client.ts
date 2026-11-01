import { ROUTES } from "@/app/constants/routes"
import { createAuthClient } from "better-auth/client"
 export const authClient =  createAuthClient({
     baseURL: "http://localhost:3000"
})

export const signInWithGithub = async () => {
    const data = await authClient.signIn.social({

        provider: "github",
        callbackURL: ROUTES.DASHBOARD
    })
}
export const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({

        provider: "google",
        callbackURL: ROUTES.DASHBOARD
    })
}

