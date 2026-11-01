'use client'
import { ROUTES } from "@/app/constants/routes"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { cn } from "cn"
import Link from "next/link"
import { redirect } from "next/navigation"
import React, { useState } from "react"
import z from "zod"

const SignUpForm = () => {
  const signUpInputSchema = z.object({
    email: z.email("Please enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    name: z.string("name should be atleast 3 characters"),
    image: z.url().optional(),
  })

  type FormInputError = {
    email: string[] | undefined
    password: string[] | undefined
    name: string[] | undefined
  }
  const [loading,setLoading]=useState<boolean>(false)
   const [formInputError, setFormInputError] = useState<FormInputError>({
      email: [""],
      password: [""],
      name:[""]
    })

    async function handleSignUp(formData: FormData) {
    const validatedInputs = signUpInputSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    })

    if (!validatedInputs.success) {
      const errors = validatedInputs.error.flatten().fieldErrors
      setFormInputError({
        email: errors["email"],
        password: errors["password"],
        name:errors["name"]
      })
      return
    }


const { error } = await authClient.signUp.email({
        email:formData.get('email') as string,  
        password:formData.get('password') as string,  
        name:formData.get("name") as string,
        callbackURL: ROUTES.DASHBOARD },{
        onRequest: (ctx) => {
            setLoading(true)
        },
        onSuccess: (ctx) => {
            setLoading(false)
            redirect(ROUTES.DASHBOARD)
        },
        onError: (ctx) => {
            alert(ctx.error.message);
        },
});

}
  return <form action={handleSignUp}>
         <div>
        {" "}
        <Field>
          <FieldLabel className="text-lo-sm">Name</FieldLabel>
          <Input
            name="name"
            className={cn("rounded-sm border-[1.5px] py-4 px-2 border-gray-200 bg-gray-50 text-gray-300",formInputError["email"][0]&&"border-red-200 focus:border-red-200 text-red-400 border-3 placeholder:text-red-500" )}
            placeholder="Jhone Doe"
          ></Input>
          {formInputError["name"]&&<div className="text-red-400 text-lo-sm">{formInputError["name"][0]}</div>}
        </Field>      
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
          <div className="flex mt-2 items-center gap-1 text-lo-sm">
            <Checkbox className={"h-4 w-4 border-gray-300"}></Checkbox>
            <p>Remember me</p>
          </div>
        
      </div>

      <div className="flex w-full mt-2 flex-col items-center gap-2">
        <Button
          type="submit"
          className={"min-w-full rounded-sm hover:cursor-pointer"}
        >
         {loading?'loading...': 'Signup'}
        </Button>
        <p className="text-lo-sm">
          Already have an account?{" "}
          <Link href={ROUTES.LOGIN} className="tracking-wide text-blue-500">Login</Link>{" "}
        </p>
      </div>

  </form>
}

export default SignUpForm
