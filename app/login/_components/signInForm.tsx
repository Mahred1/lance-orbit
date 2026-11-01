"use client"

import { ROUTES } from "@/app/constants/routes"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { cn } from "cn"
import Link from "next/link"
import { useState } from "react"
import z from "zod"

const signInInputSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
})

type FormInputError = {
  email: string[] | undefined
  password: string[] | undefined
}
const SignInForm = () => {
  const [formInputError, setFormInputError] = useState<FormInputError>({
    email: [""],
    password: [""],
  })

  async function handleSignIn(formData: FormData) {
    const validatedInputs = signInInputSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    if (!validatedInputs.success) {
      const errors = validatedInputs.error.flatten().fieldErrors
      setFormInputError({
        email: errors["email"],
        password: errors["password"],
      })
      return
    }
    const { data, error } = await authClient.signIn.email(
      {
        email: formData.get("email") as string,

        password: formData.get("password") as string,

        callbackURL: ROUTES.DASHBOARD,

        rememberMe: false,
      },
      {}
    )
   
  }
  return (
    <form action={handleSignIn} className="flex w-full flex-col gap-6">
      <div>
        {" "}
        <Field>
          <FieldLabel className="text-lo-sm">Email</FieldLabel>
          <Input
            name="email"
            className={cn("rounded-sm border-[1.5px] py-4 px-2 border-gray-200 bg-gray-50 text-gray-300",formInputError["email"][0]&&"border-red-200 focus:border-red-200 text-red-400 border-3 placeholder:text-red-500" )}
            placeholder="john.doe@gmail.com"
          ></Input>
          {formInputError["email"]&&<div className="text-red-400 text-lo-sm">{formInputError["email"][0]}</div>}
        </Field>      
        <Field className="mt-2">
          <FieldLabel className="text-lo-sm">Password</FieldLabel>
          <Input
            name="password"
            className={cn("rounded-sm border-[1.5px] py-4 px-2 border-gray-200 bg-gray-50 text-gray-300",formInputError["password"][0]&&"border-red-200 focus:border-red-200  text-red-400 border-3 placeholder:text-red-500")}
            placeholder="*********"
          ></Input>
          {formInputError["password"]&&<div className="text-red-400 text-lo-sm">{formInputError["password"][0]}</div>}

        </Field>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-lo-sm">
            <Checkbox className={"h-4 w-4 border-gray-300"}></Checkbox>
            <p>Remember me</p>
          </div>
          <p className="text-lo-sm">Forgot your password?</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-2">
        <Button
          type="submit"
          className={"min-w-full rounded-sm hover:cursor-pointer"}
        >
          Login
        </Button>
        <p className="text-lo-sm">
          Don’t have an account?{" "}
          <Link href={ROUTES.SIGNUP} className="tracking-wide text-blue-500">Sign-up</Link>{" "}
        </p>
      </div>
    </form>
  )
}

export default SignInForm
