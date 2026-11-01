'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { useState } from 'react'

const SignInForm = () => {
   
const[email,SetEmail] = useState<string>("")
const[password,setPassword] = useState<string>("")

  async function  handleSignin({email,password}:{email:string,password:string}){
    const { data, error } = await authClient.signIn.email({

        email,

        password,

        callbackURL: "/dashboard",

        rememberMe: false
}, {
  
  
})
console.log(data,error)
  }
  return (
    <form action={""} className="flex w-full flex-col gap-6">
          <div>
            {" "}
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input name='email' onChange={(e)=>SetEmail(e.target.value)}
                className="rounded-sm border-[1.5px] border-gray-200 bg-gray-50 text-gray-300"
                placeholder="john.doe@gmail.com"
              ></Input>
            </Field>
            <Field className="mt-2">
              <FieldLabel>Password</FieldLabel>
              <Input name='password' onChange={(e)=>setPassword(e.target.value)}
                className="rounded-sm border-[1.5px] border-gray-200 bg-gray-50 text-gray-300"
                placeholder="*********"
              ></Input>
            </Field>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1 text-lo-xs">
                <Checkbox className={"h-4 w-4 border-gray-300"}></Checkbox>
                <p>Remember me</p>
              </div>
              <p className="text-lo-xs">Forgot your password?</p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            <Button onClick={()=>handleSignin({email,password})} className={"rounded-sm min-w-full hover:cursor-pointer"}>Login</Button>
            <p className="text-lo-xs">
              Don’t have an account?{" "}
              <span className="text-blue-500 tracking-wide">Sign-up</span>{" "}
            </p>
          </div>
        </form>
  )
}

export default SignInForm