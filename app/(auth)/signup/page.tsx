import React from 'react'
import SignUpForm from './_components/SignUpForm'
import OauthButtons from '@/app/login/_components/OauthButtons'

const SignUpPage = () => {
  return (
      <div className="grid min-h-dvh min-w-dvh place-items-center">
      <div className="flex w-105 max-w-105 flex-col items-center gap-10 rounded-sm border border-gray-200 bg-gray-50 px-8 py-[72]">
        {/* Header */}
        <div className="flex flex-col items-center gap-0">
          <h1 className="text-lo-display-md font-semibold">Welcome Back!</h1>
          <p className="text-lo-sm font-normal">
            Login to manage your projects
          </p>
        </div>

{/* Container */}
<div className="w-full flex flex-col gap-6">
   {/* oAuth */}
    <OauthButtons/>
        {/* Line break */}

        <div className="flex w-full items-center gap-2">
          <div className="h-0 w-full border-b-2 border-b-gray-200"></div>
          <span className="text-lo-xs font-normal text-gray-300">OR</span>
          <div className="h-0 w-full border-b-2 border-b-gray-200"></div>
        </div>

        {/* {Form} */}
        <SignUpForm/>
</div>
     
      </div>
    </div>
  )
}

export default SignUpPage